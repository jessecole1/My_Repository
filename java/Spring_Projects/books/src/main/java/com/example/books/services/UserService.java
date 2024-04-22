package com.example.books.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.books.models.User;
import com.example.books.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepo;
	
	public User getById(Long id) {
		Optional<User> user = userRepo.findById(id);
		if(!user.isPresent()) {
			return null;
		}
		return user.get();
	}
	
}
