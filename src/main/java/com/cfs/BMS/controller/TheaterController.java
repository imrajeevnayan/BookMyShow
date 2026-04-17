package com.cfs.BMS.controller;


import com.cfs.BMS.entity.Theater;
import com.cfs.BMS.service.TheaterService;
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
@RequestMapping("/api/theaters")
@RequiredArgsConstructor
@Tag(name = "Theater Management", description = "Endpoints for managing theaters and their locations")
public class TheaterController {

    private final TheaterService theaterService;

    @GetMapping
    @Operation(summary = "Get all theaters", description = "Retrieves a list of all theaters available in the system")
    public ResponseEntity<List<Theater>> getAllTheaters()
    {
        return ResponseEntity.ok(theaterService.getAllTheaters());
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get theater by ID", description = "Retrieves details of a specific theater")
    public ResponseEntity<Theater> getTheaterById(@PathVariable Long id)
    {
        return ResponseEntity.ok(theaterService.getTheaterById(id));
    }

    @GetMapping("/city/{cityId}")
    @Operation(summary = "Get theaters by City ID", description = "Retrieves a list of all theaters located in a specific city")
    public ResponseEntity<List<Theater>> getTheaterByCity(@PathVariable Long cityId)
    {
        return ResponseEntity.ok(theaterService.getTheaterByCity(cityId));
    }


}
