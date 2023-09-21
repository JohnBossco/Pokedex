import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/'}),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  getPokemonBySpecies: builder.query({
    query: (name) => `pokemon-species/${name}`,
  }),
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApiMiddleware),
})
})





export const { useGetPokemonBySpeciesQuery } = pokemonApi 
export const { useGetPokemonByNameQuery } = pokemonApi

