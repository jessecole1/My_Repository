package com.example.usersWithPictures.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.usersWithPictures.models.Comment;
import com.example.usersWithPictures.models.Photos;
import com.example.usersWithPictures.models.User;
import com.example.usersWithPictures.services.CommentService;
import com.example.usersWithPictures.services.PhotosService;
import com.example.usersWithPictures.services.UserService;

@Controller
public class CommentController {
	
	@Autowired
	private CommentService commentServ;
	
	@Autowired
	private UserService userServ;
	
	@Autowired
	private PhotosService photoServ;
	
	@PostMapping("/comment/add/{photoId}")
		public String addComment(@PathVariable("photoId") Photos photo, @Valid @ModelAttribute("newComment") Comment comment, BindingResult result, Model model, HttpSession session) {
			Long userId = (Long) session.getAttribute("userId");
			if (userId == null) {
				return "redirect:/";
			}
			
			if (result.hasErrors()) {
				return "redirect:/home";
			}
			
			System.out.println("comment: " + comment.getContent());
			
			User user = userServ.getById(userId);
			List<Comment> usersComments = user.getComments();
			usersComments.add(comment);
			user.setComments(usersComments);
			
			Photos thePhoto = photoServ.getById(photo.getId());
			List<Comment> photosComments = thePhoto.getComments();
			photosComments.add(comment);
			
			comment.setUser(user);
			comment.setPhoto(thePhoto);
			commentServ.save(comment);
			
			
		return "redirect:/home";
	}

}
