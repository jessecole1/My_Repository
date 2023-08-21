package com.codingdojo.javaexamtwo.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.codingdojo.javaexamtwo.models.House;

public interface HouseRepository extends CrudRepository<House, Long> {

	List<House> findAll();
	
}
