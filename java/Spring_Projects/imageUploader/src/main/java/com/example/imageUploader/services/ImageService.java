package com.example.imageUploader.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.imageUploader.repositories.ImageRepository;

@Service
public class ImageService {
	
	@Autowired
	private ImageRepository imageRepo;

}
