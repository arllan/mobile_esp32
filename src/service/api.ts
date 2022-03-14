import axios from 'axios';

export const API_URL = 'http://meuIpLocal';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});
