package com.example.experiment6.controller;

import org.springframework.web.bind.annotation.*;

@RestController
public class TestController {

    @GetMapping("/protected")
    public String test() {
        return "Protected API accessed!";
    }
}