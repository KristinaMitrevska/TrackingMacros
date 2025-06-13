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
        return ingredients.stream()
                .mapToDouble(ResponseFoodItem::getFat)
                .sum();
    }

    @JsonProperty("total_carbohydrates")
    public double getTotalCarbohydrates(){
        return ingredients.stream()
                .mapToDouble(ResponseFoodItem::getCarbohydrates)
                .sum();
    }

    @JsonProperty("total_protein")
    public double getTotalProtein(){
        return ingredients.stream()
                .mapToDouble(ResponseFoodItem::getProtein)
                .sum();
    }

    @JsonProperty("total_calories")
    public double getTotalCalories(){
        return ingredients.stream()
                .mapToDouble(ResponseFoodItem::getCalories)
                .sum();
    }
}
