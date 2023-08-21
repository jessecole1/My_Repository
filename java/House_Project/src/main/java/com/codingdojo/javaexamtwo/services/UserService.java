package com.codingdojo.javaexamtwo.services;

import java.util.List;
import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.codingdojo.javaexamtwo.models.LoginUser;
import com.codingdojo.javaexamtwo.models.User;
import com.codingdojo.javaexamtwo.repositories.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepo;
	
	public User register(User user, BindingResult result) {
		Optional<User> potentialUser = userRepo.findByEmail(user.getEmail());
		if(potentialUser.isPresent()) {
			result.rejectValue("email","Matches","There is already an account with that email");
		}
		if(!user.getPassword().equals(user.getConfirm())) {
			result.rejectValue("confirm", "Matches", "Passwords must match");
		}
		if(result.hasErrors()) {
			return null;
		}
		String hashed = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
		user.setPassword(hashed);
		return userRepo.save(user);
	}
	
	public User login(LoginUser newLogin, BindingResult result) {
		Optional<User> potentialUser = userRepo.findByEmail(newLogin.getEmail());
		
		if(!potentialUser.isPresent()) {
			result.rejectValue("email", "Matches", "Email not found");
			return null;
		}
		
		User user = potentialUser.get();
		
		if(!BCrypt.checkpw(newLogin.getPassword(), user.getPassword())) {
			result.rejectValue("password", "Matches", "Invalid password");
		}
		
		if(result.hasErrors()) {
			return null;
		}
		return user;
	}
	
	public User findById(Long id) {
		Optional<User> user = userRepo.findById(id);
		if(!user.isPresent()) {
			return null;
		}
		return user.get();
	}
	
	public List<User> findAll() {
		return userRepo.findAll();
	}

}
