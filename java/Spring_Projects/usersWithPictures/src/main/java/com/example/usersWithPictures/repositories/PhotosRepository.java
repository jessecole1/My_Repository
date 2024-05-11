package com.example.usersWithPictures.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.usersWithPictures.models.Photos;

@Repository
public interface PhotosRepository extends CrudRepository<Photos, Long>{
	
	Optional<Photos> findById(Integer id);
	
	Optional<Photos> findByImageName(String imageName);

}
