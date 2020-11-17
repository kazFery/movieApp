package com.example.demo.model;

import org.springframework.data.annotation.Id;

public class Movie {
    @Id
    private int id;
    private String  title;


    public Movie(int id, String title){
        this.id = id;
        this.title = title;
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }
}
