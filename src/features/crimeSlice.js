import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../services/api';

export const registerCrime = createAsyncThunk('crime/register', async (crimeData, { rejectWithValue }) => {
  try {
    const response = await api.post('/crime/register', crimeData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const crimeSlice = createSlice({
  name: 'crime',
  initialState: { crimeNumber: null, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerCrime.fulfilled, (state, action) => {
        state.crimeNumber = action.payload.crimeNumber;
        state.status = 'fulfilled';
      })
      .addCase(registerCrime.rejected, (state, action) => {
        state.error = action.payload;
        state.status = 'rejected';
      });
  },
});

export default crimeSlice.reducer;
