package com.example.demo.controller;

import com.example.demo.model.Movie;
import com.example.demo.service.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.NoSuchElementException;

@RestController
public class MovieController {

    @Autowired
    MovieRepository myDB;

    @GetMapping("/movies/{id}")
    public Movie getMovie(@PathVariable int id) throws NoSuchElementException {
        return myDB.findById(id).orElseThrow();
    }

    @GetMapping("/movies")
    public Iterable<Movie> allMovies() {
        return myDB.findAll();
    }

    @PostMapping("/movies")
    public void addMovie(@RequestBody Movie newMovie) {
        myDB.save(newMovie);
    }

    @DeleteMapping("/movies/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public void deleteMovie(@PathVariable int id) {
        myDB.deleteById(id);
    }

}
