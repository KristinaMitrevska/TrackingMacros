import {useCallback, useState} from "react";
import nutritionRepository from "../repository/nutritionRepository.js";

const useNutrition = () => {
    const [loading, setLoading] = useState(false);

    const onSubmit = useCallback((data) => {
        setLoading(true);
        return nutritionRepository
            .fetchNutrition(data)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
                return null;
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return { loading, onSubmit };
}

export default useNutrition;