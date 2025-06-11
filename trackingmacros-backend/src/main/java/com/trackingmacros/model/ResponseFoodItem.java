package com.trackingmacros.model;

import com.fasterxml.jackson.annotation.JsonAlias;
import lombok.Data;

@Data
public class ResponseFoodItem {
    @JsonAlias("food_name")
    private String name;
    @JsonAlias("serving_qty")
    private double quantity;
    @JsonAlias("serving_unit")
    private String unit;
    @JsonAlias("nf_calories")
    private double calories;
    @JsonAlias("nf_total_fat")
    private double fat;
    @JsonAlias("nf_protein")
    private double protein;
    @JsonAlias("nf_total_carbohydrate")
    private double carbohydrates;
}
