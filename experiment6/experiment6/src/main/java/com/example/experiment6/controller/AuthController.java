package com.example.experiment6.controller;

import com.example.experiment6.model.User;
import com.example.experiment6.security.JwtUtil;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final JwtUtil jwtUtil;

    public AuthController(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody User user) {

        if ("user123".equals(user.getUsername()) &&
                "password123".equals(user.getPassword())) {

            String token = jwtUtil.generateToken(user.getUsername());

            Map<String, String> res = new HashMap<>();
            res.put("token", token);
            return res;
        }

        throw new RuntimeException("Invalid credentials");
    }
}