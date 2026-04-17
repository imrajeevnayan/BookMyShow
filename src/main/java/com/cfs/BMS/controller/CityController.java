package com.cfs.BMS.controller;


import com.cfs.BMS.entity.City;
import com.cfs.BMS.service.CityService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/cities")
@RequiredArgsConstructor
@Tag(name = "City Management", description = "Endpoints for managing cities where theaters are located")
public class CityController {

    private final CityService cityService;


    @GetMapping
    @Operation(summary = "Get all cities", description = "Retrieves a list of all cities available in the system")
    public ResponseEntity<List<City>> getAllCities()
    {
        return ResponseEntity.ok(cityService.getAllCities());
    }

    @GetMapping("{id}")
    @Operation(summary = "Get city by ID", description = "Retrieves details of a specific city")
    public ResponseEntity<City> getCityById(@PathVariable Long id)
    {
        return ResponseEntity.ok(cityService.getCityById(id));
    }
}
