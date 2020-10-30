import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3490',
});

export default api;
