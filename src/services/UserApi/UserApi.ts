import axios from "axios";

export const userApi = axios.create({
  baseURL:"http://192.168.10.181:3000",
  headers: {
    'Content-Type': 'application/json'
  }
});