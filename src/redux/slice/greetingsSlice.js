import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getGreetings = createAsyncThunk('greetings/getGreetings', async () => {
  try {
    const response = await axios.get('http://127.0.0.1:3000/api/v1/greetings');
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

const initialState = {
  greetings: [],
  loading: false,
  hasErrors: false,
};

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getGreetings.pending, (state) => {
        state.loading = true;
      })
      .addCase(getGreetings.fulfilled, (state, { payload }) => {
        state.greetings = payload;
        state.loading = false;
        state.hasErrors = false;
      })
      .addCase(getGreetings.rejected, (state) => {
        state.loading = false;
        state.hasErrors = true;
      });
  },
});

export default greetingsSlice.reducer;
