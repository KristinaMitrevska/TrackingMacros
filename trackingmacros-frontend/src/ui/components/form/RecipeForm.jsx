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
    const {loading, errorMessage, onSubmit} = useNutrition();

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
            alert("Please fill in all ingredient names and ensure quantity is greater than 0");
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

    const handleClear = () => {
        setFormData(initialFormData);
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} borderRadius={4}
             sx={{backgroundColor: '#fcffd6', width: '80%', boxShadow: 6, paddingY: '1.5em'}}>
            <Typography variant={'h5'} fontWeight={'bold'} color={'#b62af7'} marginBottom={'1em'}>Fill out the form with one or more ingredients</Typography>
            {formData.recipe.ingredients.map((ingredient, index) => (
                <Grid container width={'85%'} key={ingredient.id}>
                    <Grid item size={4} padding={'1em'}>
                        <TextField
                            fullWidth
                            variant={'outlined'}
                            label={'Name'}
                            value={ingredient.name}
                            onChange={(e) => handleChange(index, 'name', e.target.value)}
                        ></TextField>
                    </Grid>
                    <Grid item size={4} padding={'1em'}>
                        <TextField
                            fullWidth
                            variant={'outlined'}
                            label={'Quantity'}
                            type={'number'}
                            value={ingredient.quantity}
                            onChange={(e) => handleChange(index, 'quantity', parseFloat(e.target.value))}
                        ></TextField>
                    </Grid>
                    <Grid item size={4} padding={'1em'}>
                        <Select
                            fullWidth
                            variant={'outlined'}
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

            {loading &&
                <CircularProgress sx={{marginY: '1em', color: '#b62af7'}}></CircularProgress>
            }

            {errorMessage &&
                <Typography variant={'h5'} marginY={'1em'} color={'red'} fontWeight={'bold'}>
                    {errorMessage}
                </Typography>
            }

            <Box display={'flex'} justifyContent={'center'} marginTop={'1em'}>
                <Button variant="contained" sx={{ m: 1, backgroundColor: '#b62af7' }} onClick={handleNewIngredient}>
                    New Ingredient
                </Button>
                <Button variant="contained" sx={{ m: 1, backgroundColor: '#b62af7' }} onClick={handleSubmit}>
                    Submit
                </Button>
                <Button variant="contained" sx={{ m: 1, backgroundColor: '#b62af7' }} onClick={handleClear}>
                    Clear
                </Button>
            </Box>
        </Box>
    )
}

export default RecipeForm;