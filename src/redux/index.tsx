import { configureStore } from '@reduxjs/toolkit';
import heroReducer from './slice/hero-slice';

export const store = configureStore({
  reducer: {
    hero: heroReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
