package com.example.imageUploader.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.imageUploader.models.Image;

@Repository
public interface ImageUploaderRepository extends CrudRepository<Image, Long> {

	Optional<Image> findById(Integer id);
	
}
