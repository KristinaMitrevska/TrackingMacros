import axiosInstance from "../axios/axios.js";

const nutritionRepository = {
    fetchNutrition: async(data) => {
        return await axiosInstance.post(`/get-nutrition`, data)
    }
}

export default nutritionRepository;