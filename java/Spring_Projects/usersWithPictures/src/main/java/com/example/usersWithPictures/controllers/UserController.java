package com.example.usersWithPictures.controllers;

import java.io.File;
import java.util.ArrayList;
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

import com.example.usersWithPictures.models.Comment;
import com.example.usersWithPictures.models.LoginUser;
import com.example.usersWithPictures.models.MainPicture;
import com.example.usersWithPictures.models.Photos;
import com.example.usersWithPictures.models.User;
import com.example.usersWithPictures.services.MainPictureService;
import com.example.usersWithPictures.services.PhotosService;
import com.example.usersWithPictures.services.UserService;

@Controller
public class UserController {
	
	@Autowired 
	private UserService userServ;
	
	@Autowired
	private PhotosService photosServ;
	
	@Autowired
	private MainPictureService mainPicServ;
	
	@GetMapping("/")
	public String index(Model model) {
		model.addAttribute("newLogin", new LoginUser());
		model.addAttribute("newUser", new User());
		return "index.jsp";
	}
	
	@PostMapping("/follow/{user_id_follow}")
	public String follow(@PathVariable("user_id_follow") Long userFollowId, @Valid @ModelAttribute("userFollow") User userFollower, BindingResult result, Model model, HttpSession session) {
		Long userId = (Long) session.getAttribute("userId");
		if (userId == null) {
			return "redirect:/";
		}
		User user = userServ.getById(userId);
		User followedUser = userServ.getById(userFollowId);
		Long id = userFollowId;
		
		List<User> listOfFollowedUsersByUser = user.getFollowedUsers();
		for (int i = 0; i < listOfFollowedUsersByUser.size(); i++) {
			if (listOfFollowedUsersByUser.get(i) == followedUser) {
				listOfFollowedUsersByUser.remove(i);
				user.setFollowedUsers(listOfFollowedUsersByUser);
				userServ.update(user);
				return "redirect:/profile/" + userFollowId;
			}
		}
		listOfFollowedUsersByUser.add(followedUser);
		user.setFollowedUsers(listOfFollowedUsersByUser);
		userServ.update(user);
		
		return "redirect:/profile/" + userFollowId;
	}
	
	@GetMapping("/home")
	public String homePage(@Valid @ModelAttribute("newComment") Comment comment, BindingResult result, Model model, HttpSession session) {
		Long userId = (Long) session.getAttribute("userId");
		if(userId == null) {
			return "redirect:/";
		}
		User user = userServ.getById(userId);
		model.addAttribute("user", user);
		List<User> allUsers = userServ.findAllUsers();
		model.addAttribute("allUsers", allUsers);
		
		File postedPhotosByUsersPath = new File("/Users/jessecole/desktop/my_repository/java/spring_projects/userswithpictures/src/main/webapp/post-pictures");
		String postedPhotosByUsersArray[] = postedPhotosByUsersPath.list();

		// CREATE A NEW LIST WHERE THE PICTURES ARE SORTED BY CREATED-AT DATE
		List <Photos> sortedArrayList = new ArrayList<>();

		// SORT THROUGH THE ARRAY OF PICTURES RETURNED IN POSTEDPHOTOSBYUSERSARRAY 
		for (int i = 0; i < postedPhotosByUsersArray.length; i++) {

			// WE HAVE THE NAMES OF THE PICTURES
			// THESE PICTURES ARE STORED IN THE DATABASE WITH THESE NAMES
			// WE NEED TO GET THE OBJECTS OF THESE PICTURES THROUGH THE NAME 

			// CAPTURE CURRENT ITERATED PHOTO AND RETURN ITS OBJECT
			Photos iteratedPhoto = photosServ.findByName(postedPhotosByUsersArray[i].toString());
			sortedArrayList.add(iteratedPhoto);

		}	
			// THERE NEEDS TO BE MORE THAN ONE PHOTO IN POSTEDPHOTOSBYUSERSARRAY
			// CHECK TO SEE IF THERE IS AT LEAST 2 PHOTOS 
			for (int i = 0; i < sortedArrayList.size(); i++) {
				if (i <= sortedArrayList.size() - 1 && i > 0) {
					Photos currentPhoto = sortedArrayList.get(i);
					Photos previousPhotoToBeCompared = sortedArrayList.get(i-1);
					if (previousPhotoToBeCompared.getCreatedAt().compareTo(currentPhoto.getCreatedAt()) < 0) {
						Photos temp = currentPhoto;
						currentPhoto = previousPhotoToBeCompared;
						previousPhotoToBeCompared = temp;
						
						sortedArrayList.set(i, currentPhoto);
						sortedArrayList.set(i-1, previousPhotoToBeCompared);
						i = -1;
					}
				}
			}
			model.addAttribute("postedPics", sortedArrayList);			
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
		
		// CHECKING TO SEE IF USER HAS ADDED A PROFILE PICTURE
		// IF USER HASN'T UPLOADED A PICTURE, THEN DEFAULT PICTURE WILL DISPLAY
		if (profileUserPictureObject.getImageName().equals("profile-icon.jpg")) {
			File projectPicturesPath = new File("/Users/jessecole/desktop/my_repository/java/spring_projects/userswithpictures/src/main/webapp/project-pictures");
			String projectImageArray[] = projectPicturesPath.list();
			
			for (String projPic : projectImageArray) {
				if(projPic.equals("profile-icon.jpg")) {
					File profileIconImage = new File(projPic);
					String finalPath = "../project-pictures/" + profileIconImage;
					model.addAttribute("finalPath", finalPath);
				} 
			}
		// IF USER HAS UPLOADED A PROFILE PICTURE, THEN THEIR UPLOADED PICTURE WILL DISPLAY 
		} else {
			for (String image : directoryImage) {
				if(image.equals(profileUserPictureObject.getImageName())) {
					File onePictureFile = new File(image);
					String finalPath = "../profile-pictures/" + onePictureFile; 
					model.addAttribute("finalPath", finalPath);
				} 
			}
		}
		
		System.out.println("profileUser: " + profileUser.getMainPicture().getImageName());
		model.addAttribute("usersPhotos", photosServ.findAllUsersPhotos(profileUser));
		return "profile.jsp";
	}
	
