package com.example.demo.restservice;

import org.springframework.web.bind.annotation.*;

@RestController
public class MovieController {
    private static final String template = "Hello, %s!";

    @GetMapping("/movies/{id}")
    public Movie getMovie (@RequestParam(value = "name", defaultValue = "World") String name){
        return new Movie(1, String.format(template, name));
    }

    @PostMapping("/post")
    public String post(@RequestBody(required = false) String str) {
        return "BODY: " + str;
    }

}
