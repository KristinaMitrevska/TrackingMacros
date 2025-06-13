import RecipeForm from "../components/RecipeForm.jsx";
import {Container, Typography} from "@mui/material";
import {useState} from "react";

const HomePage = () => {
    const [recipe, setRecipe] = useState(null);
    return (
        <>
            <Container maxWidth={'lg'} sx={{display: 'flex', justifyContent: 'center'}}>
                <RecipeForm setRecipe={setRecipe}></RecipeForm>
                {recipe &&
                    <Typography variant={'h5'}>{recipe.total_calories}</Typography>
                }
            </Container>
        </>
    )
}

export default HomePage;