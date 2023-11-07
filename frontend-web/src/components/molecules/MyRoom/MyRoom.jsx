import React, { Suspense, useState } from 'react';
import useSpline from '@splinetool/r3f-spline';
import { OrthographicCamera } from '@react-three/drei';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import chair from './chair.glb';
import tree from './tree.glb';
import armChair from './armChair.glb';
import { Spinner } from '../Spinner/Spinner';

const Scene = ({ ...props }) => {
  const { nodes, materials } = useSpline(
    'https://prod.spline.design/XNOJwEXXivjk6AJd/scene.splinecode'
  );

  console.log(nodes);

  const gltf = useLoader(GLTFLoader, chair);
  const treeGlb = useLoader(GLTFLoader, tree);
  const armChairGlb = useLoader(GLTFLoader, armChair);
  // console.log('gltf', gltf);
  // console.log('treeGlb', treeGlb);

  return (
    <>
      {/* <color attach="background" args={['#4a229f']} /> */}
      <group {...props} dispose={null}>
        <scene name="Scene">
          <group name="Group 2" position={[1, -19.87, 12.48]}>
            <pointLight
              name="Point Light 2"
              intensity={1.88}
              distance={205}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-near={100}
              shadow-camera-far={2000}
              color="#fed500"
              position={[-35.2, 20, 103.45]}
            />
            <group
              name="Group"
              position={[-49.38, 0, 83]}
              rotation={[-Math.PI, 1.56, Math.PI]}
            >
              <group position={[30, -50, 100]} scale={1}>
                <primitive
                  // attach="geometric"
                  dispose={null}
                  object={armChairGlb.scene}
                  scale={50}
                />
              </group>
              <group
                name="Chair"
                position={[0, -25.45, 86.74]}
                rotation={[-Math.PI, 0.09, -Math.PI]}
                scale={1}
              >
                <mesh
                  name="Cylinder 16"
                  geometry={nodes['Cylinder 16'].geometry}
                  material={materials['Chair Base']}
                  castShadow
                  receiveShadow
                  position={[-20.37, -32.87, -0.85]}
                  rotation={[Math.PI, -1.26, -Math.PI / 2]}
                  scale={[0.78, 0.17, 0.78]}
                />
                <mesh
                  name="Cylinder 15"
                  geometry={nodes['Cylinder 15'].geometry}
                  material={materials['Chair Base']}
                  castShadow
                  receiveShadow
                  position={[20.68, -34.71, -0.82]}
                  rotation={[0, -0.84, Math.PI / 2]}
                  scale={[0.78, 0.17, 0.78]}
                />
                <mesh
                  name="Cylinder 14"
                  geometry={nodes['Cylinder 14'].geometry}
                  material={materials['Chair Base']}
                  castShadow
                  receiveShadow
                  position={[0.6, -34.71, -20.16]}
                  rotation={[0, -0.02, Math.PI / 2]}
                  scale={[0.78, 0.17, 0.78]}
                />
                <mesh
                  name="Cylinder 13"
                  geometry={nodes['Cylinder 13'].geometry}
                  material={materials['Chair Base']}
                  castShadow
                  receiveShadow
                  position={[-0.1, -34.71, 19.84]}
                  rotation={[0, -Math.PI / 9, Math.PI / 2]}
                  scale={[0.78, 0.17, 0.78]}
                />
                <mesh
                  name="Cube 54"
                  geometry={nodes['Cube 54'].geometry}
                  material={materials['Chair Base']}
                  castShadow
                  receiveShadow
                  position={[-16.75, -30.59, -0.17]}
                  rotation={[-Math.PI / 2, 0, 3.12]}
                  scale={[0.05, 0.28, 0.36]}
                />
                <mesh
                  name="Cube 53"
                  geometry={nodes['Cube 53'].geometry}
                  material={materials['Chair Base']}
                  castShadow
                  receiveShadow
                  position={[17.24, -30.59, 0.42]}
                  rotation={[-Math.PI / 2, 0, 3.12]}
                  scale={[0.05, 0.28, 0.36]}
                />
                <mesh
                  name="Cube 52"
                  geometry={nodes['Cube 52'].geometry}
                  material={materials['Chair Base']}
                  castShadow
                  receiveShadow
                  position={[0.24, -27.52, -0.15]}
                  rotation={[-Math.PI / 2, 0, 3.12]}
                  scale={[0.36, 0.37, 0.36]}
                />
                <mesh
                  name="Cube 56"
                  geometry={nodes['Cube 56'].geometry}
                  material={materials['Chair Base']}
                  castShadow
                  receiveShadow
                  position={[0.52, -30.19, -16.38]}
                  rotation={[-Math.PI / 2, 0, 1.55]}
                  scale={[0.36, 0.28, 0.36]}
                />
                <mesh
                  name="Cube 55"
                  geometry={nodes['Cube 55'].geometry}
                  material={materials['Chair Base']}
                  castShadow
                  receiveShadow
                  position={[-0.06, -30.19, 16.68]}
                  rotation={[-Math.PI / 2, 0, 1.55]}
                  scale={[0.36, 0.28, 0.36]}
                />
                <mesh
                  name="Cube 51"
                  geometry={nodes['Cube 51'].geometry}
                  material={materials['Chair Base']}
                  castShadow
                  receiveShadow
                  position={[0.23, -27.52, 0.13]}
                  rotation={[-Math.PI / 2, 0, 1.55]}
                  scale={[0.36, 0.28, 0.36]}
                />
                <mesh
                  name="Cylinder 12"
                  geometry={nodes['Cylinder 12'].geometry}
                  material={materials['Cylinder 12 Material']}
                  castShadow
                  receiveShadow
                  position={[0.07, -17.28, -0.22]}
                  rotation={[0, -0.02, Math.PI]}
                  scale={[0.13, 0.22, 0.13]}
                />
                <mesh
                  name="Cube 50"
                  geometry={nodes['Cube 50'].geometry}
                  material={materials.Chair}
                  castShadow
                  receiveShadow
                  position={[-0.15, -4.73, -0.21]}
                  rotation={[-Math.PI / 2, 0, 1.55]}
                  scale={[1.37, 1.37, 0.62]}
                />
                <mesh
                  name="Cube 49"
                  geometry={nodes['Cube 49'].geometry}
                  material={materials['Cube 49 Material']}
                  castShadow
                  receiveShadow
                  position={[-1.07, 7.13, -19.31]}
                  rotation={[0, 1.55, 0]}
                />
                <mesh
                  name="Cube 48"
                  geometry={nodes['Cube 48'].geometry}
                  material={materials.Chair}
                  castShadow
                  receiveShadow
                  position={[-1.08, 26.9, -18.31]}
                  rotation={[0, 1.55, 0]}
                />
              </group>
              <group name="Bed Table" position={[0, -21.98, -0.3]}>
                <mesh
                  name="Sphere 2"
                  geometry={nodes['Sphere 2'].geometry}
                  material={materials['Sphere 2 Material']}
                  castShadow
                  receiveShadow
                  position={[-0.11, -10.35, 19.72]}
                  rotation={[0, -0.02, 0]}
                  scale={0.23}
                />
                <mesh
                  name="Sphere"
                  geometry={nodes.Sphere.geometry}
                  material={materials['Sphere Material']}
                  castShadow
                  receiveShadow
                  position={[-0.11, 8.24, 19.72]}
                  rotation={[0, -0.02, 0]}
                  scale={0.23}
                />
                <mesh
                  name="Cube 61"
                  geometry={nodes['Cube 61'].geometry}
                  material={materials['Cube 61 Material']}
                  castShadow
                  receiveShadow
                  position={[-0.24, -9.89, 12.89]}
                  rotation={[0, -0.02, 0]}
                  scale={[0.84, 0.34, 0.25]}
                />
                <mesh
                  name="Cube 60"
                  geometry={nodes['Cube 60'].geometry}
                  material={materials['Cube 60 Material']}
                  castShadow
                  receiveShadow
                  position={[-0.24, 8.92, 12.89]}
                  rotation={[0, -0.02, 0]}
                  scale={[0.84, 0.34, 0.25]}
                />
                <mesh
                  name="Cube 59"
                  geometry={nodes['Cube 59'].geometry}
                  material={materials['Cube 59 Material']}
                  castShadow
                  receiveShadow
                  position={[0, 0, -1.14]}
                  rotation={[0, -0.02, 0]}
                />
              </group>
              <group name="Lamp" position={[1.65, 20.87, 0.63]}>
                <mesh
                  name="Cylinder 22"
                  geometry={nodes['Cylinder 22'].geometry}
                  material={materials['Cylinder 22 Material']}
                  castShadow
                  receiveShadow
                  position={[0, -10.13, 0]}
                  rotation={[-Math.PI, Math.PI / 2, 0]}
                  scale={0.76}
                />
                <mesh
                  name="Cylinder 21"
                  geometry={nodes['Cylinder 21'].geometry}
                  material={materials['Cylinder 21 Material']}
                  castShadow
                  receiveShadow
                  position={[0, 11.8, 0]}
                  rotation={[-Math.PI, Math.PI / 2, 0]}
                  scale={0.98}
                />
              </group>
              <directionalLight
                name="Directional Light 2"
                intensity={0.3}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-near={-10000}
                shadow-camera-far={100000}
                shadow-camera-left={-1250}
                shadow-camera-right={1250}
                shadow-camera-top={1250}
                shadow-camera-bottom={-1250}
                color="#8ec1fe"
                position={[530.26, 187.64, 274.71]}
              />
              <directionalLight
                name="Directional Light"
                intensity={0.6}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-near={-10000}
                shadow-camera-far={100000}
                shadow-camera-left={-350}
                shadow-camera-right={350}
                shadow-camera-top={350}
                shadow-camera-bottom={-350}
                color="#cde5fe"
                position={[-280.4, 372.28, 569.66]}
              />
              <group name=" Coffee Cup" position={[152.9, -2.92, 35.73]}>
                <mesh
                  name="Torus"
                  geometry={nodes.Torus.geometry}
                  material={materials['Torus Material']}
                  castShadow
                  receiveShadow
                  position={[5.04, 0.64, 0.39]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                  scale={1.46}
                />
                <mesh
                  name="Cylinder 11"
                  geometry={nodes['Cylinder 11'].geometry}
                  material={materials['Cylinder 11 Material']}
                  castShadow
                  receiveShadow
                  position={[-2.75, 0, 0]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[0.35, 0.63, 0.35]}
                />
              </group>
              <group name="Plant" position={[-6.76, -20.74, 7.93]}>
                <mesh
                  name="Cylinder 3"
                  geometry={nodes['Cylinder 3'].geometry}
                  material={materials['Cylinder 3 Material']}
                  castShadow
                  receiveShadow
                  position={[0, -36.62, -1.27]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={0.89}
                />
                <mesh
                  name="Cylinder 6"
                  geometry={nodes['Cylinder 6'].geometry}
                  material={materials['Cylinder 6 Material']}
                  castShadow
                  receiveShadow
                  position={[-0.43, 1.68, -12.29]}
                  rotation={[-0.28, 1.06, 3.04]}
                  scale={0.42}
                />
                <mesh
                  name="Cylinder 8"
                  geometry={nodes['Cylinder 8'].geometry}
                  material={materials['Cylinder 8 Material']}
                  castShadow
                  receiveShadow
                  position={[-3.46, -8.54, 12.03]}
                  rotation={[-2.62, 1.24, 0]}
                  scale={0.42}
                />
                <mesh
                  name="Cylinder 9"
                  geometry={nodes['Cylinder 9'].geometry}
                  material={materials['Cylinder 9 Material']}
                  castShadow
                  receiveShadow
                  position={[4.53, -8.73, -14.12]}
                  rotation={[-0.33, 0.34, 2.99]}
                  scale={0.42}
                />
                <mesh
                  name="Cylinder 7"
                  geometry={nodes['Cylinder 7'].geometry}
                  material={materials['Cylinder 7 Material']}
                  castShadow
                  receiveShadow
                  position={[-4.63, 3.16, 6.13]}
                  rotation={[-2.98, Math.PI / 2, 0]}
                  scale={0.42}
                />
                <mesh
                  name="Cylinder 5"
                  geometry={nodes['Cylinder 5'].geometry}
                  material={materials['Cylinder 5 Material']}
                  castShadow
                  receiveShadow
                  position={[-4.63, 8.43, -4.24]}
                  rotation={[3.05, Math.PI / 2, 0]}
                  scale={0.42}
                />
                <mesh
                  name="Cylinder 2"
                  geometry={nodes['Cylinder 2'].geometry}
                  material={materials['Cylinder 2 Material']}
                  castShadow
                  receiveShadow
                  position={[0, -26.47, -1.27]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={0.83}
                />
              </group>
              <group
                name="Table"
                position={[125.16, -37.39, 16.94]}
                rotation={[0, -Math.PI / 2, 0]}
              >
                <mesh
                  name="Cube 11"
                  geometry={nodes['Cube 11'].geometry}
                  material={materials['Cube 11 Material']}
                  castShadow
                  receiveShadow
                  position={[-22.29, -0.76, -56.16]}
                  rotation={[0, 1.55, 0]}
                  scale={[0.68, 17.88, 0.86]}
                />
                <mesh
                  name="Cube 10"
                  geometry={nodes['Cube 10'].geometry}
                  material={materials['Cube 10 Material']}
                  castShadow
                  receiveShadow
                  position={[-24.23, -0.76, 55.02]}
                  rotation={[0, 1.55, 0]}
                  scale={[0.68, 17.88, 0.86]}
                />
                <mesh
                  name="Cube 111"
                  geometry={nodes['Cube 111'].geometry}
                  material={materials['Cube 111 Material']}
                  castShadow
                  receiveShadow
                  position={[23.7, -1.76, -55.36]}
                  rotation={[0, 1.55, 0]}
                  scale={[0.68, 17.22, 0.86]}
                />
                <mesh
                  name="Cube 9"
                  geometry={nodes['Cube 9'].geometry}
                  material={materials['Cube 9 Material']}
                  castShadow
                  receiveShadow
                  position={[21.76, -1.76, 55.82]}
                  rotation={[0, 1.55, 0]}
                  scale={[0.68, 17.22, 0.86]}
                />
                <mesh
                  name="Cube 8"
                  geometry={nodes['Cube 8'].geometry}
                  material={materials['Cube 8 Material']}
                  castShadow
                  receiveShadow
                  position={[0.33, 25.16, 0]}
                  rotation={[0, 1.55, 0]}
                  scale={1.62}
                />
              </group>
              <group name="Books" position={[-0.09, 51.99, -15.98]}>
                <mesh
                  name="Cube 23"
                  geometry={nodes['Cube 23'].geometry}
                  material={materials['Cube 23 Material']}
                  castShadow
                  receiveShadow
                  position={[7.24, 7.91, 2.31]}
                  rotation={[-1.34, 1.41, 2.95]}
                  scale={[8.91, 2.17, 0.1]}
                />
                <mesh
                  name="Cube 24"
                  geometry={nodes['Cube 24'].geometry}
                  material={materials['Cube 24 Material']}
                  castShadow
                  receiveShadow
                  position={[-5.28, 7.91, 2.09]}
                  rotation={[0, 1.55, Math.PI / 2]}
                  scale={[8.9, 2.17, 0.1]}
                />
                <mesh
                  name="Cube 22"
                  geometry={nodes['Cube 22'].geometry}
                  material={materials['Cube 22 Material']}
                  castShadow
                  receiveShadow
                  position={[-0.06, 7.91, 2.18]}
                  rotation={[0, 1.55, Math.PI / 2]}
                  scale={[8.9, 2.17, 0.1]}
                />
                <mesh
                  name="Cube 58"
                  geometry={nodes['Cube 58'].geometry}
                  material={materials.Wood}
                  castShadow
                  receiveShadow
                  position={[-21.37, -13.65, -2.16]}
                  rotation={[0, 1.55, 0.91]}
                  scale={[2.17, 2.17, 0.26]}
                />
                <mesh
                  name="Cube 57"
                  geometry={nodes['Cube 57'].geometry}
                  material={materials.Wood}
                  castShadow
                  receiveShadow
                  position={[17.26, -13.65, -1.48]}
                  rotation={[0, 1.55, 0.91]}
                  scale={[2.17, 2.17, 0.26]}
                />
                <mesh
                  name="Cube 18"
                  geometry={nodes['Cube 18'].geometry}
                  material={materials['Wood 2']}
                  castShadow
                  receiveShadow
                  position={[0, -8.58, -1.34]}
                  rotation={[0, 1.55, Math.PI / 2]}
                  scale={[2.17, 2.17, 2.02]}
                />
              </group>
              <group name="Clock" position={[108.56, 89.16, -19.97]}>
                <mesh
                  name="Cylinder 19"
                  geometry={nodes['Cylinder 19'].geometry}
                  material={materials['Cylinder 19 Material']}
                  castShadow
                  receiveShadow
                  position={[5.91, 0.43, 1.5]}
                  rotation={[0, -0.02, -1.45]}
                  scale={0.09}
                />
                <mesh
                  name="Cylinder 20"
                  geometry={nodes['Cylinder 20'].geometry}
                  material={materials['Cylinder 20 Material']}
                  castShadow
                  receiveShadow
                  position={[-0.14, 1.15, 1.39]}
                  rotation={[0, -0.02, 0]}
                  scale={0.03}
                />
                <mesh
                  name="Cylinder 18"
                  geometry={nodes['Cylinder 18'].geometry}
                  material={materials['Cylinder 18 Material']}
                  castShadow
                  receiveShadow
                  position={[-0.14, 5.39, 1.39]}
                  rotation={[0, -0.02, 0]}
                  scale={0.09}
                />
                <mesh
                  name="Cylinder 17"
                  geometry={nodes['Cylinder 17'].geometry}
                  material={materials['Cylinder 17 Material']}
                  castShadow
                  receiveShadow
                  position={[0, 0, -0.41]}
                  rotation={[1.57, 0, 0.02]}
                />
              </group>
              <group
                name="Chair"
                position={[135.86, -25.45, 86.74]}
                rotation={[-Math.PI, 0.09, -Math.PI]}
                scale={1}
              >
                <mesh
                  name="Cylinder 16"
                  geometry={nodes['Cylinder 16'].geometry}
                  material={materials['Chair Base']}
                  castShadow
                  receiveShadow
                  position={[-20.37, -32.87, -0.85]}
                  rotation={[Math.PI, -1.26, -Math.PI / 2]}
                  scale={[0.78, 0.17, 0.78]}
                />
                <mesh
                  name="Cylinder 15"
                  geometry={nodes['Cylinder 15'].geometry}
                  material={materials['Chair Base']}
                  castShadow
                  receiveShadow
                  position={[20.68, -34.71, -0.82]}
                  rotation={[0, -0.84, Math.PI / 2]}
                  scale={[0.78, 0.17, 0.78]}
                />
                <mesh
                  name="Cylinder 14"
                  geometry={nodes['Cylinder 14'].geometry}
                  material={materials['Chair Base']}
                  castShadow
                  receiveShadow
                  position={[0.6, -34.71, -20.16]}
                  rotation={[0, -0.02, Math.PI / 2]}
                  scale={[0.78, 0.17, 0.78]}
                />
                <mesh
                  name="Cylinder 13"
                  geometry={nodes['Cylinder 13'].geometry}
                  material={materials['Chair Base']}
                  castShadow
                  receiveShadow
                  position={[-0.1, -34.71, 19.84]}
                  rotation={[0, -Math.PI / 9, Math.PI / 2]}
                  scale={[0.78, 0.17, 0.78]}
                />
                <mesh
                  name="Cube 54"
                  geometry={nodes['Cube 54'].geometry}
                  material={materials['Chair Base']}
                  castShadow
                  receiveShadow
                  position={[-16.75, -30.59, -0.17]}
                  rotation={[-Math.PI / 2, 0, 3.12]}
                  scale={[0.05, 0.28, 0.36]}
                />
                <mesh
                  name="Cube 53"
                  geometry={nodes['Cube 53'].geometry}
                  material={materials['Chair Base']}
                  castShadow
                  receiveShadow
                  position={[17.24, -30.59, 0.42]}
                  rotation={[-Math.PI / 2, 0, 3.12]}
                  scale={[0.05, 0.28, 0.36]}
                />
                <mesh
                  name="Cube 52"
                  geometry={nodes['Cube 52'].geometry}
                  material={materials['Chair Base']}
                  castShadow
                  receiveShadow
                  position={[0.24, -27.52, -0.15]}
                  rotation={[-Math.PI / 2, 0, 3.12]}
                  scale={[0.36, 0.37, 0.36]}
                />
                <mesh
                  name="Cube 56"
                  geometry={nodes['Cube 56'].geometry}
                  material={materials['Chair Base']}
                  castShadow
                  receiveShadow
                  position={[0.52, -30.19, -16.38]}
                  rotation={[-Math.PI / 2, 0, 1.55]}
                  scale={[0.36, 0.28, 0.36]}
                />
                <mesh
                  name="Cube 55"
                  geometry={nodes['Cube 55'].geometry}
                  material={materials['Chair Base']}
                  castShadow
                  receiveShadow
                  position={[-0.06, -30.19, 16.68]}
                  rotation={[-Math.PI / 2, 0, 1.55]}
                  scale={[0.36, 0.28, 0.36]}
                />
                <mesh
                  name="Cube 51"
                  geometry={nodes['Cube 51'].geometry}
                  material={materials['Chair Base']}
                  castShadow
                  receiveShadow
                  position={[0.23, -27.52, 0.13]}
                  rotation={[-Math.PI / 2, 0, 1.55]}
                  scale={[0.36, 0.28, 0.36]}
                />
                <mesh
                  name="Cylinder 12"
                  geometry={nodes['Cylinder 12'].geometry}
                  material={materials['Cylinder 12 Material']}
                  castShadow
                  receiveShadow
                  position={[0.07, -17.28, -0.22]}
                  rotation={[0, -0.02, Math.PI]}
                  scale={[0.13, 0.22, 0.13]}
                />
                <mesh
                  name="Cube 50"
                  geometry={nodes['Cube 50'].geometry}
                  material={materials.Chair}
                  castShadow
                  receiveShadow
                  position={[-0.15, -4.73, -0.21]}
                  rotation={[-Math.PI / 2, 0, 1.55]}
                  scale={[1.37, 1.37, 0.62]}
                />
                <mesh
                  name="Cube 49"
                  geometry={nodes['Cube 49'].geometry}
                  material={materials['Cube 49 Material']}
                  castShadow
                  receiveShadow
                  position={[-1.07, 7.13, -19.31]}
                  rotation={[0, 1.55, 0]}
                />
                <mesh
                  name="Cube 48"
                  geometry={nodes['Cube 48'].geometry}
                  material={materials.Chair}
                  castShadow
                  receiveShadow
                  position={[-1.08, 26.9, -18.31]}
                  rotation={[0, 1.55, 0]}
                />
              </group>
              <group
                name="Chair"
                position={[0, -25.45, 86.74]}
                rotation={[-Math.PI, 0.09, -Math.PI]}
                scale={1}
              >
                <mesh
                  name="Cylinder 16"
                  geometry={nodes['Cylinder 16'].geometry}
                  material={materials['Chair Base']}
                  castShadow
                  receiveShadow
                  position={[-20.37, -32.87, -0.85]}
                  rotation={[Math.PI, -1.26, -Math.PI / 2]}
                  scale={[0.78, 0.17, 0.78]}
                />
                <mesh
                  name="Cylinder 15"
                  geometry={nodes['Cylinder 15'].geometry}
                  material={materials['Chair Base']}
                  castShadow
                  receiveShadow
                  position={[20.68, -34.71, -0.82]}
                  rotation={[0, -0.84, Math.PI / 2]}
                  scale={[0.78, 0.17, 0.78]}
                />
                <mesh
                  name="Cylinder 14"
                  geometry={nodes['Cylinder 14'].geometry}
                  material={materials['Chair Base']}
                  castShadow
                  receiveShadow
                  position={[0.6, -34.71, -20.16]}
                  rotation={[0, -0.02, Math.PI / 2]}
                  scale={[0.78, 0.17, 0.78]}
                />
                <mesh
                  name="Cylinder 13"
                  geometry={nodes['Cylinder 13'].geometry}
                  material={materials['Chair Base']}
                  castShadow
                  receiveShadow
                  position={[-0.1, -34.71, 19.84]}
                  rotation={[0, -Math.PI / 9, Math.PI / 2]}
                  scale={[0.78, 0.17, 0.78]}
                />
                <mesh
                  name="Cube 54"
                  geometry={nodes['Cube 54'].geometry}
                  material={materials['Chair Base']}
                  castShadow
                  receiveShadow
                  position={[-16.75, -30.59, -0.17]}
                  rotation={[-Math.PI / 2, 0, 3.12]}
                  scale={[0.05, 0.28, 0.36]}
                />
                <mesh
                  name="Cube 53"
                  geometry={nodes['Cube 53'].geometry}
                  material={materials['Chair Base']}
                  castShadow
                  receiveShadow
                  position={[17.24, -30.59, 0.42]}
                  rotation={[-Math.PI / 2, 0, 3.12]}
                  scale={[0.05, 0.28, 0.36]}
                />
                <mesh
                  name="Cube 52"
                  geometry={nodes['Cube 52'].geometry}
                  material={materials['Chair Base']}
                  castShadow
                  receiveShadow
                  position={[0.24, -27.52, -0.15]}
                  rotation={[-Math.PI / 2, 0, 3.12]}
                  scale={[0.36, 0.37, 0.36]}
                />
                <mesh
                  name="Cube 56"
                  geometry={nodes['Cube 56'].geometry}
                  material={materials['Chair Base']}
                  castShadow
                  receiveShadow
                  position={[0.52, -30.19, -16.38]}
                  rotation={[-Math.PI / 2, 0, 1.55]}
                  scale={[0.36, 0.28, 0.36]}
                />
                <mesh
                  name="Cube 55"
                  geometry={nodes['Cube 55'].geometry}
                  material={materials['Chair Base']}
                  castShadow
                  receiveShadow
                  position={[-0.06, -30.19, 16.68]}
                  rotation={[-Math.PI / 2, 0, 1.55]}
                  scale={[0.36, 0.28, 0.36]}
                />
                <mesh
                  name="Cube 51"
                  geometry={nodes['Cube 51'].geometry}
                  material={materials['Chair Base']}
                  castShadow
                  receiveShadow
                  position={[0.23, -27.52, 0.13]}
                  rotation={[-Math.PI / 2, 0, 1.55]}
                  scale={[0.36, 0.28, 0.36]}
                />
                <mesh
                  name="Cylinder 12"
                  geometry={nodes['Cylinder 12'].geometry}
                  material={materials['Cylinder 12 Material']}
                  castShadow
                  receiveShadow
                  position={[0.07, -17.28, -0.22]}
                  rotation={[0, -0.02, Math.PI]}
                  scale={[0.13, 0.22, 0.13]}
                />
                <mesh
                  name="Cube 50"
                  geometry={nodes['Cube 50'].geometry}
                  material={materials.Chair}
                  castShadow
                  receiveShadow
                  position={[-0.15, -4.73, -0.21]}
                  rotation={[-Math.PI / 2, 0, 1.55]}
                  scale={[1.37, 1.37, 0.62]}
                />
                <mesh
                  name="Cube 49"
                  geometry={nodes['Cube 49'].geometry}
                  material={materials['Cube 49 Material']}
                  castShadow
                  receiveShadow
                  position={[-1.07, 7.13, -19.31]}
                  rotation={[0, 1.55, 0]}
                />
                <mesh
                  name="Cube 48"
                  geometry={nodes['Cube 48'].geometry}
                  material={materials.Chair}
                  castShadow
                  receiveShadow
                  position={[-1.08, 26.9, -18.31]}
                  rotation={[0, 1.55, 0]}
                />
              </group>
              <group
                name="Computer"
                position={[102.19, 8.2, 13.67]}
                rotation={[Math.PI, -1.48, Math.PI]}
              >
                <group name="Keyboard" position={[20.17, -17.38, 2.42]}>
                  <mesh
                    name="Cube 46"
                    geometry={nodes['Cube 46'].geometry}
                    material={materials['Cube 46 Material']}
                    castShadow
                    receiveShadow
                    position={[3.81, 0.38, 15.69]}
                    rotation={[0, 1.55, 0]}
                    scale={[0.03, 1.04, 0.07]}
                  />
                  <mesh
                    name="Cube 45"
                    geometry={nodes['Cube 45'].geometry}
                    material={materials['Cube 45 Material']}
                    castShadow
                    receiveShadow
                    position={[-1.37, 0.38, 15.6]}
                    rotation={[0, 1.55, 0]}
                    scale={[0.03, 1.04, 0.07]}
                  />
                  <mesh
                    name="Cube 44"
                    geometry={nodes['Cube 44'].geometry}
                    material={materials['Cube 44 Material']}
                    castShadow
                    receiveShadow
                    position={[-1.28, 0.38, 10.61]}
                    rotation={[0, 1.55, 0]}
                    scale={[0.03, 1.04, 0.07]}
                  />
                  <mesh
                    name="Cube 43"
                    geometry={nodes['Cube 43'].geometry}
                    material={materials['Cube 43 Material']}
                    castShadow
                    receiveShadow
                    position={[-1.21, 0.38, 6.37]}
                    rotation={[0, 1.55, 0]}
                    scale={[0.03, 1.04, 0.07]}
                  />
                  <mesh
                    name="Cube 42"
                    geometry={nodes['Cube 42'].geometry}
                    material={materials['Cube 42 Material']}
                    castShadow
                    receiveShadow
                    position={[-1.15, 0.38, 2.95]}
                    rotation={[0, 1.55, 0]}
                    scale={[0.03, 1.04, 0.07]}
                  />
                  <mesh
                    name="Cube 82"
                    geometry={nodes['Cube 82'].geometry}
                    material={materials['Cube 82 Material']}
                    castShadow
                    receiveShadow
                    position={[3.76, 0.38, 2.91]}
                    rotation={[0, 1.55, 0]}
                    scale={[0.03, 1.04, 0.07]}
                  />
                  <mesh
                    name="Cube 41"
                    geometry={nodes['Cube 41'].geometry}
                    material={materials['Cube 41 Material']}
                    castShadow
                    receiveShadow
                    position={[-1.09, 0.38, -0.4]}
                    rotation={[0, 1.55, 0]}
                    scale={[0.03, 1.04, 0.07]}
                  />
                  <mesh
                    name="Cube 40"
                    geometry={nodes['Cube 40'].geometry}
                    material={materials['Cube 40 Material']}
                    castShadow
                    receiveShadow
                    position={[-1.03, 0.38, -3.94]}
                    rotation={[0, 1.55, 0]}
                    scale={[0.03, 1.04, 0.07]}
                  />
                  <mesh
                    name="Cube 39"
                    geometry={nodes['Cube 39'].geometry}
                    material={materials['Cube 39 Material']}
                    castShadow
                    receiveShadow
                    position={[-0.96, 0.38, -7.65]}
                    rotation={[0, 1.55, 0]}
                    scale={[0.03, 1.04, 0.07]}
                  />
                  <mesh
                    name="Cube 38"
                    geometry={nodes['Cube 38'].geometry}
                    material={materials['Cube 38 Material']}
                    castShadow
                    receiveShadow
                    position={[-0.1, 0.38, -11.28]}
                    rotation={[0, 1.55, 0]}
                    scale={[0.03, 1.04, 0.07]}
                  />
                  <mesh
                    name="Cube 37"
                    geometry={nodes['Cube 37'].geometry}
                    material={materials['Cube 37 Material']}
                    castShadow
                    receiveShadow
                    position={[-0.8, 0.38, -15]}
                    rotation={[0, 1.55, 0]}
                    scale={[0.03, 1.04, 0.07]}
                  />
                  <mesh
                    name="Cube 36"
                    geometry={nodes['Cube 36'].geometry}
                    material={materials['Cube 36 Material']}
                    castShadow
                    receiveShadow
                    position={[-4.93, 0.38, -15.07]}
                    rotation={[0, 1.55, 0]}
                    scale={[0.03, 1.04, 0.07]}
                  />
                  <mesh
                    name="Cube 35"
                    geometry={nodes['Cube 35'].geometry}
                    material={materials['Cube 35 Material']}
                    castShadow
                    receiveShadow
                    position={[-4.99, 0.38, -11.13]}
                    rotation={[0, 1.55, 0]}
                    scale={[0.03, 1.04, 0.07]}
                  />
                  <mesh
                    name="Cube 34"
                    geometry={nodes['Cube 34'].geometry}
                    material={materials['Cube 34 Material']}
                    castShadow
                    receiveShadow
                    position={[-5.06, 0.38, -7.61]}
                    rotation={[0, 1.55, 0]}
                    scale={[0.03, 1.04, 0.07]}
                  />
                  <mesh
                    name="Cube 33"
                    geometry={nodes['Cube 33'].geometry}
                    material={materials['Cube 33 Material']}
                    castShadow
                    receiveShadow
                    position={[-5.12, 0.38, -4.01]}
                    rotation={[0, 1.55, 0]}
                    scale={[0.03, 1.04, 0.07]}
                  />
                  <mesh
                    name="Cube 32"
                    geometry={nodes['Cube 32'].geometry}
                    material={materials['Cube 32 Material']}
                    castShadow
                    receiveShadow
                    position={[-5.18, 0.38, -0.42]}
                    rotation={[0, 1.55, 0]}
                    scale={[0.03, 1.04, 0.07]}
                  />
                  <mesh
                    name="Cube 31"
                    geometry={nodes['Cube 31'].geometry}
                    material={materials['Cube 31 Material']}
                    castShadow
                    receiveShadow
                    position={[-5.24, 0.38, 2.98]}
                    rotation={[0, 1.55, 0]}
                    scale={[0.03, 1.04, 0.07]}
                  />
                  <mesh
                    name="Cube 30"
                    geometry={nodes['Cube 30'].geometry}
                    material={materials['Cube 30 Material']}
                    castShadow
                    receiveShadow
                    position={[-5.3, 0.38, 6.37]}
                    rotation={[0, 1.55, 0]}
                    scale={[0.03, 1.04, 0.07]}
                  />
                  <mesh
                    name="Cube 29"
                    geometry={nodes['Cube 29'].geometry}
                    material={materials['Cube 29 Material']}
                    castShadow
                    receiveShadow
                    position={[-5.37, 0.38, 10.61]}
                    rotation={[0, 1.55, 0]}
                    scale={[0.03, 1.04, 0.07]}
                  />
                  <mesh
                    name="Cube 28"
                    geometry={nodes['Cube 28'].geometry}
                    material={materials['Cube 28 Material']}
                    castShadow
                    receiveShadow
                    position={[-5.49, 0.38, 17.08]}
                    rotation={[0, 1.55, 0]}
                    scale={[0.03, 1.04, 0.07]}
                  />
                  <mesh
                    name="Cube 26"
                    geometry={nodes['Cube 26'].geometry}
                    material={materials['Cube 26 Material']}
                    castShadow
                    receiveShadow
                    position={[0, -0.87, 0]}
                    rotation={[0, 1.55, 0]}
                    scale={[0.45, 1.06, 0.58]}
                  />
                </group>
                <mesh
                  name="Cylinder 10"
                  geometry={nodes['Cylinder 10'].geometry}
                  material={materials['Cylinder 10 Material']}
                  castShadow
                  receiveShadow
                  position={[0, -20.09, 0.5]}
                  rotation={[-Math.PI / 2, 0, -0.02]}
                  scale={1}
                />
                <mesh
                  name="Cube 21"
                  geometry={nodes['Cube 21'].geometry}
                  material={materials['Cube 21 Material']}
                  castShadow
                  receiveShadow
                  position={[-0.05, -12.96, 0]}
                  rotation={[Math.PI / 2, 0, -1.55]}
                  scale={[0.45, 1.06, 0.58]}
                />
                <mesh
                  name="Cube 20"
                  geometry={nodes['Cube 20'].geometry}
                  material={materials['']}
                  castShadow
                  receiveShadow
                  position={[1.02, 8.42, 0.02]}
                  rotation={[1.58, 0, -1.56]}
                  scale={[1.22, 1.06, 1.06]}
                />
                <mesh
                  name="Cube 19"
                  geometry={nodes['Cube 19'].geometry}
                  material={materials['Cube 19 Material']}
                  castShadow
                  receiveShadow
                  position={[0.03, 8.42, 0]}
                  rotation={[1.58, 0, -1.56]}
                  scale={[1.44, 1.25, 1.25]}
                />
              </group>
              <group name="Sticky Notes" position={[-79.67, 7.35, 119.99]}>
                <mesh
                  name="Cube 73"
                  geometry={nodes['Cube 73'].geometry}
                  material={materials['Cube 73 Material']}
                  castShadow
                  receiveShadow
                  position={[0.2, 4.73, 2.73]}
                  rotation={[-Math.PI / 2, 0, -1.59]}
                  scale={[0.37, 0.03, 0.37]}
                />
                <mesh
                  name="Cube 72"
                  geometry={nodes['Cube 72'].geometry}
                  material={materials['Cube 72 Material']}
                  castShadow
                  receiveShadow
                  position={[-0.2, -4.73, -2.73]}
                  rotation={[-Math.PI / 2, 0, -1.59]}
                  scale={[0.37, 0.03, 0.37]}
                />
              </group>
              <group name="Walls" position={[52.9, 40.95, 93.04]}>
                <mesh
                  name="Cube 79"
                  geometry={nodes['Cube 79'].geometry}
                  material={materials.Concrete}
                  castShadow
                  receiveShadow
                  position={[-102.18, 48.97, -88.08]}
                  rotation={[1.54, 1.05, -1.54]}
                  scale={1}
                />
                <mesh
                  name="Cube 80"
                  geometry={nodes['Cube 80'].geometry}
                  material={materials.Concrete}
                  castShadow
                  receiveShadow
                  position={[-74.96, 99.14, 6.53]}
                  rotation={[1.54, 1.05, -3.11]}
                  scale={1}
                />
                <mesh
                  name="Cube 78"
                  geometry={nodes['Cube 78'].geometry}
                  material={materials.Concrete}
                  castShadow
                  receiveShadow
                  position={[-105.32, 49.01, 86.42]}
                  rotation={[1.54, 1.05, -1.54]}
                  scale={1}
                />
                <mesh
                  name="Cube 77"
                  geometry={nodes['Cube 77'].geometry}
                  material={materials.Concrete}
                  castShadow
                  receiveShadow
                  position={[-139.31, -71.16, -9.04]}
                  rotation={[0, 1.55, 0]}
                />
                <mesh
                  name="Shape"
                  geometry={nodes.Shape.geometry}
                  material={materials.Concrete}
                  castShadow
                  receiveShadow
                  position={[135.82, -105.6, -130.96]}
                  rotation={[0, -0.02, 0]}
                  scale={1}
                />
                <mesh
                  name="Wall"
                  geometry={nodes.Wall.geometry}
                  material={materials.Wall}
                  castShadow
                  receiveShadow
                  position={[135.5, -105.6, -114.31]}
                  rotation={[0, -0.02, 0]}
                  scale={1}
                />
                <mesh
                  name="Cube 5"
                  geometry={nodes['Cube 5'].geometry}
                  material={materials.Wall}
                  castShadow
                  receiveShadow
                  position={[-68.8, 101.1, 13.19]}
                  rotation={[1.54, 1.05, 0.03]}
                  scale={1}
                />
                <mesh
                  name="Cube 4"
                  geometry={nodes['Cube 4'].geometry}
                  material={materials.Wall}
                  castShadow
                  receiveShadow
                  position={[-97.09, 49.1, -80.4]}
                  rotation={[1.54, 1.05, -1.54]}
                />
                <mesh
                  name="Cube 3"
                  geometry={nodes['Cube 3'].geometry}
                  material={materials.Wall}
                  castShadow
                  receiveShadow
                  position={[-100.45, 48.2, 87.31]}
                  rotation={[1.54, 1.05, -1.54]}
                />
                <mesh
                  name="Cube 7"
                  geometry={nodes['Cube 7'].geometry}
                  material={materials.Wall}
                  castShadow
                  receiveShadow
                  position={[-95.78, -61.45, -118.4]}
                  rotation={[0, -0.02, 0]}
                  scale={[1, 1, 0.64]}
                />
                <mesh
                  name="Cube"
                  geometry={nodes.Cube.geometry}
                  material={materials.Wall}
                  castShadow
                  receiveShadow
                  position={[-133.77, -61.45, -0.44]}
                  rotation={[0, 1.55, 0]}
                />
              </group>
              <group
                name="Window"
                position={[-58.08, 85.3, 99.95]}
                rotation={[1.54, 1.05, 0.03]}
                scale={[0.2, 0.12, 0.04]}
              >
                <mesh
                  name="Rectangle 20"
                  geometry={nodes['Rectangle 20'].geometry}
                  material={materials['']}
                  castShadow
                  receiveShadow
                  position={[-15.65, -27.32, 90.19]}
                  rotation={[0, 0, -Math.PI / 2]}
                  scale={[2.86, 1, 1]}
                />
                <mesh
                  name="Cube 461"
                  geometry={nodes['Cube 461'].geometry}
                  material={materials['Cube 461 Material']}
                  castShadow
                  receiveShadow
                  position={[5.95, -4.2, 79.52]}
                  rotation={[0, 0, -Math.PI / 2]}
                  scale={[0.78, 0.17, 0.34]}
                />
                <group
                  name="Empty Object"
                  position={[0, 0, 72.26]}
                  scale={[1.63, 2.18, 0.2]}
                >
                  <mesh
                    onClick={() => {
                      console.log('창문 클릭');
                    }}
                    name="Mar_Window"
                    geometry={nodes.Mar_Window.geometry}
                    material={materials['Mar_Window Material']}
                    castShadow
                    receiveShadow
                    rotation={[-Math.PI / 2, -Math.PI / 4, -Math.PI]}
                    scale={1}
                  />
                </group>
                <group
                  name="Window1"
                  position={[0, 0, 0]}
                  scale={[1.9, 2.54, 1]}
                >
                  <mesh
                    name="Mar_Window1"
                    geometry={nodes.Mar_Window1.geometry}
                    material={materials['Mar_Window1 Material']}
                    castShadow
                    receiveShadow
                    rotation={[-Math.PI / 2, -Math.PI / 4, -Math.PI]}
                    scale={1}
                  />
                </group>
              </group>
              <group name="Floor" position={[52.4, -67.18, 95.72]}>
                <mesh
                  name="Floor Surface"
                  geometry={nodes['Floor Surface'].geometry}
                  material={materials.Floor}
                  castShadow
                  receiveShadow
                  position={[0, 2.02, 0]}
                  rotation={[-1.58, 0, 1.56]}
                  scale={[1, 1.15, 1]}
                />
                <mesh
                  name="Wood"
                  geometry={nodes.Wood.geometry}
                  material={materials['Wood Material']}
                  castShadow
                  receiveShadow
                  position={[0, -0.42, 0]}
                  rotation={[-1.58, 0, 1.56]}
                  scale={[1, 1.15, 1]}
                />
                <mesh
                  name="Concrete"
                  geometry={nodes.Concrete.geometry}
                  material={materials.Concrete}
                  castShadow
                  receiveShadow
                  position={[0, -12.17, 0]}
                  rotation={[-1.58, 0, 1.56]}
                  scale={[1, 1.15, 1]}
                />
              </group>
              {/* <ChairScene /> */}
              {/* <OrthographicCamera
            name="Default Camera"
            makeDefault={true}
            zoom={1.51}
            far={100000}
            near={-50000}
            position={[565.14, 375.08, 723.2]}
            rotation={[-0.52, 0.6, 0.31]}
            scale={1}
          />
          <OrthographicCamera
            name="1"
            makeDefault={false}
            far={10000}
            near={-50000}
          />
          <hemisphereLight
            name="Default Ambient Light"
            intensity={0.15}
            color="#eaeaea"
          /> */}

              <OrthographicCamera
                name="Default Camera"
                makeDefault={true}
                zoom={1.51}
                far={100000}
                near={-50000}
                position={[565.14, 375.08, 723.2]}
                rotation={[-0.52, 0.6, 0.31]}
                scale={1}
              />
              <OrthographicCamera
                name="1"
                makeDefault={false}
                far={10000}
                near={-50000}
              />
              <hemisphereLight
                name="Default Ambient Light"
                intensity={0.8}
                color="#eaeaea"
              />
            </group>
          </group>
        </scene>
      </group>
    </>
  );
};

const ChairScene = () => {
  const gltf = useLoader(GLTFLoader, chair);
  console.log(gltf);
  // useFrame((state, delta, frame) => {
  //   const mesh = gltf.scene.children[0];
  //   mesh.rotation.y = mesh.rotation.z += 0.01;
  //   mesh.rotation.x = state.clock.getElapsedTime();
  // });

  return (
    <>
      <color attach="background" args={['#f4efff']} />
      <group position={[0, 1, 0]} scale={1}>
        <primitive
          // attach="geometric"
          dispose={null}
          object={gltf.scene}
          scale={1}
        />
      </group>
    </>
  );
};

/*
  Auto-generated by Spline
*/

// const NewScene = ({ ...props }) => {
//   const { nodes, materials } = useSpline(
//     'https://prod.spline.design/FRcAbCYltXFEICGn/scene.splinecode'
//   );
//   return (
//     <>
//       <color attach="background" args={['#303d82']} />
//       <group {...props} dispose={null}>
//         <scene name="Scene 1">
//           <group name="Walls" position={[73.9, -56.05, 169.04]}>
//             <mesh
//               name="Cube 79"
//               geometry={nodes['Cube 79'].geometry}
//               material={materials.Concrete}
//               castShadow
//               receiveShadow
//               position={[-102.18, 48.97, -88.08]}
//               rotation={[1.54, 1.05, -1.54]}
//               scale={1}
//             />
//             <mesh
//               name="Cube 80"
//               geometry={nodes['Cube 80'].geometry}
//               material={materials.Concrete}
//               castShadow
//               receiveShadow
//               position={[-74.96, 99.14, 6.53]}
//               rotation={[1.54, 1.05, -3.11]}
//               scale={1}
//             />
//             <mesh
//               name="Cube 78"
//               geometry={nodes['Cube 78'].geometry}
//               material={materials.Concrete}
//               castShadow
//               receiveShadow
//               position={[-105.32, 49.01, 86.42]}
//               rotation={[1.54, 1.05, -1.54]}
//               scale={1}
//             />
//             <mesh
//               name="Cube 77"
//               geometry={nodes['Cube 77'].geometry}
//               material={materials.Concrete}
//               castShadow
//               receiveShadow
//               position={[-139.31, -71.16, -9.04]}
//               rotation={[0, 1.55, 0]}
//             />
//             <mesh
//               name="Shape"
//               geometry={nodes.Shape.geometry}
//               material={materials.Concrete}
//               castShadow
//               receiveShadow
//               position={[135.82, -105.6, -130.96]}
//               rotation={[0, -0.02, 0]}
//               scale={1}
//             />
//             <mesh
//               name="Wall"
//               geometry={nodes.Wall.geometry}
//               material={materials.Wall}
//               castShadow
//               receiveShadow
//               position={[135.5, -105.6, -114.31]}
//               rotation={[0, -0.02, 0]}
//               scale={1}
//             />
//             <mesh
//               name="Cube 5"
//               geometry={nodes['Cube 5'].geometry}
//               material={materials.Wall}
//               castShadow
//               receiveShadow
//               position={[-68.8, 101.1, 13.19]}
//               rotation={[1.54, 1.05, 0.03]}
//               scale={1}
//             />
//             <mesh
//               name="Cube 4"
//               geometry={nodes['Cube 4'].geometry}
//               material={materials.Wall}
//               castShadow
//               receiveShadow
//               position={[-97.09, 49.1, -80.4]}
//               rotation={[1.54, 1.05, -1.54]}
//             />
//             <mesh
//               name="Cube 3"
//               geometry={nodes['Cube 3'].geometry}
//               material={materials.Wall}
//               castShadow
//               receiveShadow
//               position={[-100.45, 48.2, 87.31]}
//               rotation={[1.54, 1.05, -1.54]}
//             />
//             <mesh
//               name="Cube 7"
//               geometry={nodes['Cube 7'].geometry}
//               material={materials.Wall}
//               castShadow
//               receiveShadow
//               position={[-95.78, -61.45, -118.4]}
//               rotation={[0, -0.02, 0]}
//               scale={[1, 1, 0.64]}
//             />
//             <mesh
//               name="Cube"
//               geometry={nodes.Cube.geometry}
//               material={materials.Wall}
//               castShadow
//               receiveShadow
//               position={[-133.77, -61.45, -0.44]}
//               rotation={[0, 1.55, 0]}
//             />
//           </group>
//           <group name="Floor 2" position={[73.4, -164.18, 171.72]}>
//             <mesh
//               name="Floor Surface"
//               geometry={nodes['Floor Surface'].geometry}
//               material={materials.Floor}
//               castShadow
//               receiveShadow
//               position={[0, 2.02, 0]}
//               rotation={[-1.58, 0, 1.56]}
//               scale={[1, 1.15, 1]}
//             />
//             <mesh
//               name="Wood"
//               geometry={nodes.Wood.geometry}
//               material={materials['Wood Material']}
//               castShadow
//               receiveShadow
//               position={[0, -0.42, 0]}
//               rotation={[-1.58, 0, 1.56]}
//               scale={[1, 1.15, 1]}
//             />
//             <mesh
//               name="Concrete"
//               geometry={nodes.Concrete.geometry}
//               material={materials.Concrete}
//               castShadow
//               receiveShadow
//               position={[0, -12.17, 0]}
//               rotation={[-1.58, 0, 1.56]}
//               scale={[1, 1.15, 1]}
//             />
//           </group>

//           <directionalLight
//             name="Directional Light"
//             castShadow
//             intensity={0.7}
//             shadow-mapSize-width={1024}
//             shadow-mapSize-height={1024}
//             shadow-camera-near={-10000}
//             shadow-camera-far={100000}
//             shadow-camera-left={-1000}
//             shadow-camera-right={1000}
//             shadow-camera-top={1000}
//             shadow-camera-bottom={-1000}
//             position={[237.33, 261, 451.14]}
//           />
//           <OrthographicCamera
//             name="1"
//             makeDefault={true}
//             far={10000}
//             near={-50000}
//           />
//           <hemisphereLight
//             name="Default Ambient Light"
//             intensity={0.75}
//             color="#eaeaea"
//           />
//         </scene>
//       </group>
//     </>
//   );
// };

const MyRoom = () => {
  return (
    <div style={{ backgroundColor: 'skyblue', width: '100%', height: '100vh' }}>
      <Suspense fallback={<Spinner />}>
        <Canvas
          shadows
          flat
          linear
          style={{
            width: '100%',
            height: '100vh',
          }}
        >
          <Scene />
          {/* <NewScene /> */}
          {/* <ChairScene /> */}
          <OrbitControls />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default MyRoom;
