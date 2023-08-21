package com.codingdojo.javaexamtwo.services;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.codingdojo.javaexamtwo.models.House;
import com.codingdojo.javaexamtwo.models.User;
import com.codingdojo.javaexamtwo.repositories.HouseRepository;

@Service
public class HouseService {
	
	@Autowired
	private HouseRepository houseRepo;
	
	public List<House> findAll() {
		return houseRepo.findAll();
	}

	public House save(House house, BindingResult result) {
		Date theDate = house.getListingDate();
		User user = house.getUser();
		Date userDate = user.getCreatedAt();
		if(theDate.after(new Date())) {
			System.out.println("STOP");
			System.out.println(new Date());
			result.rejectValue("listingDate","Matches","Cannot be in future");
		}
		if(result.hasErrors()) {
			return null;
		}
		return houseRepo.save(house);
	}
	
	public House getById(Long id) {
		Optional<House> potentialHouse = houseRepo.findById(id);
		if(potentialHouse.isPresent()) {
			return potentialHouse.get();
		}
		return null;
	}
	
	public House update(House house) {
		return houseRepo.save(house);
	}
	
	public void destroy(Long id) {
		houseRepo.deleteById(id);
	}
	
	public Date getListingDate(House house) {
		return house.getListingDate();
	}
}
