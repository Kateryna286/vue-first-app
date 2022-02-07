import axios from "axios";

const axiosInstatnce = axios.create({
    baseURL: 'https://apt-booking-api.herokuapp.com/'
});

export default axiosInstatnce