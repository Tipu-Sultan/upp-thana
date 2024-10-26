import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import crimeReducer from '../features/crimeSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    crime: crimeReducer,
  },
});

export default store;
