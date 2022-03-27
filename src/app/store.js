import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../feaures/car/carSlice'

export const store = configureStore({
  reducer: {
    car: carReducer
  },
});
