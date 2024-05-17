package com.example.usersWithPictures.models;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="photos")
public class Photos {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	private String imageName;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="user_id")
	private User user;
	
	private String caption;
	
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date createdAt;
	
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date updatedAt;
	
	@OneToMany(mappedBy="photo", cascade=CascadeType.ALL, fetch=FetchType.LAZY)
	private List<Comment> comments;
	
	@ManyToMany(fetch=FetchType.LAZY)
	@JoinTable(
			name="likes",
			joinColumns = @JoinColumn(name="photo_id"),
			inverseJoinColumns = @JoinColumn(name="user_id")
			)
	private List<User> usersWhoLiked;
	
	public Photos() {}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getImageName() {
		return imageName;
	}

	public void setImageName(String imageName) {
		this.imageName = imageName;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getCaption() {
		return caption;
	}

	public void setCaption(String caption) {
		this.caption = caption;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	public List<Comment> getComments() {
		return comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}

	public List<User> getUsersWhoLiked() {
		return usersWhoLiked;
	}

	public void setUsersWhoLiked(List<User> usersWhoLiked) {
		this.usersWhoLiked = usersWhoLiked;
	};

}
