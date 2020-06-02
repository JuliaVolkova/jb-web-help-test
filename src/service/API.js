import axios from 'axios';

const config = {
    baseURL: process.env.BASE_URL + '/api/'
};

const API = axios.create(config);

export default API;
