import axios from 'axios';
import Storage from '../storage/token';
export const prayerApi = axios.create({
  baseURL: 'https://prayer-internship.purrweb.site/',
  headers: {
    'Content-Type': 'application/json',
  },
});

prayerApi.interceptors.request.use(
  async config => {
    const token = await Storage.getItem('token');
    if (token) {
      config.headers.Authorization = `bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);
