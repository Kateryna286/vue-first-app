import axios from "axios";
import store from "../store/index";

const axiosInstatnce = axios.create({
  baseURL: "https://apt-booking-api.herokuapp.com/",
});

axiosInstatnce.interceptors.request.use(
  (config) => {
    const { token } = store.state.auth;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstatnce;
