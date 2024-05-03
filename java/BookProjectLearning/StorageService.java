// package com.javatechie.service;

import com.javatechie.entity.FileData;
import com.javatechie.entity.ImageData;
import com.javatechie.respository.FileDataRepository;
import com.javatechie.respository.StorageRepository;
import com.javatechie.util.ImageUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

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
        // getOriginalFilename() => Return the original filename in the client's filesystem.
        // MultiPartFile documentation => https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/multipart/MultipartFile.html

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
