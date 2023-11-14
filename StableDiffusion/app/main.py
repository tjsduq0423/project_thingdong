from fastapi import FastAPI
from pydantic import BaseModel

import spaces
import trimesh
import tempfile
import numpy as np
import torch
from diffusers import ShapEPipeline
from diffusers.utils import export_to_ply, export_to_gif
from PIL import Image

torch.backends.cuda.matmul.allow_tf32 = True
torch.backends.cudnn.benchmark = True


class Model:
    def __init__(self):
        self.pipe = ShapEPipeline.from_pretrained(
            "openai/shap-e", torch_dtype=torch.float16
        ).to("cuda")
        self.pipe.enable_xformers_memory_efficient_attention()

    def make_transparent(self, png_path):
        image = Image.open(png_path)
        image = image.convert("RGBA")
        data = image.getdata()

        new_data = []
        for item in data:
            if item[:3] == (255, 255, 255):
                new_data.append((255, 255, 255, 0))  # 알파 채널을 0으로 설정하여 투명하게 만듭니다.
            else:
                new_data.append(item)

        image.putdata(new_data)
        image.save(png_path)

    def make_glb(
        self,
        prompt: str,
    ):
        images = self.pipe(
            prompt=prompt,
            guidance_scale=8,
            num_inference_steps=40,
            frame_size=256,
            output_type="mesh",
        ).images

        ply_path = tempfile.NamedTemporaryFile(
            suffix=".ply", delete=False, dir="/root/www/resources/ply"
        )
        export_to_ply(images[0], ply_path.name)

        mesh = trimesh.load(ply_path.name, file_type="ply")
        rot = trimesh.transformations.rotation_matrix(-np.pi / 2, [1, 0, 0])
        mesh = mesh.apply_transform(rot)
        rot = trimesh.transformations.rotation_matrix(np.pi, [0, 1, 0])
        mesh = mesh.apply_transform(rot)

        glb_path = tempfile.NamedTemporaryFile(
            suffix=".glb", delete=False, dir="/root/www/resources/glb/unbox"
        )

        mesh.export(glb_path.name, file_type="glb")

        return glb_path.name

    def make_img(
        self,
        prompt: str,
    ):
        images = self.pipe(
            prompt=prompt,
            guidance_scale=7.5,
            num_inference_steps=40,
            frame_size=256,
        ).images

        gif_path = tempfile.NamedTemporaryFile(
            suffix=".gif", delete=False, dir="/root/www/resources/gif"
        )
        export_to_gif(images[0], gif_path.name)

        png_path = tempfile.NamedTemporaryFile(
            suffix=".png", delete=False, dir="/root/www/resources/png/unbox"
        )
        images[0][5].save(png_path.name)

        return gif_path.name, png_path.name


app = FastAPI(
    openapi_url="/generate/openapi.json",
    docs_url="/generate/docs",
)
model = Model()


# Pydantic 모델을 사용하여 요청 객체 정의
class ResourceReq(BaseModel):
    sentence: str


class ResourceRes(BaseModel):
    pngPath: str
    glbPath: str
    gifPath: str


@spaces.GPU
def run_generate3d(prompt: str):
    glb_path = model.make_glb(prompt=prompt)
    gif_path, png_path = model.make_img(prompt=prompt)
    model.make_transparent(png_path)

    return glb_path, png_path, gif_path


@app.get("/generate")
def health_check():
    return {"Hello": "World"}


@app.post("/generate")
def get_3d(resource_req: ResourceReq):
    input_sentence = resource_req.sentence
    glb_path, png_path, gif_path = run_generate3d(input_sentence)
    pre = "https://thingdong.com/resources/"
    glb_path = pre + glb_path[20:]
    png_path = pre + png_path[20:]
    gif_path = pre + gif_path[20:]

    resource_res = ResourceRes(pngPath=png_path, glbPath=glb_path, gifPath=gif_path)

    return resource_res
