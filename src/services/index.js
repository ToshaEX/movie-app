import axios from 'axios';

export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  },
});
