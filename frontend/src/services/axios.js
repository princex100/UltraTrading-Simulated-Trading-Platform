import axios from 'axios';

// TODO: Define base URL
const BASE_URL = 'http://localhost:5000/api';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // TODO: Add credentials config if needed
});

// TODO: Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify config before request is sent (e.g., attach tokens)
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// TODO: Response Interceptor & Refresh Token Logic
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle global errors, token refresh, etc.
    return Promise.reject(error);
  }
);

export default axiosInstance;
