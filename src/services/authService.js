import api from './api';

const register = async (userData) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};

const login = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  localStorage.setItem('token', response.data.token);
  return response.data;
};

const verifyEmail = async (token, { rejectWithValue }) => {
    try {
      const response = await api.get(`/auth/verify/${token}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
const authService = { register, login,verifyEmail };
export default authService;
