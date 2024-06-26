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
import javax.persistence.Transient;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="users")
public class User {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@NotEmpty(message="Username is required")
	@Size(min=3, max=20, message="Username must be 3 - 20 characters long")
	private String username;
	
	@NotEmpty(message="Email is required.")
	@Email(message="Please enter a valid email address.")
	private String email;
	
	@NotEmpty(message="Password is required")
	@Size(min=3, max=128, message="Password must be at least 8 characters")
	private String password;
	
	@Transient
	@NotEmpty(message="Please confirm password")
	@Size(min=3, max=128, message="Please confirm your password")
	private String confirm;
	
	@ManyToMany(fetch=FetchType.LAZY)
	@JoinTable(
			name="users_want_to_read_books",
			joinColumns = @JoinColumn(name = "user_id"),
			inverseJoinColumns = @JoinColumn(name = "book_id")
			)
	private List<Book> wantToReadBooks;
	
	@ManyToMany(fetch=FetchType.LAZY)
	@JoinTable(
			name="users_have_read_books",
			joinColumns = @JoinColumn(name = "user_id"),
			inverseJoinColumns = @JoinColumn(name = "book_id")
			)
	private List<Book> haveReadBooks;
	
	public String image;
	
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date createdAt;
	
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date updatedAt;
	
	public User() {}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getConfirm() {
		return confirm;
	}

	public void setConfirm(String confirm) {
		this.confirm = confirm;
	}

	public List<Book> getWantToReadBooks() {
		return wantToReadBooks;
	}

	public void setWantToReadBooks(List<Book> wantToReadBooks) {
		this.wantToReadBooks = wantToReadBooks;
	}

	public List<Book> getHaveReadBooks() {
		return haveReadBooks;
	}

	public void setHaveReadBooks(List<Book> haveReadBooks) {
		this.haveReadBooks = haveReadBooks;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
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
