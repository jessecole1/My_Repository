package com.example.imageUploader.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.imageUploader.services.ImageService;

@Controller
public class MainController {
	
	@Autowired
	private ImageService imageService;
	
	@GetMapping("/")
	public String index() {
		return "index.jsp";
	}

}
