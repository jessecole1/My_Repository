package com.example.books.controllers;

import java.io.IOException;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.example.books.models.LoginUser;
import com.example.books.models.User;
import com.example.books.services.BookService;
import com.example.books.services.StorageService;
import com.example.books.services.UserService;

@Controller
public class MainController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private BookService bookService;
	
	@Autowired
	private StorageService storageService;
	
	@GetMapping("/")
	public String index(Model model, HttpSession session) {
		Long userId = (Long) session.getAttribute("userId");
		User theUser = userService.getById(userId);
		if(theUser != null) {	
			System.out.println("Users email: " + theUser.getEmail());
		}
		model.addAttribute("books", bookService.findAllBooks());
		return "index.jsp";
	}
	
	@GetMapping("/page/register")
	public String goToRegisterPage(@Valid @ModelAttribute("newUser") User newUser, BindingResult result, @Valid @ModelAttribute("newLogin") LoginUser newLogin, BindingResult res) {
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
	
	@PostMapping("/login")
	public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin, BindingResult result, Model model, HttpSession session) {
		if(result.hasErrors()) {
			model.addAttribute("newLogin", new LoginUser());
			return "loginRegister.jsp";
		}
		User user = userService.login(newLogin, result);
		System.out.println(user.getEmail());
		session.setAttribute("userId", user.getId());
		return "redirect:/";
	}
	
	
	@PostMapping("/fileSystem")
	public ResponseEntity<?> uploadImageToFIleSystem(@RequestParam("image")MultipartFile file) throws IOException {
		String uploadImage = storageService.uploadImageToFileSystem(file);
		return ResponseEntity.status(HttpStatus.OK)
				.body(uploadImage);
	}
	

}





