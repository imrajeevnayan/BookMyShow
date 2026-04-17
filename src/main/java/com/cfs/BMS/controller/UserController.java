package com.cfs.BMS.controller;


import com.cfs.BMS.dto.LoginRequest;
import com.cfs.BMS.dto.UserRequest;
import com.cfs.BMS.entity.User;
import com.cfs.BMS.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@Tag(name = "User Management", description = "Endpoints for user registration, authentication, and profiles")
public class UserController {

    private final UserService userService;


    @PostMapping("/register")
    @Operation(summary = "Register a new user", description = "Creates a new user account with the provided details")
    public ResponseEntity<User> register(@RequestBody UserRequest request)
    {
        return  ResponseEntity.ok(userService.register(request));
    }

    @PostMapping("/login")
    @Operation(summary = "User login", description = "Authenticates a user and returns their profile information")
    public ResponseEntity<User> login(@RequestBody LoginRequest request)
    {
        return  ResponseEntity.ok(userService.login(request));
    }

    @GetMapping
    @Operation(summary = "Get all users", description = "Retrieves a list of all registered users (Admin only recommended)")
    public ResponseEntity<List<User>> getAllUsers()
    {
        return  ResponseEntity.ok(userService.getAllUser());
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get user by ID", description = "Retrieves detailed information about a specific user")
    public ResponseEntity<User> getUserById(@PathVariable Long id)
    {
        return  ResponseEntity.ok(userService.getUserById(id));
    }
}
