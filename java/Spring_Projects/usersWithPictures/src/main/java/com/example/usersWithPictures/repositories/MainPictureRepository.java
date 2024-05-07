package com.example.usersWithPictures.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.example.usersWithPictures.models.MainPicture;

public interface MainPictureRepository extends CrudRepository<MainPicture, Long> {

	Optional<MainPicture> findById(Integer id);
	
}
