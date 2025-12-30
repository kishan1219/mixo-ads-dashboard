import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://mixo-fe-backend-task.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
});
