package com.bell.thingdong.domain.user.dto.response;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LoginRes {

	@Schema(description = "사용자 accessToken", example = "echnvjfjhlsdambklweabntb1012fasdglkjghkj23hj8")
	private String accessToken;

	// 사용자 정보 추가
}