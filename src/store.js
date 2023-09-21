import { configureStore } from '@reduxjs/toolkit'
import { pokemonApi } from './js/pokemon'
import { searchSlice } from './js/searchSlice'


export const store = configureStore({
  reducer: {
   
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    pokemonName: searchSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
})

