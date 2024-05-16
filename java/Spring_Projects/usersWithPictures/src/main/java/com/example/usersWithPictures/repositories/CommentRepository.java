package com.example.usersWithPictures.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.usersWithPictures.models.Comment;

@Repository
public interface CommentRepository extends CrudRepository<Comment, Long> {
	
	public Comment getById(Long id);
	
}
