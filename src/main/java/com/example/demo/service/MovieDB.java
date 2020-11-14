package com.example.demo.service;

import com.example.demo.model.Movie;

import java.util.ArrayList;
import java.util.List;


public class MovieDB {
    List<Movie> list;

    public MovieDB() {
        list = new ArrayList<Movie>();
    }

    public void addMovie(Movie newMovie) {
        this.list.add(newMovie);
    }

    public void deleteMovie(int id) {
        if (id >= 0 && id < list.size())
            this.list.remove(id);
    }

    public Movie getMovie(int id) {
        return this.list.get(id);
    }

    public List<Movie> getAllMovies() {
        return this.list;
    }

}
