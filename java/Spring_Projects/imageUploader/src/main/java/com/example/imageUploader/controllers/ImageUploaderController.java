package com.example.imageUploader.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.imageUploader.services.ImageUploaderService;

@Controller
public class ImageUploaderController {
	
	@Autowired
	private ImageUploaderService imageUploaderService;
	
	@GetMapping("/")
	public String index() {
		return "index.jsp";
	}

}
