package com.example.books.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
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
	
	@GetMapping("/book/{bookIdVariable}")
	public String oneBook(@PathVariable("bookIdVariable") Long bookId, Model model, HttpSession session) {
		Long userId = (Long) session.getAttribute("userId");
		User user = userServ.getById(userId);
		Book book = bookServ.getById(bookId);
		model.addAttribute("book", book);
		boolean addedOrNot = false;
		List<Book> usersWantToReadBooks = user.getWantToReadBooks();
		if(usersWantToReadBooks.contains(book)) {
			addedOrNot = true;
		}
		model.addAttribute("addedOrNot", addedOrNot);
		return "oneBook.jsp";
	}
	
	@GetMapping("/book/add/want/{bookIdVariable}")
	public String addToWantToRead(@PathVariable("bookIdVariable") Long bookId, HttpSession session) {
		Long userId = (Long) session.getAttribute("userId");
		User user = userServ.getById(userId);
		Book book = bookServ.getById(bookId);
		List<Book> usersWantToReadBooks = user.getWantToReadBooks();
		for (int i = 0; i < usersWantToReadBooks.size(); i++) {
			if (usersWantToReadBooks.get(i).getId() == bookId) {
				return "redirect:/";
			}
		};
		
		usersWantToReadBooks.add(book);
		userServ.updateUser(user);
		System.out.println("list: " + usersWantToReadBooks);
		for (int i = 0; i < usersWantToReadBooks.size(); i++) {
//			System.out.println("ID: " + usersWantToReadBooks.get(i).getId());
//			System.out.println("TITLE: " + usersWantToReadBooks.get(i).getTitle());
		}
		return "redirect:/";
	}
	
	@GetMapping("/book/remove/want/{bookIdVariable}")
	public String removeWantToRead(@PathVariable("bookIdVariable") Long bookId, HttpSession session) {
		Long userId = (Long) session.getAttribute("userId");
		User user = userServ.getById(userId);
		Book book = bookServ.getById(userId);
		List<Book> newWantToReadList = new ArrayList<Book>();
		
		
		for (int i = 0; i < user.getWantToReadBooks().size(); i++) {			
			if (book.getId() == user.getWantToReadBooks().get(i).getId()) {
				continue;
			} else if (book.getId() != user.getWantToReadBooks().get(i).getId()) {
				newWantToReadList.add(bookServ.getById(userId));
			}
		}
		
		System.out.println("newWantToReadList: " + newWantToReadList);

		List<User> listOfUsersWhoWantToReadBook = book.getUsersWhoWantToRead();
		List<User> newListOfUsersWhoWantToReadBook = new ArrayList<>();
		
		for (int i = 0; i < listOfUsersWhoWantToReadBook.size(); i++) {
			if (listOfUsersWhoWantToReadBook.get(i).getId() == userId) {
				continue;
			} else {
				newListOfUsersWhoWantToReadBook.add(listOfUsersWhoWantToReadBook.get(i));
			}
		}
		book.setUsersWhoWantToRead(newListOfUsersWhoWantToReadBook);
		userServ.updateUser(user);

		return "redirect:/";
		
	}

}
