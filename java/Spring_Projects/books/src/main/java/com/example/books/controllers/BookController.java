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

import com.example.books.models.Book;
import com.example.books.models.User;
import com.example.books.services.BookService;
import com.example.books.services.UserService;

@Controller
public class BookController {
	
	@Autowired
	private BookService bookServ;
	
	@Autowired
	private UserService userServ;
	
	@GetMapping("/book/new")
	public String addNewBook(@ModelAttribute("newBook") Book newBook, BindingResult result, Model model, HttpSession session) {
		Long userId = (Long) session.getAttribute("userId");
		System.out.println(userId);
		User theUser = userServ.getById(userId);
		System.out.println(theUser);
		if(theUser == null) {
			return "redirect:/";
		}
		model.addAttribute("user", theUser);
		model.addAttribute("newBook", newBook);
		return "newBookForm.jsp";
	}
	
	@PostMapping("/book/add")
	public String inputNewBook(Model model, @Valid @ModelAttribute("newBook") Book newBook, BindingResult result, HttpSession session) {
		Long userId = (Long) session.getAttribute("userId");
		User theUser = userServ.getById(userId);
		if(theUser == null) {
			return "redirect:/";
		}
		if(result.hasErrors()) {
			System.out.println("result had errors in book controller..");
			return "newBookForm.jsp";
		}
		bookServ.addBook(newBook);
		return "redirect:/";
	}

}
