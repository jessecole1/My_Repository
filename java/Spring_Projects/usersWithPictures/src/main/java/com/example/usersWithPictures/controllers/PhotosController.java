package com.example.usersWithPictures.controllers;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.example.usersWithPictures.models.Photos;
import com.example.usersWithPictures.models.User;
import com.example.usersWithPictures.services.PhotosService;
import com.example.usersWithPictures.services.UserService;

@Controller
public class PhotosController {
	
	@Autowired
	private PhotosService photosServ;
	
	@Autowired
	private UserService userServ;
	
	@GetMapping("/upload/photo/one")
	public String uploadPage(Model model, HttpSession session) {
		Long userId = (Long) session.getAttribute("userId");
		if (userId == null) {
			return "redirect:/";
		}
		User user = userServ.getById(userId);
		model.addAttribute("user", user);
		
		return "uploadPicture.jsp";
	}
	
	@GetMapping("/caption/page")
	public String addCaptionPage(@Valid @ModelAttribute("pic") Photos aPhoto, BindingResult result, Model model, HttpSession session) {
		Long userId = (Long) session.getAttribute("userId");
		if (userId == null) {
			return "redirect:/";
		}
		User user = userServ.getById(userId);
		Long photoId = (Long) session.getAttribute("picId");
		Photos thePhoto = photosServ.getById(photoId);
//		System.out.println(thePhoto.toString());
//		System.out.println("photo name: " + thePhoto.getImageName());
		model.addAttribute("user", user);
		System.out.println("photo user???: " + thePhoto.getUser());
//		Photos photo = photosServ.getById(pictureId);
//		model.addAttribute("photo", photo);

		return "addCaption.jsp";
	}
	
	@PutMapping("/caption")
	public String addCaption(@Valid @ModelAttribute("pic") Photos onePhoto, BindingResult result, HttpSession session) {
		System.out.println("hello???");
		Long userId = (Long) session.getAttribute("userId");
		if (userId == null) {
			return "redirect:/";
		}
		User user = userServ.getById(userId);
		System.out.println("onePhoto: " + onePhoto);
		System.out.println(onePhoto.getCaption());
		System.out.println("photo user: " + onePhoto.getUser());
		
		return "redirect:/home";
	}
	
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
		
		Photos photo = new Photos();
		try {
		// SAVE UPLOADED PHOTO IN DIRECTORY
			FileOutputStream fos = new FileOutputStream(uploadPath);
			InputStream is = file.getInputStream();
			byte[] data = file.getBytes();
			
			is.read(data);
			fos.write(data);
			fos.close();
			
		// SAVE FILE NAME TO DATABASE 
			List<Photos> usersPhotoListBeforeUpload = user.getPhotos();
			System.out.println("BEFORE: " + usersPhotoListBeforeUpload);
			usersPhotoListBeforeUpload.add(photo);
			System.out.println("AFTER: " + usersPhotoListBeforeUpload);
			photo.setUser(user);
			photo.setImageName(fileName);
			Date date = new Date();
			photo.setCreatedAt(date);
			photosServ.save(photo);
			session.setAttribute("picId", photo.getId());
			
			System.out.println("any user?: " + photo.getUser());
			
			
		} catch(IOException e) {
			e.printStackTrace();
		}
		System.out.println("getting to the last..");
		System.out.println("ID?: " + session.getAttribute("picId"));
		return "redirect:/caption/page";
	}

}
