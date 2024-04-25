package com.example.books.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.books.models.LoginUser;
import com.example.books.models.User;
import com.example.books.services.UserService;

@Controller
public class MainController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/")
	public String index(Model model) {
		return "index.jsp";
	}
	
	@GetMapping("/page/register")
	public String goToRegisterPage(@Valid @ModelAttribute("newUser") User newUser, BindingResult result) {
		return "loginRegister.jsp";
	}
	
	@PostMapping("/register")
	public String register(@Valid @ModelAttribute("newUser") User newUser, BindingResult result, Model model, HttpSession session) {
		if (result.hasErrors()) {
			model.addAttribute("newLogin", new LoginUser());
			return "loginRegister.jsp";
		}
		
		userService.register(newUser, result);
		
		session.setAttribute("userId", newUser.getId());
		
		return "redirect:/";
	}
	
	@GetMapping("/login")
	public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin, BindingResult result, Model model, HttpSession session) {
		User user = userService.login(newLogin, result);
		if(result.hasErrors()) {
			model.addAttribute("newUser", new User());
			return "loginOrReg.jsp";
		}
		session.setAttribute("userId", user.getId());
		
		
		
		return "redirect:/";
	}
	

}





