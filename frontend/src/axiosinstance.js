import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_BASE_API;

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor → attach token
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accesstoken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor → refresh token if expired
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem("refreshtoken");
      if (refreshToken) {
        try {
          const res = await axios.post(`${baseURL}/api/token/refresh/`, {
            refresh: refreshToken,
          });
          localStorage.setItem("accesstoken", res.data.access);
          originalRequest.headers[
            "Authorization"
          ] = `Bearer ${res.data.access}`;
          return axiosInstance(originalRequest);
        } catch (err) {
          localStorage.removeItem("accesstoken");
          localStorage.removeItem("refreshtoken");
          window.location.href = "/login"; // optional redirect
        }
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
