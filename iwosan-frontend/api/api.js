import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5002/api/v1', // Replace with your Express API URL
});

export const getUsers = async (userId) => {
  try {
    const response = await api.get(`/users/`);
    return response.data;
  } catch (error) {
    console.error('Error retrieving user:', error);
    throw error;
  }
};

export const createUser = async (userData) => {
  try {
    const response = await api.post('/users/register', userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await api.post('/users/login', userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

// Add more API functions or classes as needed

export default api;