import axios from 'axios';

const api = axios.create({baseURL: 'https://lgmf-ecommerce-backend.herokuapp.com'})

export default api;