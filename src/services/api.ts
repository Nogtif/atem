import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    Accept: "application/json",
  },
});

export default api;
