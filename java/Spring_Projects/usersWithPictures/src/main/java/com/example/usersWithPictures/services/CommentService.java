package com.example.usersWithPictures.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.usersWithPictures.models.Comment;
import com.example.usersWithPictures.repositories.CommentRepository;

@Service
public class CommentService {
	
	@Autowired
	private CommentRepository commentRepo;
	
	public Comment getById(Long id) {
		return commentRepo.getById(id);
	}
	
	public void save(Comment comment) {
		commentRepo.save(comment);
	}

}
