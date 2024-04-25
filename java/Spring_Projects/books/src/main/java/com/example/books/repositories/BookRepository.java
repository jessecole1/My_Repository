package com.example.books.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.books.models.Book;

@Repository
public interface BookRepository extends CrudRepository<Book, Long> {

	Optional<Book> findByTitle(String book);
	
	List<Book> findAll();
	
}
