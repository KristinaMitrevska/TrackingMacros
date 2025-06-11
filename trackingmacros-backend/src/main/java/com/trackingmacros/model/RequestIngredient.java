package com.trackingmacros.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RequestIngredient {
    private String name;
    private double quantity;
    private String unit;

    @Override
    public String toString() {
        return String.format("%s - %.2f%s", this.name, this.quantity, this.unit);
    }
}
