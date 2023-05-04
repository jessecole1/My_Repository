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
import com.example.exercise.models.AdminLogin;
import com.example.exercise.services.AdminService;

@Controller
public class AdminController {

	@Autowired
	private AdminService adminServ;
	
	@GetMapping("/admin/login")
	public String adminLogin(Model model) {
		model.addAttribute("newAdminLogin", new AdminLogin());
		
	return "adminReg.jsp";
	}
	
	@PostMapping("/admin/login")
	public String login(@Valid @ModelAttribute("newAdmin") AdminLogin newLoginAdmin, BindingResult result, Model model, HttpSession session) {
		Admin admin = adminServ.adminLogin(newLoginAdmin, result);
		if (result.hasErrors()) {
			model.addAttribute("newAdminLogin", new AdminLogin());
			return "adminReg.jsp";
		}
		session.setAttribute("userId", admin.getId());
		return "redirect:/";
	}
	
}