	@GetMapping("/profile/edit/{pathId}")
	public String editProfile(@ModelAttribute("aUser") User theUser, @PathVariable("pathId") Long id, Model model, HttpSession session) {
		Long userId = (Long) session.getAttribute("userId");
		if (userId == null) {
			return "redirect:/";
		}
		System.out.println("ddd: " + theUser.getUsername());
		model.addAttribute("aUser", userServ.getById(id));
		System.out.println("followers: " + userServ.getById(userId).getFollowers() + " | followed users: " + userServ.getById(userId).getFollowedUsers());
		return "editProfile.jsp";
	}
	
	@PostMapping("/update/{pathId}")
	public String updateUser(@PathVariable("pathId") Long id, @Valid @ModelAttribute("aUser") User theUser, BindingResult result, Model model, HttpSession session) {
		Long userId = (Long) session.getAttribute("userId");
		if (userServ.getById(userId) == null) {
			return "redirect:/";
		}
		
		System.out.println("ID: " + theUser.getId());
		System.out.println("PW: " + theUser.getPassword());
		System.out.println("EMAIL: " + theUser.getEmail());
		System.out.println("USERNAME: " + theUser.getUsername());
		System.out.println("BIO: " + theUser.getBio());
		System.out.println("MainPicture: " + theUser.getMainPicture());
		
		
		System.out.println("POST followers: " + theUser.getFollowers() + " | POST followed users: " + theUser.getFollowedUsers());
		userServ.update(theUser);
		return "redirect:/profile/" + theUser.getId();		
	}
	
	@PostMapping("/register")
	public String register(@Valid @ModelAttribute("newUser") User newUser, BindingResult result, Model model, HttpSession session) {
		if(result.hasErrors()) {
			model.addAttribute("newLogin", new LoginUser());
			System.out.println("result rejected in controller..");
			return "index.jsp";
		}
		
		userServ.register(newUser, result);
		if (result.hasErrors()) {
			model.addAttribute("newLogin", new LoginUser());
			return "index.jsp";
		}
		Long userId = (Long) newUser.getId();
		User user = userServ.getById(userId);
		
		File projectPicturesPath = new File("/Users/jessecole/desktop/my_repository/java/spring_projects/userswithpictures/src/main/webapp/project-pictures");
		String projectImageArray[] = projectPicturesPath.list();
		
		for (String profileIconPic : projectImageArray) {
			if(profileIconPic.equals("profile-icon.jpg")) {
//				File profileIconImage = new File(profileIconPic);
				MainPicture mainPicture = new MainPicture();
				
				mainPicture.setImageName(profileIconPic);
				mainPicture.setUser(user);
				user.setProfilePicture(mainPicture);
				mainPicServ.save(mainPicture);
//				System.out.println("success?: " + user.getProfilePicture().getId());
			} 
		}
		
		session.setAttribute("userId", userId);
		model.addAttribute("user", user);
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
		return "redirect:/home";
	}
	
	@GetMapping("/logout")
	public String logout(HttpSession session) {
		session.setAttribute("userId", null);
		return "redirect:/";
	}
}