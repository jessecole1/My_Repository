package com.example.imageUploader.controllers;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.example.imageUploader.models.Image;
import com.example.imageUploader.services.ImageUploaderService;

@Controller
public class ImageUploaderController {
	
	@Autowired
	private ImageUploaderService imageUploaderService;
	
	@GetMapping("/")
	public String index(Model model) {
		model.addAttribute("image", new Image());
		return "index.jsp";
	}
	
	@PostMapping("/upload")
	public String upload(@RequestParam("thisFile") MultipartFile file) {

		System.out.println(file);
		String fileName = file.getOriginalFilename();
		String uploadPath = "/Users/jessecole/desktop/appimages/" + fileName;
		try {
			FileOutputStream fos = new FileOutputStream(uploadPath);
			InputStream is = file.getInputStream();
			
			byte[] data = file.getBytes();		
			
			is.read(data);
			fos.write(data);
			fos.close();
			
		} catch(IOException e) {
			e.printStackTrace();
		}
		
		return "redirect:/";
	}

}
