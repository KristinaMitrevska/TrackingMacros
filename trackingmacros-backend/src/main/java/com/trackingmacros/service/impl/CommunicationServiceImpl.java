package com.trackingmacros.service.impl;

import com.trackingmacros.client.NutritionixAPIClient;
import com.trackingmacros.model.ResponseNutrition;
import com.trackingmacros.service.CommunicationService;
import org.springframework.stereotype.Service;

@Service
public class CommunicationServiceImpl implements CommunicationService {
    private final NutritionixAPIClient client;

    public CommunicationServiceImpl(NutritionixAPIClient client) {
        this.client = client;
    }

    @Override
    public ResponseNutrition getNutritionAnalysis(String query) {
        return client.getNutritionData(query);
    }
}
