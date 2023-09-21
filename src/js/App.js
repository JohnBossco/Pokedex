import * as React from 'react'
import Pokedexheader from './pokeDexHeader'
import Nav from './nav'
import PokemonDisplay from './pokemonDisplay'

export default function App() {


  return (
    <div className="App">
      <Pokedexheader/>
      <Nav/>
      <PokemonDisplay/>
    </div>
  )
}