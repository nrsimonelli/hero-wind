import { createSlice } from '@reduxjs/toolkit';

interface HeroState {
  hero: string[];
}

const initialState: HeroState = {
  hero: [],
};

const heroSlice = createSlice({
  name: 'hero',
  initialState,
  reducers: {
    getHero(state) {
      console.log(state.hero);
    },
  },
});

export const { getHero } = heroSlice.actions;

export default heroSlice.reducer;
