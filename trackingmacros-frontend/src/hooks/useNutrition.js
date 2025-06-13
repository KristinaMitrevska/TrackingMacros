import {useCallback, useState} from "react";
import nutritionRepository from "../repository/nutritionRepository.js";

const useNutrition = () => {
    const [loading, setLoading] = useState(false);

    const onSubmit = useCallback(async (data) => {
        setLoading(true);
        return await nutritionRepository
            .fetchNutrition(data)
            .then((response) => {
                setLoading(false);
                return response.data;
            })
            .catch((error) => console.log(error));
    }, []);

    return { loading, onSubmit };
}

export default useNutrition;