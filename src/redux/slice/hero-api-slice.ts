import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import 'dotenv/config';

export interface Hero {
  id: number;
  name: string;
  slug: string;
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
  appearance: {
    gender: string;
    race: string;
    height: string[];
    weight: string[];
    eyeColor: string;
    hairColor: string;
  };
  biography: {
    fullName: string;
    alterEgos: string;
    aliases: string[];
    placeOfBirth: string;
    firstAppearance: string;
    publisher: string;
    alignment: string;
  };
  work: {
    occupation: string;
    base: string;
  };
  connections: {
    groupAffiliation: string;
    relatives: string;
  };
  images: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
}

export const heroApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_KEY,
  }),
  endpoints: (builder) => ({
    getHeroById: builder.query<Hero, number>({
      query: (id: number) => `id/${id}.json`,
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetHeroByIdQuery } = heroApiSlice;
