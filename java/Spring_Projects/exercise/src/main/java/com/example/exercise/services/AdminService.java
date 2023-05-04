package com.example.exercise.services;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.example.exercise.models.Admin;
import com.example.exercise.models.AdminLogin;
import com.example.exercise.repositories.AdminRepository;

@Service
public class AdminService {

	@Autowired
	private AdminRepository adminRepo;


	public Admin adminLogin(AdminLogin newLoginAdmin, BindingResult result) {
		Optional<Admin> potentialAdmin = adminRepo.findByEmail(newLoginAdmin.getEmail());
		
		if(!potentialAdmin.isPresent()) {
			result.rejectValue("username","Matches", "Invalid");
			return null;
		}
		
		Admin admin = potentialAdmin.get();
		
//		if (!BCrypt.checkpw(newLoginAdmin.getPassword(), admin.getPassword())) {
//			result.rejectValue("password", "Matches", "Invalid");
//		}
		
		if (result.hasErrors()) {
			return null;
		}
		
		return admin;
	}
	
}
