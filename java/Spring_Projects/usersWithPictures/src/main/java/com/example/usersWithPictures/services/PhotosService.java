package com.example.usersWithPictures.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.usersWithPictures.models.Photos;
import com.example.usersWithPictures.models.User;
import com.example.usersWithPictures.repositories.PhotosRepository;

@Service
public class PhotosService {
	
	@Autowired
	private PhotosRepository photosRepo;
	
	public Photos getById(Long id) {
		Optional<Photos> image = photosRepo.findById(id);
		if(!image.isPresent()) {
			return null;
		}
		return image.get();
	}
	
	public List<Photos> findAllPhotos() {
		return null;
	}
	
	public List<Photos> findAllUsersPhotos(User user) {
		List<Photos> allPhotos = photosRepo.findAll();
		List<Photos> usersPhotos = new ArrayList<>();
		for (Photos photo : allPhotos) {
			if (photo.getUser() == user) {
				usersPhotos.add(photo);
			}
		}
		for (int i = 0; i < usersPhotos.size(); i++) {
			if (i <= usersPhotos.size() - 1 && i > 0) {
				Photos currentPhoto = usersPhotos.get(i);
				Photos previousPhotoToBeCompared = usersPhotos.get(i-1);
				if (previousPhotoToBeCompared.getCreatedAt().compareTo(currentPhoto.getCreatedAt()) < 0) {
					System.out.println("discepency");
					Photos temp = currentPhoto;
					currentPhoto = previousPhotoToBeCompared;
					previousPhotoToBeCompared = temp;
					
					usersPhotos.set(i, currentPhoto);
					usersPhotos.set(i-1, previousPhotoToBeCompared);
					i = -1;
				}
			}
		}
		return usersPhotos;
		
	}
	
	public Photos save(Photos photo) {
		return photosRepo.save(photo);
	}
	
	public Photos findByName(String name) {
		Optional<Photos> optionalPhoto = photosRepo.findByImageName(name);
		if (optionalPhoto.isPresent()) {
			return optionalPhoto.get();
		}
		return null;
	}
	
	public Photos update(Photos aPhoto) {
		return photosRepo.save(aPhoto);
	}
	

}
