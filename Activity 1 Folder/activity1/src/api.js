import axios from "axios";

// Configure axios instance for your backend
const api = axios.create({
  baseURL: "http://localhost:3000", // NestJS backend
});

export default api;
