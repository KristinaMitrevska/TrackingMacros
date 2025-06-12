package com.trackingmacros.web.controller;

import com.trackingmacros.model.RequestRecipe;
import com.trackingmacros.model.ResponseNutrition;
import com.trackingmacros.service.CommunicationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController("/api")
public class CommunicationController {
    private final CommunicationService communicationService;

    public CommunicationController(CommunicationService communicationService) {
        this.communicationService = communicationService;
    }

    @PostMapping("/get-nutrition")
    public ResponseEntity<ResponseNutrition> getNutrition(@RequestBody RequestRecipe recipe) {
        return ResponseEntity.ok(communicationService.getNutritionAnalysis(recipe.toString()));
    }
}
