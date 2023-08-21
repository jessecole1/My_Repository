package com.codingdojo.javaexamtwo.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.codingdojo.javaexamtwo.models.Note;

public interface NoteRepository extends CrudRepository<Note, Long> {

	List<Note> findAll();
}
