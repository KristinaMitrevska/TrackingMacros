package com.trackingmacros.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RequestRecipe {
    List<RequestIngredient> ingredients;

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        ingredients.forEach(ing -> {
            sb.append(ing.toString()).append("\n");
        });
        return sb.toString();
    }
}
