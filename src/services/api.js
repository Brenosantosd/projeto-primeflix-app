import axios from "axios";

// base da URL: https://api.themoviedb.org/3/

// URL DA API: https://api.themoviedb.org/3/movie/now_playing

// API KEY: 03b445d87c9e90d98a4c23d528fde608

// Rota : movie/now_playing

// npm install axios 

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;