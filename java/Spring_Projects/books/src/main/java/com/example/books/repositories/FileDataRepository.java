package com.example.books.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.books.models.FileData;

public interface FileDataRepository extends JpaRepository<FileData, Integer>{

	Optional<FileData> findByName(String fileName);
	
}
