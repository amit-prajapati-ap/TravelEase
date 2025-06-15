import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const backendUrl = import.meta.env.VITE_BACKEND_URL

// Async thunk for fetching destinations
export const fetchDestinations = createAsyncThunk(
  'destinations/fetchDestinations',
  async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/dest/get-all-dest')

      if (data.success) {
        console.log(data.message)
        return data.data.dests
      } else {
        console.log(data.message)
        return []
      }
    } catch (error) {
      console.log(error.response.data.message)
      return []
    }
  }
);

const destinationsSlice = createSlice({
  name: 'destinations',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDestinations.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDestinations.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchDestinations.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default destinationsSlice.reducer;