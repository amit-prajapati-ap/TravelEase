import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const backendUrl = import.meta.env.VITE_BACKEND_URL

// Async thunk for fetching packages
export const fetchPackages = createAsyncThunk(
  'packages/fetchPackages',
  async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/pack/get-all-pack')

      if (data.success) {
        console.log(data.message)
        return data.data.packs
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

const packagesSlice = createSlice({
  name: 'packages',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPackages.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPackages.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchPackages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default packagesSlice.reducer;