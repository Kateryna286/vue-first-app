import axios from "../utils/axios";

export const getApartsmentsList = () => {
    return axios.get('/apartments');
}

export const getApartsmentById = (id) => {
    return axios.get(`/apartments/${id}`);
}