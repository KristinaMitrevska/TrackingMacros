import RecipeForm from "../../components/form/RecipeForm.jsx";
import {Container} from "@mui/material";
import {useState} from "react";
import RecipeTable from "../../components/results/RecipeTable.jsx";

const HomePage = () => {
    const [recipe, setRecipe] = useState(null);

    const handleBack = () => {
        setRecipe(null);
    }

    return (
        <>
            <Container maxWidth={'lg'} sx={{display: 'flex', justifyContent: 'center'}}>
                {!recipe &&
                    <RecipeForm setRecipe={setRecipe}></RecipeForm>
                }
                {recipe &&
                    <RecipeTable recipe={recipe} handleBack={handleBack}></RecipeTable>
                }
            </Container>
        </>
    )
}

export default HomePage;