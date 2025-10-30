import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5017', // backend
  withCredentials: true
});

export default api;
