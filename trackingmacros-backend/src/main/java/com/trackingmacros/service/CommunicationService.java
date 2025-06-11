package com.trackingmacros.service;

import com.trackingmacros.model.ResponseNutrition;

public interface CommunicationService {
    ResponseNutrition getNutritionAnalysis(String query);
}
