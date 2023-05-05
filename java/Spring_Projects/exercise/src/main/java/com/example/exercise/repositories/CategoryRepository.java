package com.example.exercise.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.exercise.models.Category;

@Repository
public interface CategoryRepository extends CrudRepository<Category, Long> {

	List<Category> findAll();
}
