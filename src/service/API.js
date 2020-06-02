import axios from 'axios';

const config = {
    baseURL: process.env.BASE_URL + '/api',
    withCredentials: true,
    credentials: 'same-origin'
};

const API = axios.create(config);

export default API;
