package com.example.books.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.books.models.Book;
import com.example.books.repositories.BookRepository;

@Service
public class BookService {
	
	@Autowired
	private BookRepository bookRepo;
	
	public List<Book> findAllBooks() {
		return bookRepo.findAll();
	}
	
	public Book addBook(Book book) {
		System.out.println("book service working..");
		return bookRepo.save(book);
	}

}
