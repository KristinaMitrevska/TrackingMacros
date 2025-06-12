import {useState} from "react";
import useNutrition from "../../hooks/useNutrition.js";
import {Button, CircularProgress, Typography} from "@mui/material";


const exampleData = {
    "recipe": {
        "ingredients": [
            {
            "name": "pepperoni",
            "quantity": 200,
            "unit": "g"
        }
        ]
    }
}

const HomePage = () => {
    const [dataState, setDataState] = useState(exampleData);
    const {recipe, loading, onSubmit} = useNutrition();

    const handleSubmit = () => {
        onSubmit(dataState.recipe);
    }

    return (
        <>
            <Button onClick={handleSubmit} variant={'outlined'}>Analyze Recipe</Button>
            {loading &&
                <CircularProgress></CircularProgress>
            }
            {recipe &&
                <>
                    <Typography variant={'h6'}>
                        {recipe.foods[0].name}
                    </Typography>
                    <Typography variant={'h6'}>
                        {recipe.total_calories}
                    </Typography>
                </>
            }
        </>
    )
}

export default HomePage;