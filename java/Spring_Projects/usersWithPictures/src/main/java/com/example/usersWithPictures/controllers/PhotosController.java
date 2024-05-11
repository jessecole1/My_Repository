package com.example.usersWithPictures.controllers;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.example.usersWithPictures.models.Photos;
import com.example.usersWithPictures.models.User;
import com.example.usersWithPictures.services.PhotosService;
import com.example.usersWithPictures.services.UserService;

@Controller
public class PhotosController {
	
	@Autowired
	private PhotosService photoServ;
	
	@Autowired
	private UserService userServ;
	
	@PostMapping("/upload/photo")
	public String uploadPhoto(@RequestParam("thisFile") MultipartFile file, HttpSession session) {
		Long userId = (Long) session.getAttribute("userId");
		if(userId == null) {
			return "redirect:/";
		}
		User user = userServ.getById(userId);
		
		// GET FILE NAME
		String fileName = file.getOriginalFilename();
		// GET UPLOAD PATH
		String uploadPath = "/Users/jessecole/desktop/my_repository/java/spring_projects/userswithpictures/src/main/webapp/post-pictures/" + fileName;
		
		try {
		// SAVE UPLOADED PHOTO IN DIRECTORY
			FileOutputStream fos = new FileOutputStream(uploadPath);
			InputStream is = file.getInputStream();
			byte[] data = file.getBytes();
			
			is.read(data);
			fos.write(data);
			fos.close();
			
		// SAVE FILE NAME TO DATABASE 
			Photos photo = new Photos();
			List<Photos> usersPhotoListBeforeUpload = user.getPhotos();
			System.out.println("BEFORE: " + usersPhotoListBeforeUpload);
			usersPhotoListBeforeUpload.add(photo);
			System.out.println("AFTER: " + usersPhotoListBeforeUpload);
			photo.setUser(user);
			photo.setImageName(fileName);
			photoServ.save(photo);
			
		} catch(IOException e) {
			e.printStackTrace();
		}
		return "redirect:/home";
	}

}
