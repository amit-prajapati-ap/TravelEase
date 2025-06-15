import { configureStore } from '@reduxjs/toolkit';
import destinationsReducer from './slices/destinationsSlice';
import packagesReducer from './slices/packagesSlice';

export const store = configureStore({
  reducer: {
    destinations: destinationsReducer,
    packages: packagesReducer,
  },
});