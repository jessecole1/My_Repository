package com.example.books.services;

import java.io.File;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.books.models.FileData;
import com.example.books.repositories.FileDataRepository;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Optional;

@Service
public class StorageService {

	 @Autowired
	    private FileDataRepository fileDataRepository;

	    // PATH ON THE COMPUTER WHERE THE IMAGES FOR APPS WILL BE STORED
	    private final String FOLDER_PATH = "/Users/jessecole/desktop/computer/app_images/";

	    public String uploadImageToFileSystem(MultipartFile file) throws IOException {
	        String filePath=FOLDER_PATH+file.getOriginalFilename();

	        FileData fileData=fileDataRepository.save(FileData.builder()
	                .name(file.getOriginalFilename())
	                .type(file.getContentType())
	                .filePath(filePath).build());

	        file.transferTo(new File(filePath));

	        if (fileData != null) {
	            return "file uploaded successfully : " + filePath;
	        }
	        return null;
	    }
	
}
