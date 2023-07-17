package com.example.jokes.api;

import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.URI;
import java.net.http.HttpClient;
import java.io.IOException;

public class Call {
	public static void main(String[] args) {
		
		HttpRequest request = HttpRequest.newBuilder()
				.uri(URI.create("https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes"))
				.header("X-RapidAPI-Host", "jokes-by-api-ninjas.p.rapidapi.com")
				.header("X-RapidAPI-Key", "62c00a3ac3msh0a8c635760d0bbap16d7e4jsnb44850274d12")
				.method("GET", HttpRequest.BodyPublishers.noBody())
				.build();
		
		HttpResponse<String> response = null;
		
		try {
			response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
		}
		catch (IOException e) {
			e.printStackTrace();
		}
		catch (InterruptedException e) {
			e.printStackTrace();
		}
		
		System.out.println(response.body());
	}
}
