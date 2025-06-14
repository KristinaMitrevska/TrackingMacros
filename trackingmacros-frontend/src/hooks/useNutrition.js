import {useCallback, useState} from "react";
import nutritionRepository from "../repository/nutritionRepository.js";

const initialHelperData = {
    "loading": false,
    "errorMessage": '',
}

const useNutrition = () => {
    const [helperData, setHelperData] = useState(initialHelperData);

    const onSubmit = useCallback((data) => {
        setHelperData(prevState => ({
            "loading": true,
            "errorMessage": '',
        }));
        return nutritionRepository
            .fetchNutrition(data)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
                let message = 'An error occurred';
                if (error.response && error.response.data && error.response.data.detail) {
                    message = error.response.data.detail;
                } else if (error.message) {
                    message = error.message;
                }
                setHelperData(prevState => ({
                    ...prevState,
                    errorMessage: message,
                }));
                return null;
            })
            .finally(() => {
                setHelperData(prevState => ({
                    ...prevState,
                    "loading": false,
                }));
            });
    }, []);

    return { ...helperData, onSubmit };
}

export default useNutrition;