package com.example.jokes.api;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Controller
public class Call {
	
		
		@GetMapping("/")
		public String index(Model model) {
			
		
			HttpRequest request = HttpRequest.newBuilder()
					.uri(URI.create("https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes"))
					.header("X-RapidAPI-Host", "jokes-by-api-ninjas.p.rapidapi.com")
					.header("X-RapidAPI-Key", "62c00a3ac3msh0a8c635760d0bbap16d7e4jsnb44850274d12")
					.method("GET", HttpRequest.BodyPublishers.noBody())
					.build();
			
			HttpResponse<String> response = null; 
			
			try {
				response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
//				ObjectMapper objectMapper = new ObjectMapper();
//				objectMapper.readTree(response.body());
//				
//				JsonNode jsonResponse = null;
//				String joke = jsonResponse.get(0).get("joke").asText();
//				
//				model.addAttribute("joke", joke);
				
			}
			catch (IOException e1) {
				e1.printStackTrace();
			}
			catch (InterruptedException e) {
				e.printStackTrace();
			}
			
		model.addAttribute("joke", response.body());
		
		
		System.out.println(response.body());
		
		return "index.jsp";
		
		}
//		System.out.println(response.body());
		
	
}
