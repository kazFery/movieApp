package com.example.demo.controller;

import com.example.demo.model.Movie;
import com.example.demo.service.MovieDB;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MovieController {
    MovieDB myDB = new MovieDB();

    @GetMapping("/movies/{id}")
    public Movie getMovie(@PathVariable int id) {
        return myDB.getMovie(id);
    }

    @GetMapping("/movies")
    public List<Movie> allMovies() {
        return myDB.getAllMovies();
    }

    @PostMapping("/movies")
    public void addMovie(@RequestBody Movie newMovie) {
         myDB.addMovie(newMovie);
    }

    @DeleteMapping("/movies/{id}")
    public void deleteMovie(@PathVariable int id) {
         myDB.deleteMovie(id);
    }

}
