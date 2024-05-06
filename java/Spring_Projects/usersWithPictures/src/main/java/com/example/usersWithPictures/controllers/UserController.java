package com.example.usersWithPictures.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.usersWithPictures.models.LoginUser;
import com.example.usersWithPictures.models.User;
import com.example.usersWithPictures.services.UserService;

@Controller
public class UserController {
	
	@Autowired 
	private UserService userServ;
	
	@GetMapping("/")
	public String index(@Valid @ModelAttribute("newLogin") LoginUser newLogin, BindingResult result, 
			@Valid @ModelAttribute("newUser") User user, BindingResult res) {
		
		return "index.jsp";
	}
	
	@PostMapping("/register")
	public String register(@Valid @ModelAttribute("newUser") User newUser, BindingResult result, Model model, HttpSession session) {
		if(result.hasErrors()) {
			model.addAttribute("newLogin", new LoginUser());
			return "index.jsp";
		}
		
		userServ.register(newUser, result);
		session.setAttribute("user", newUser.getId());
		
		return "redirect:/home";
	}
	
	

}
