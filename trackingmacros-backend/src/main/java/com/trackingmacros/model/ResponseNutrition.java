package com.trackingmacros.model;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResponseNutrition {
    @JsonAlias("foods")
    private List<ResponseFoodItem> ingredients;

    @JsonProperty("total_fat")
    public double getTotalFat(){
        double sum =  ingredients.stream()
                .mapToDouble(ResponseFoodItem::getFat)
                .sum();
        return Math.round(sum * 100.0) / 100.0;
    }

    @JsonProperty("total_carbohydrates")
    public double getTotalCarbohydrates(){
        double sum =  ingredients.stream()
                .mapToDouble(ResponseFoodItem::getCarbohydrates)
                .sum();
        return Math.round(sum * 100.0) / 100.0;
    }

    @JsonProperty("total_protein")
    public double getTotalProtein(){
        double sum = ingredients.stream()
                .mapToDouble(ResponseFoodItem::getProtein)
                .sum();
        return Math.round(sum * 100.0) / 100.0;
    }

    @JsonProperty("total_calories")
    public double getTotalCalories(){
        double sum = ingredients.stream()
                .mapToDouble(ResponseFoodItem::getCalories)
                .sum();
        return Math.round(sum * 100.0) / 100.0;
    }
}
