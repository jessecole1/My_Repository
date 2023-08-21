package com.codingdojo.javaexamtwo.controllers;

import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.codingdojo.javaexamtwo.models.House;
import com.codingdojo.javaexamtwo.models.LoginUser;
import com.codingdojo.javaexamtwo.models.User;
import com.codingdojo.javaexamtwo.services.HouseService;
import com.codingdojo.javaexamtwo.services.UserService;

@Controller
public class UserController {

	@Autowired
	private UserService userServ;
	
	@Autowired
	private HouseService houseServ;
	
	@GetMapping("/")
	public String index(Model model) {
		model.addAttribute("newUser", new User());
		model.addAttribute("newLogin", new LoginUser());
		return "index.jsp";
	}
	
	@PostMapping("/register")
	public String register(@Valid @ModelAttribute("newUser") User newUser,
			BindingResult result, Model model, HttpSession session) {
		if(result.hasErrors()) {
			model.addAttribute("newLogin", new LoginUser());
			return "index.jsp";
		}
		userServ.register(newUser, result);
		session.setAttribute("userId", newUser.getId());
		return "redirect:/dashboard";
	}
	
	@PostMapping("/login")
	public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin,
			BindingResult result, Model model, HttpSession session) {
		User user = userServ.login(newLogin, result);
		if(result.hasErrors()) {
			model.addAttribute("newUser", new User());
			return "index.jsp";
		}
		session.setAttribute("userId", user.getId());
		return "redirect:/dashboard";
	}
	
	@GetMapping("/dashboard") 
	public String dashboard(Model model, HttpSession session) {
		Long userId = (Long) session.getAttribute("userId");
		if(userId==null) {
			return "redirect:/";
		}
		User user = userServ.findById(userId);
		model.addAttribute("user", user);
		model.addAttribute("houses", houseServ.findAll());
//		List<House> houses = houseServ.findAll();
//		for (int i=0; i<houses.size(); i++) {
//			House h = houses.get(i);
//			if(h.getUpdatedAt()==null) {
//				Date t = h.getCreatedAt();
//				System.out.println(h.getAddress());
//				System.out.println(t);
//			}
//		}
		return "dashboard.jsp";
	}
	
	
	@GetMapping("/logout")
	public String logout(HttpSession session) {
		session.setAttribute("userId", null);
		return "redirect:/";
	}

}
