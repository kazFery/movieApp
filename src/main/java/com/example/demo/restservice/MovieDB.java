package com.example.demo.restservice;

import java.util.ArrayList;


public class MovieDB {
    ArrayList<Movie> list;

    public MovieDB(){
        list = new ArrayList<Movie>();
    }

    public void addMovie(Movie newMovie) {
        this.list.add(newMovie);
    }

    public void  deleteMovie(int id) throws ArrayIndexOutOfBoundsException {
        if (id < this.list.size())
            this.list.remove(id);
        else
            throw  new ArrayIndexOutOfBoundsException();
    }

    public Movie getMovie(int id){
        return this.list.get(id);
    }

    public ArrayList<Movie> getAllMovies(){
        return this.list;
    }



}
