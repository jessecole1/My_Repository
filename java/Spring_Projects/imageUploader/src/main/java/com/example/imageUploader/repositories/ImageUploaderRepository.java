package com.example.imageUploader.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.imageUploader.models.ImageUploader;

@Repository
public interface ImageUploaderRepository extends CrudRepository<ImageUploader, Long> {

	Optional<ImageUploader> findById(Integer id);
	
}
