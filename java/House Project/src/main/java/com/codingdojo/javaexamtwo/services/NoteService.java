package com.codingdojo.javaexamtwo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.javaexamtwo.models.Note;
import com.codingdojo.javaexamtwo.repositories.NoteRepository;

@Service
public class NoteService {

	@Autowired
	private NoteRepository noteRepo;

	public List<Note> findAll() {
		return noteRepo.findAll();
	}
	
	public Note save(Note note) {
		return noteRepo.save(note);
	}

}
