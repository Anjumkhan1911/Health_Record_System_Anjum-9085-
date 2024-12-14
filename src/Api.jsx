import axios from "axios";

const API_BASE_URL = "http://localhost:9085/api"; 
export const setAuthHeader = (username, password) => {
  axios.defaults.headers.common["Authorization"] = `Basic ${btoa(`${username}:${password}`)}`;
};

export const registerUser = async (userData) => {
  return axios.post(`${API_BASE_URL}/register`, userData);
};

export const loginUser = async (loginData) => {
  return axios.post(`${API_BASE_URL}/login`, loginData);
};

export const fetchDoctors = async () => {
  return axios.get(`${API_BASE_URL}/doctors`);
};