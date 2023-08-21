package com.codingdojo.javaexamtwo.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.codingdojo.javaexamtwo.models.Note;
import com.codingdojo.javaexamtwo.models.User;
import com.codingdojo.javaexamtwo.services.HouseService;
import com.codingdojo.javaexamtwo.services.NoteService;
import com.codingdojo.javaexamtwo.services.UserService;

@Controller
public class NoteController {

	@Autowired
	private HouseService houseServ;
	
	@Autowired
	private UserService userServ;
	
	@Autowired
	private NoteService noteServ;
	
	@PostMapping("/note/add")
	public String addNote(Model model, @Valid @ModelAttribute("note") Note note, BindingResult result,
			HttpSession session) {
		Long userId = (Long) session.getAttribute("userId");
		if(userId==null) {
			return "redirect:/";
		}
		
		if(result.hasErrors()) {
			return "newhouse.jsp";
		}
		User user = userServ.findById(userId);
		model.addAttribute("user", user);
		noteServ.save(note);
		return "redirect:/dashboard";
	}
}
