package com.example.imageUploader.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.imageUploader.models.ImageUploader;
import com.example.imageUploader.repositories.ImageUploaderRepository;

@Service
public class ImageUploaderService {
	
	@Autowired
	private ImageUploaderRepository imageUploaderRepository;
	
	public ImageUploader getById(Long id) {
		Optional<ImageUploader> image = imageUploaderRepository.findById(id);
		if(image.isPresent()) {
			return image.get();
		}
		return null;
	}

}
