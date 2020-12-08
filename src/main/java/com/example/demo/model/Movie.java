package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.util.Date;

@Table("movies")
public class Movie {
    @Id
    private int id;
    private String title;
    private Date releaseDate;
    private String summary;

    public Movie(int id, String title) {
        this.id = id;
        this.title = title;
    }

    public Date getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(Date releaseDate) {
        this.releaseDate = releaseDate;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }
    
    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }
}
