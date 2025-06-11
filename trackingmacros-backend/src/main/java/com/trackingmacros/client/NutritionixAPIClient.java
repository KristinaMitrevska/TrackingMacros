package com.trackingmacros.client;

import com.trackingmacros.model.ResponseNutrition;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.Map;

@Component
public class NutritionixAPIClient {

    @Value("${nutritionix.api.url}")
    private String url;

    @Value("${nutritionix.api.id}")
    private String appId;

    @Value("${nutritionix.api.key}")
    private String appKey;

    public ResponseNutrition getNutritionData(String query) {
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("x-app-id", appId);
        headers.set("x-app-key", appKey);

        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("query", query);
        requestBody.put("timezone", "US/Eastern");

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(requestBody, headers);

        try {
            ResponseEntity<ResponseNutrition> response = restTemplate.exchange(
                    url,
                    HttpMethod.POST,
                    entity,
                    ResponseNutrition.class);

            if (response.getStatusCode().is2xxSuccessful()) {
                return response.getBody();
            } else {
                throw new ResponseStatusException(response.getStatusCode(), "Nutritionix API error");
            }
        } catch (Exception ex) {
            throw new ResponseStatusException(HttpStatus.BAD_GATEWAY, "Error calling Nutritionix API", ex);
        }
    }
}