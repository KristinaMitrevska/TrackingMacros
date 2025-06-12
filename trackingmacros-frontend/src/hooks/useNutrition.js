import {useCallback, useState} from "react";
import nutritionRepository from "../repository/nutritionRepository.js";


const initialState = {
    "recipe": null,
    "loading": false
};


const useNutrition = () => {
    const [state, setState] = useState(initialState);

    const onSubmit = useCallback((data) => {
        setState(prevState => ({
            ...prevState,
            "loading": true
        }));
        nutritionRepository
            .fetchNutrition(data)
            .then((response) => {
                setState({
                    "recipe": response.data,
                    "loading": false
                })
            })
            .catch((error) => console.log(error));
    }, []);

    return { ...state, onSubmit };
}

export default useNutrition;