package com.example.exercise.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.exercise.models.LoginUser;
import com.example.exercise.models.User;
import com.example.exercise.services.UserService;

@Controller
public class MainController {
	
	@Autowired
	private UserService userServ;
	
	@GetMapping("/")
	public String index(Model model) {
//		
//		model.addAttribute("newUser", new User());
//		model.addAttribute("newLoginUser", new LoginUser());
		
		return "index.jsp";
		
	}
	
	@GetMapping("/account")
	public String account(Model model) {
		
		model.addAttribute("newUser", new User());
		model.addAttribute("newLoginUser", new LoginUser());
		
	
	return "loginOrReg.jsp";
	}

}
