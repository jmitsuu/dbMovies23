import axios from "axios";
const token = import.meta.env.VITE_API_TOKEN;

export const urlMovies = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    headers:{'Authorization' : `Bearer ${token}`}
})
urlMovies.interceptors.request.use((config)=>{
    config.params = config.params|| {};
    config.params['api_key'] =token
    return config
})