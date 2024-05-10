package com.example.usersWithPictures.controllers;

import java.io.File;
import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.usersWithPictures.models.LoginUser;
import com.example.usersWithPictures.models.MainPicture;
import com.example.usersWithPictures.models.User;
import com.example.usersWithPictures.services.UserService;

@Controller
public class UserController {
	
	@Autowired 
	private UserService userServ;
	
	@GetMapping("/")
	public String index(Model model) {
		model.addAttribute("newLogin", new LoginUser());
		model.addAttribute("newUser", new User());
		return "index.jsp";
	}
	
	@GetMapping("/home")
	public String homePage(Model model, HttpSession session) {
		Long userId = (Long) session.getAttribute("userId");
		if(userId == null) {
			return "redirect:/";
		}
		User user = userServ.getById(userId);
		model.addAttribute("user", user);
		List<User> allUsers = userServ.findAllUsers();
		model.addAttribute("allUsers", allUsers);
		for (User u : allUsers) {
			System.out.println(u.getUsername());
		}
		return "home.jsp";
	}
	
	@GetMapping("/profile/{userId}")
	public String profilePage(@PathVariable("userId") Long userId, @ModelAttribute("aUser") User aUser, Model model, HttpSession session) {
		Long loggedInUserId = (Long) session.getAttribute("userId");
		if (loggedInUserId == null) {
			return "redirect:/";
		}
		User loggedInUser = userServ.getById(loggedInUserId);
		User profileUser = userServ.getById(userId);
		
		model.addAttribute("profileUser", profileUser);
		model.addAttribute("user", loggedInUser);
		
		File directoryPath = new File("/Users/jessecole/desktop/my_repository/java/spring_projects/userswithpictures/src/main/webapp/profile-pictures/");
		String directoryImage[] = directoryPath.list();
		
		MainPicture profileUserPictureObject = profileUser.getProfilePicture();
		if (profileUserPictureObject == null) {
			File projectPicturesPath = new File("/Users/jessecole/desktop/my_repository/java/spring_projects/userswithpictures/src/main/webapp/project-pictures");
			String projectImageArray[] = projectPicturesPath.list();
			
			for (String projPic : projectImageArray) {
				if(projPic.equals("profile-icon.jpg")) {
					File profileIconImage = new File(projPic);
					String finalPath = "../project-pictures/" + profileIconImage;
					model.addAttribute("finalPath", finalPath);
					return "profile.jsp";
				}
			}
		} else {
			for (String image : directoryImage) {
//				System.out.println(image + " : " + profileUser.getProfilePicture().getImageName());
				if(image.equals(profileUserPictureObject.getImageName())) {
					File onePictureFile = new File(image);
					String finalPath = "../profile-pictures/" + onePictureFile; 
					model.addAttribute("finalPath", finalPath);
					return "profile.jsp";
				} 
			}
		}	
		return "profile.jsp";
	}
	
	@GetMapping("/profile/edit")
	public String editProfile(Model model, HttpSession session) {
		Long userId = (Long) session.getAttribute("userId");
//		System.out.println(user.getUsername());
		model.addAttribute("user", userServ.getById(userId));
		return "editProfile.jsp";
	}
	
	@Validated
	@PostMapping("/update")
	public String updateUser(@Validated @ModelAttribute("user") User user, BindingResult result, Model model, HttpSession session) {
		Long userId = (Long) session.getAttribute("userId");
		if (userServ.getById(userId) == null) {
			return "redirect:/";
		}
		
		User aUser = userServ.getById(user.getId());
		aUser.setBio(user.getBio());
		userServ.update(user);
		
		return "redirect:/profile";
	}
	
	@PostMapping("/register")
	public String register(@Valid @ModelAttribute("newUser") User newUser, BindingResult result, Model model, HttpSession session) {
		if(result.hasErrors()) {
			model.addAttribute("newLogin", new LoginUser());
			return "index.jsp";
		}
		
		userServ.register(newUser, result);
		Long userId = (Long) newUser.getId();
		User user = userServ.getById(userId);
		session.setAttribute("userId", userId);
		model.addAttribute("user", user);
		System.out.println("USER: " + user.getUsername());
		
		return "redirect:/home";
	}
	
	@PostMapping("/login")
	public String login(@Valid @ModelAttribute("newLogin") LoginUser loginUser, BindingResult result, Model model, HttpSession session) {
		User user = userServ.login(loginUser, result);
		
		if(result.hasErrors()) {
			
			model.addAttribute("newUser", new User());
			return "index.jsp";
		}
		
		session.setAttribute("userId", user.getId());
		System.out.println("USER: " + user.getUsername());
		
		return "redirect:/home";
	}
	
	@GetMapping("/logout")
	public String logout(HttpSession session) {
		session.setAttribute("userId", null);

		return "redirect:/";
	}
}