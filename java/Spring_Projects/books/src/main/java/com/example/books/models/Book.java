package com.example.books.models;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="books")
public class Book {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@NotEmpty(message="Title is required")
	@Size(min=3, max=50, message="Title must be between 3 and 50 characters")
	private String title;
	
	@NotEmpty(message="Author name is required")
	@Size(min=3, max=120, message="Author name must be between 3 and 120 characters")
	private String authorName;
	
	@NotEmpty(message="Genre is required")
	@Size(min=1, max=120, message="Please type in a genre")
	private String genre;
	
	@NotNull(message="Release date is required")
	@Min(value=1, message="Release date is required")
	private Integer releaseDate;
	
	@NotEmpty(message="Description is required")
	@Size(min=20, max=300, message="Please write a detailed description")
	private String description;
	
	@ManyToMany(fetch=FetchType.LAZY)
	@JoinTable(
			name="users_want_to_read_books",
			joinColumns = @JoinColumn(name = "book_id"),
			inverseJoinColumns = @JoinColumn(name = "user_id")
			)
	private List<User> usersWhoWantToRead;
	
	@ManyToMany(fetch=FetchType.LAZY)
	@JoinTable(
			name="users_have_read_books",
			joinColumns = @JoinColumn(name = "book_id"),
			inverseJoinColumns = @JoinColumn(name = "user_id")
			)
	private List<User> usersReadBook;
	
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date createdAt;
	
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date updatedAt;

	public Book() {}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAuthorName() {
		return authorName;
	}

	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public Integer getReleaseDate() {
		return releaseDate;
	}

	public void setReleaseDate(Integer releaseDate) {
		this.releaseDate = releaseDate;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<User> getUsersWhoWantToRead() {
		return usersWhoWantToRead;
	}

	public void setUsersWhoWantToRead(List<User> usersWhoWantToRead) {
		this.usersWhoWantToRead = usersWhoWantToRead;
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
	
	@PrePersist
	protected void onCreate() {
		this.createdAt = new Date();
	}
	
	@PreUpdate
	protected void onUpdate() {
		this.updatedAt = new Date();
	}
	
}


