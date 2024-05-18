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
import org.springframework.web.bind.annotation.PathVariable;
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
	private PhotosService photoServ;
	
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
	
	@PostMapping("/like/photo/{likePhotoId}")
	public String likePhoto(@PathVariable("likePhotoId") Long photoId, @Valid @ModelAttribute("likedPhoto") Photos photo, HttpSession session) {
		Long userId = (Long) session.getAttribute("userId");
		if (userId == null) {
			return "redirect:/";
		}
		User user = userServ.getById(userId);

		
		Photos likedPhoto = photoServ.getById(photoId);
		List<User> photoLikes = likedPhoto.getUsersWhoLiked();
		for (int i = 0; i < photoLikes.size(); i++) {
			if (photoLikes.get(i) == user) {
				photoLikes.remove(i);
				likedPhoto.setUsersWhoLiked(photoLikes);
				photoServ.save(likedPhoto);
				return "redirect:/home";
			}
		}
		photoLikes.add(user);
		likedPhoto.setUsersWhoLiked(photoLikes);
		photoServ.save(likedPhoto);
		
		return "redirect:/home";
	}
	
	@GetMapping("/caption/page")
	public String addCaptionPage(@Valid @ModelAttribute("pic") Photos aPhoto, BindingResult result, Model model, HttpSession session) {
		Long userId = (Long) session.getAttribute("userId");
		if (userId == null) {
			return "redirect:/";
		}
		User user = userServ.getById(userId);

		model.addAttribute("user", user);

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
		
		Long photoId = (Long) session.getAttribute("picId");
		Photos thePhoto = photoServ.getById(photoId);
		
		thePhoto.setCaption(onePhoto.getCaption());
		photoServ.save(thePhoto);
		
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
			usersPhotoListBeforeUpload.add(photo);
			photo.setUser(user);
			photo.setImageName(fileName);
			Date date = new Date();
			photo.setCreatedAt(date);
			photoServ.save(photo);
			session.setAttribute("picId", photo.getId());
			
			System.out.println("any user?: " + photo.getUser());
			
			
		} catch(IOException e) {
			e.printStackTrace();
		}
		return "redirect:/caption/page";
	}

}
