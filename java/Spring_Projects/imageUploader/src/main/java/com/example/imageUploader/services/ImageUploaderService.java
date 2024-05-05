package com.example.imageUploader.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.imageUploader.models.Image;
import com.example.imageUploader.repositories.ImageUploaderRepository;

@Service
public class ImageUploaderService {
	
	@Autowired
	private ImageUploaderRepository imageUploaderRepository;
	
	public Image getById(Long id) {
		Optional<Image> image = imageUploaderRepository.findById(id);
		if(image.isPresent()) {
			return image.get();
		}
		return null;
	}

}
