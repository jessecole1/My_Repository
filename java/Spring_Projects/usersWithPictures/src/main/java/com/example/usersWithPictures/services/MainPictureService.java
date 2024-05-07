package com.example.usersWithPictures.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.usersWithPictures.models.MainPicture;
import com.example.usersWithPictures.repositories.MainPictureRepository;

@Service
public class MainPictureService {
	
	@Autowired
	private MainPictureRepository mainPicRepo;
	
	public MainPicture getById(Long id) {
		Optional<MainPicture> image = mainPicRepo.findById(id);
		if(image.isPresent()) {
			return image.get();
		}
		return null;
	}
	
	public MainPicture save(MainPicture image) {
		return mainPicRepo.save(image);
	}

}
