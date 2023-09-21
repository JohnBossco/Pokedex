import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: "pokemonName",
  initialState: "bulbasaur",
  reducers: {
    setName: (state, action) => action.payload
  }


})