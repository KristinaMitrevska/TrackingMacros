import {Box, Button, CircularProgress, Grid, MenuItem, Select, TextField, Typography} from "@mui/material";
import {useState} from "react";
import useNutrition from "../../../hooks/useNutrition.js";

const initialFormData = {
    "recipe": {
        "ingredients": [
            {
                "id": Date.now() + Math.random(),
                "name": '',
                "quantity": 0,
                "unit": 'g'
            },
        ]
    }
}

const RecipeForm = ({ setRecipe }) => {
    const [formData, setFormData] = useState(initialFormData);
    const {loading, onSubmit} = useNutrition();

    const handleChange = (index, field, value) => {
        setFormData((prev) => {
            const ingredients = [...prev.recipe.ingredients];
            ingredients[index] = { ...ingredients[index], [field]: value };
            return {
                recipe: { ingredients }
            };
        });
    };

    const handleSubmit = async () => {
        const hasInvalidIngredient = formData.recipe.ingredients.some(
            (ingredient) => !ingredient.name.trim() || ingredient.quantity <= 0 || !ingredient.quantity
        );

        if (hasInvalidIngredient) {
            alert("Please fill in all ingredient names and ensure quantity is greater than 0.");
            return;
        }

        const result = await onSubmit(formData.recipe);
        if (result) {
            setRecipe(result);
        }
    }

    const handleNewIngredient = () => {
        setFormData(prevState => ({
            recipe: {
                ingredients: [
                    ...prevState.recipe.ingredients,
                    {
                        id: Date.now() + Math.random(),
                        name: '',
                        quantity: 0,
                        unit: 'g'
                    }
                ]
            }
        }));
    };

    return (
        <>
            <Box width={'70%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                {formData.recipe.ingredients.map((ingredient, index) => (
                    <Grid container width={'100%'} margin={'1em'} key={ingredient.id}>
                        <Grid item size={4}>
                            <TextField
                                fullWidth
                                label={'Name'}
                                value={ingredient.name}
                                onChange={(e) => handleChange(index, 'name', e.target.value)}
                            ></TextField>
                        </Grid>
                        <Grid item size={4}>
                            <TextField
                                fullWidth
                                label={'Quantity'}
                                type={'number'}
                                value={ingredient.quantity}
                                onChange={(e) => handleChange(index, 'quantity', parseFloat(e.target.value))}
                            ></TextField>
                        </Grid>
                        <Grid item size={4}>
                            <Select
                                variant={'filled'}
                                fullWidth
                                label={'Unit'}
                                value={ingredient.unit}
                                onChange={(e) => handleChange(index, 'unit', e.target.value)}
                            >
                                <MenuItem value={'g'}>g</MenuItem>
                                <MenuItem value={'kg'}>kg</MenuItem>
                            </Select>
                        </Grid>
                    </Grid>
                ))}

                <Button variant="contained" sx={{ mt: 2 }} onClick={handleNewIngredient}>
                    New Ingredient
                </Button>
                <Button variant="contained" sx={{ mt: 2 }} onClick={handleSubmit}>
                    Submit
                </Button>

                {loading &&
                    <CircularProgress></CircularProgress>
                }
            </Box>
        </>
    )
}

export default RecipeForm;