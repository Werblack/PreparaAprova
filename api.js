// services/api.js

import axios from 'axios';

// Define a URL da API com base no ambiente
const apiUrl = process.env.NODE_ENV === 'development' 
    ? 'https://localhost:7119/api' 
    : 'https://apisunsale.azurewebsites.net/api';
const api = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;