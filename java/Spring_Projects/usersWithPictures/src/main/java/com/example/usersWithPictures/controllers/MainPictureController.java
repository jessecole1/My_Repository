package com.example.usersWithPictures.controllers;

import java.awt.Image;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.example.usersWithPictures.models.MainPicture;
import com.example.usersWithPictures.models.User;
import com.example.usersWithPictures.services.MainPictureService;
import com.example.usersWithPictures.services.UserService;

@Controller
public class MainPictureController {
	
	@Autowired
	private MainPictureService mainPicServ;
	
	@Autowired
	private UserService userServ;
	
	@PostMapping("/upload")
	public String upload(@RequestParam("thisFile") MultipartFile file, HttpSession session) {
		
		Long userId = (Long)session.getAttribute("userId");
		User user = userServ.getById(userId);
		
		String fileName = file.getOriginalFilename();
		String uploadPath = "/Users/jessecole/desktop/my_repository/java/spring_projects/userswithpictures/src/main/webapp/profile-pictures/" + fileName;
		try {
			FileOutputStream fos = new FileOutputStream(uploadPath);
			InputStream is = file.getInputStream();
			byte[] data = file.getBytes();
			
			is.read(data);
			fos.write(data);
			fos.close();
			
			MainPicture mainPicture = new MainPicture();
			mainPicture.setImageName(file.getOriginalFilename());
			mainPicture.setUser(user);
			user.setProfilePicture(mainPicture);
			mainPicServ.save(mainPicture);
			
		} catch(IOException e) {
			e.printStackTrace();
		}
		return "redirect:/";
	}

}
