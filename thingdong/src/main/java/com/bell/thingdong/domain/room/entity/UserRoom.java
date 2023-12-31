package com.bell.thingdong.domain.room.entity;

import java.util.List;

import com.bell.thingdong.domain.objet.entity.UserObject;
import com.bell.thingdong.domain.user.entity.User;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Index;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Table(name = "user_rooms", indexes = {@Index(name = "idx_userroom_user_id", columnList = "user_id")})
public class UserRoom {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "room_id", nullable = false)
	private Long roomId;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id", nullable = false)
	private User user;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "room_color", nullable = false)
	private RoomColor roomColor;

	@OneToMany(mappedBy = "room")
	private List<UserObject> userObjectList;

	@Builder.Default
	@Column(name = "dark_mode", nullable = false)
	private String darkMode = "N";

	public void setRoomColor(RoomColor roomColor) {
		this.roomColor = roomColor;
	}

	public void setDarkMode(String darkMode) {
		this.darkMode = darkMode;
	}
}