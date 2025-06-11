package com.trackingmacros.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResponseNutrition {
    private List<ResponseFoodItem> foods;

    @JsonProperty("total_fat")
    public double getTotalFat(){
        return foods.stream()
                .mapToDouble(ResponseFoodItem::getFat)
                .sum();
    }

    @JsonProperty("total_carbohydrates")
    public double getTotalCarbohydrates(){
        return foods.stream()
                .mapToDouble(ResponseFoodItem::getCarbohydrates)
                .sum();
    }

    @JsonProperty("total_protein")
    public double getTotalProtein(){
        return foods.stream()
                .mapToDouble(ResponseFoodItem::getProtein)
                .sum();
    }

    @JsonProperty("total_calories")
    public double getTotalCalories(){
        return foods.stream()
                .mapToDouble(ResponseFoodItem::getCalories)
                .sum();
    }
}
