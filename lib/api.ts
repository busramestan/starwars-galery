import axios from "axios";

const BASE_URL = 'https://swapi.info/api';

export const getFilms = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/films`);
        return response.data;
    }catch (e) {
        console.error("Error fetching films:", e)
        throw e;
    }
}