import RecipeForm from "../../components/form/RecipeForm.jsx";
import {Container, Typography} from "@mui/material";
import {useState} from "react";
import RecipeTable from "../../components/results/RecipeTable.jsx";

const HomePage = () => {
    const [recipe, setRecipe] = useState(null);

    const handleBack = () => {
        setRecipe(null);
    }

    return (
        <>
            <Typography variant={'h2'} textAlign={'center'}
                        fontFamily={'Bebas neue'}
                        height={'10%'}
                        marginY={'0.2em'}
                        sx={{color: 'white', textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}
            >TrackingMacros</Typography>
            <Container maxWidth={'lg'} sx={{minHeight: '90%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start'}}>
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