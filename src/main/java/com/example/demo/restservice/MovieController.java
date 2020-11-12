package com.example.demo.restservice;

import org.springframework.web.bind.annotation.*;

@RestController
public class MovieController {

    @GetMapping("/movies/{id}")
    public Movie getMovie(@PathVariable Long id) {
        return new Movie(1, "NoMovie");
    }

    @GetMapping("/movies")
    public String allMovies() {
        return "All";
    }

    @PostMapping("/movies")
    public String addMovie(@RequestBody Movie newMovie) {
        return newMovie.getTitle();
    }

    @DeleteMapping("/movies/{id}")
    public String deleteMovie(@PathVariable Long id) {
        return "Delete  " + id;
    }

}
