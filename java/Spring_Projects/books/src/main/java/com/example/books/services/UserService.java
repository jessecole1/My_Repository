package com.example.books.services;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.example.books.models.User;
import com.example.books.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepo;
	
	public User register(User newUser, BindingResult result) {
		
		Optional<User> potentialUser = userRepo.findByEmail(newUser.getEmail());
		
		if(potentialUser.isPresent()) {
			result.rejectValue("email", "Matches", "Email address is already in use.");
		}
		
		if(!newUser.getPassword().equals(newUser.getConfirm())) {
			
			result.rejectValue("Confirm", "Matches", "Passwords don't match.");
		}
		
		if(result.hasErrors()) {
			return null;
		}
		
		String hashed = BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
		newUser.setPassword(hashed);
		return userRepo.save(newUser);
		
	}
	
	public User getById(Long id) {
		Optional<User> user = userRepo.findById(id);
		if(!user.isPresent()) {
			return null;
		}
		return user.get();
	}
	
}
