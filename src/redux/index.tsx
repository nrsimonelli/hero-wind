import { configureStore } from '@reduxjs/toolkit';
import { heroApiSlice } from './slice/hero-api-slice';
import heroDisplaySlice from './slice/hero-display-slice';

export const store = configureStore({
  reducer: {
    heroDisplay: heroDisplaySlice,
    [heroApiSlice.reducerPath]: heroApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(heroApiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
