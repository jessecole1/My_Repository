package com.example.usersWithPictures.services;

import java.util.List;
import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.example.usersWithPictures.models.LoginUser;
import com.example.usersWithPictures.models.User;
import com.example.usersWithPictures.repositories.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepo;
	
	public List<User> findAllUsers() {
		return userRepo.findAll();
	}
	
	public User getById(Long id) {
		
		Optional<User> potentialUser = userRepo.findById(id);
		if(potentialUser.isPresent()) {
			return potentialUser.get();
		}
		return null;
	}
	
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
	
	public User login(LoginUser loginUser, BindingResult result) {
		Optional<User> potentialUser = userRepo.findByEmail(loginUser.getEmail());
		if (!potentialUser.isPresent()) {
			result.rejectValue("email", "Matches", "Either email or password is incorrect");
			return null;
		}
		User user = potentialUser.get();
		System.out.println("get?: " + user);
		if(!BCrypt.checkpw(loginUser.getPassword(), user.getPassword())) {
			result.rejectValue("password", "Matches", "Either email or password is incorrect.");
		}
		if(result.hasErrors()) {
			return null;
		}
		return user;
	}
	
	public void update(User user) {	
		Optional<User> theUser = userRepo.findById(user.getId());
		if (theUser.isPresent()) {
			userRepo.save(theUser.get());
		}
	}

}
