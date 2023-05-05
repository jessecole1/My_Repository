package com.example.exercise.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.exercise.models.Admin;
import com.example.exercise.models.LoginUser;
import com.example.exercise.models.User;
import com.example.exercise.services.AdminService;
import com.example.exercise.services.CategoryService;
import com.example.exercise.services.UserService;

@Controller
public class MainController {
	
	@Autowired
	private UserService userServ;
	
	@Autowired
	private AdminService adminServ;
	
	@Autowired
	private CategoryService catServ;
	
	@GetMapping("/")
	public String index(Model model, HttpSession session) {
//		
//		model.addAttribute("newUser", new User());
//		model.addAttribute("newLoginUser", new LoginUser());
//			System.out.println("testing 1");
			
			Long userId = (Long) session.getAttribute("userId");
//			System.out.println("testing 2");
			
			if (session.getAttribute("userId") != null) {
//				System.out.println("testing 3");
				
				User theUser = userServ.getById(userId);
//				System.out.println("testing 4");
				if (theUser == null) {
					Admin theAdmin = adminServ.getById(userId);
					model.addAttribute("adId", theAdmin.getAdminId());
					model.addAttribute("logUser", theAdmin);
					model.addAttribute("categories", catServ.findAll());
					System.out.println(catServ.findAll());
					return "index.jsp";
				}
				
				model.addAttribute("userId", theUser.getId());
				model.addAttribute("logUser", theUser);
				model.addAttribute("categories", catServ.findAll());
				System.out.println(catServ.findAll());
//				System.out.println("testing 5");

//				System.out.println("testing 6");
	
				return "index.jsp";

			}
		model.addAttribute("categories", catServ.findAll());
		System.out.println(catServ.findAll());
		return "index.jsp";
	}
	
	@GetMapping("/account")
	public String account(Model model) {
		
		model.addAttribute("newUser", new User());
		model.addAttribute("newLogin", new LoginUser());
		
	
	return "loginOrReg.jsp";
	}
	
	@PostMapping("/register")
	public String register(@Valid @ModelAttribute("newUser") User newUser, BindingResult result, Model model, HttpSession session) {
		if(result.hasErrors()) {
			model.addAttribute("newLogin", new LoginUser());
			return "loginOrReg.jsp";
		}
		userServ.register(newUser, result);
		
		System.out.println(newUser);
		session.setAttribute("userId", newUser.getId());
		return "redirect:/";
	}
	
	@PostMapping("/login")
	public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin, BindingResult result, Model model, HttpSession session) {
		User user = userServ.login(newLogin, result);
		if(result.hasErrors()) {
			model.addAttribute("newUser", new User());
			return "loginOrReg.jsp";
		}
		session.setAttribute("userId", user.getId());

		return "redirect:/";
	}
	
	@GetMapping("/logout")
	public String logout(HttpSession session) {
		session.setAttribute("userId", null);
		return "redirect:/";
	}

}
