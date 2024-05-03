package com.example.imageUploader.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.example.imageUploader.models.Image;

public interface ImageRepository extends CrudRepository<Image, Long>{
	
	Optional<Image> findById(Integer id);

}
