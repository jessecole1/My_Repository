package com.codingdojo.javaexamtwo.controllers;

import java.util.Date;

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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.codingdojo.javaexamtwo.models.House;
import com.codingdojo.javaexamtwo.models.Note;
import com.codingdojo.javaexamtwo.models.User;
import com.codingdojo.javaexamtwo.services.HouseService;
import com.codingdojo.javaexamtwo.services.NoteService;
import com.codingdojo.javaexamtwo.services.UserService;

@Controller
public class HouseController {

	@Autowired
	private HouseService houseServ;
	
	@Autowired
	private UserService userServ;
	
	@Autowired
	private NoteService noteServ;

	@GetMapping("/house/new")
	public String newHouse(@ModelAttribute("house") House newHouse,
			BindingResult result, Model model, HttpSession session) {
		Long userId = (Long) session.getAttribute("userId");
		if(userId==null) {
			return "redirect:/";
		}
		User user = userServ.findById(userId);
		model.addAttribute("user", user);
		return "newhouse.jsp";
	}
	
	@PostMapping("/house/new")
	public String addHouse(@Valid @ModelAttribute("house") House newHouse,
			BindingResult result, Model model, HttpSession session, RedirectAttributes redirectAttribute) {
		Long userId = (Long) session.getAttribute("userId");
		if(userId==null) {
			return "redirect:/";
		}
		
		if(result.hasErrors()) {
			return "newhouse.jsp";
		}
		User user = userServ.findById(userId);
		model.addAttribute("user", user);
		Date theDate = houseServ.getListingDate(newHouse);
		if(theDate.after(new Date())) {
			result.rejectValue("listingDate","Matches","Cant be in future");
			return "newhouse.jsp";
		}
		houseServ.save(newHouse, result);
		return "redirect:/dashboard";
	}
	
	@GetMapping("/listing/{houseId}")
	public String oneHouse(@PathVariable("houseId") Long houseId,
			@ModelAttribute("note") Note note, BindingResult result,
			Model model, HttpSession session) {
		Long userId = (Long) session.getAttribute("userId");
		if(userId==null) {
			return "redirect:/";
		}
		User user = userServ.findById(userId);
		model.addAttribute("user", user);
		House house = houseServ.getById(houseId);
		model.addAttribute("house", house);
		model.addAttribute("notes", noteServ.findAll());
		return "onehouse.jsp";
	}
	
	@GetMapping("/listing/{id}/edit")
	public String editHouse(@PathVariable("id") Long houseId,
			Model model, HttpSession session) {
		Long userId = (Long) session.getAttribute("userId");
		if(userId==null) {
			return "redirect:/";
		}
		User user = userServ.findById(userId);
		model.addAttribute("user", user);
		model.addAttribute("house", houseServ.getById(houseId));
		return "edithouse.jsp";
	}
	
	@PutMapping("/listing/{id}/edit")
	public String updateHouse(Model model, @Valid @ModelAttribute("house") House newHouse,
			BindingResult result,
			HttpSession session) {
		Long userId = (Long) session.getAttribute("userId");
		if(userId==null) {
			return "redirect:/";
		}
		if(result.hasErrors()) {
			return "edithouse.jsp";
		}
		Date theDate = houseServ.getListingDate(newHouse);
		if(theDate.after(new Date())) {
			result.rejectValue("listingDate","Matches","Cant be in future");
			return "newhouse.jsp";
		}
		User user = userServ.findById(userId);
		model.addAttribute("user", user);
		houseServ.update(newHouse);
		return "redirect:/dashboard";
	}
	
	@RequestMapping(value="/listing/{id}/destroy", method=RequestMethod.POST)
	public String destroyHouse(Model model, @PathVariable("id") Long id,
			HttpSession session) {
		Long userId = (Long) session.getAttribute("userId");
		if(userId==null) {
			return "redirect:/";
		}
		User user = userServ.findById(userId);
		model.addAttribute("user", user);
		houseServ.destroy(id);
		return "redirect:/dashboard";
		
	}
}
