import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const MovieAPI = {
  getAll: async () => {
    const response = await api.get('/movies');
    return response.data;
  },
  getById: async (id: number) => {
    const response = await api.get(`/movies/${id}`);
    return response.data;
  },
  search: async (query: string) => {
    const response = await api.get(`/movies/search?title=${query}`);
    return response.data;
  }
};

export const CityAPI = {
  getAll: async () => {
    const response = await api.get('/cities');
    return response.data;
  }
};

export default api;
