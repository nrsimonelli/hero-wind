import { createSlice } from '@reduxjs/toolkit';
import { Hero } from './hero-api-slice';

const getInitialRed = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedRed = window.localStorage.getItem('stored-red');
    if (typeof storedRed === 'string') {
      return JSON.parse(storedRed);
    }
  }
  return { id: 423, name: 'Magneto' };
};

const getInitialBlue = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedBlue = window.localStorage.getItem('stored-blue');
    if (typeof storedBlue === 'string') {
      return JSON.parse(storedBlue);
    }
  }
  return { id: 523, name: 'Polaris' };
};

type HeroT = Hero[];

const nullValues = {
  id: null,
  name: null,
  slug: null,
  powerstats: {
    intelligence: null,
    strength: null,
    speed: null,
    durability: null,
    power: null,
    combat: null,
  },
  appearance: {
    gender: null,
    race: null,
    height: null,
    weight: null,
    eyeColor: null,
    hairColor: null,
  },
  biography: {
    fullName: null,
    alterEgos: null,
    aliases: null,
    placeOfBirth: null,
    firstAppearance: null,
    publisher: null,
    alignment: null,
  },
  work: {
    occupation: null,
    base: null,
  },
  connections: {
    groupAffiliation: null,
    relatives: null,
  },
  images: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
  },
};

const initialState = {
  redHero: getInitialRed(),
  blueHero: getInitialBlue(),
  heroData: <HeroT | any>[nullValues, nullValues],
};

const heroDisplaySlice = createSlice({
  name: 'heroDisplay',
  initialState,
  reducers: {
    getHeroData(state, action) {
      const { tag, newHero } = action.payload;
      if (tag === 'Red') {
        state.redHero = newHero;
        localStorage.setItem(
          'stored-red',
          JSON.stringify({ id: newHero.id, name: newHero.name })
        );
      }
      if (tag === 'Blue') {
        state.blueHero = newHero;
        localStorage.setItem(
          'stored-blue',
          JSON.stringify({ id: newHero.id, name: newHero.name })
        );
      }
    },
    setHeroData(state, action) {
      const { tag, data } = action.payload;
      if (tag === 'Red') {
        state.heroData[0] = data;
      }
      if (tag === 'Blue') {
        state.heroData[1] = data;
      }
    },
  },
});

export const { getHeroData, setHeroData } = heroDisplaySlice.actions;
export default heroDisplaySlice.reducer;
