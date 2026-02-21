import { configureStore } from '@reduxjs/toolkit';
import generalReducer from '../features/filters/generalSlice';

export const store = configureStore({
  reducer: {
    generalReducer: generalReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
