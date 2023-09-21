import React from "react";
import "../css/pokemondisplay.css";
import { useGetPokemonByNameQuery } from "./pokemon";
import { useGetPokemonBySpeciesQuery } from "./pokemon";
import { useSelector } from "react-redux";

export default function PokemonDisplay() {
  // const name = useSelector((state) => state.pokemonName);
  // const { data } = useGetPokemonByNameQuery(name);
  // const { data } = useGetPokemonBySpeciesQuery(name);

  // console.log(data);

  return (
    <div className="pokeInfoContainer">
      <div className="pokeDescription" id="box">
        <h1>
          <TextDescription />
        </h1>
        <br/>
        <h1>
          <PokeHeight />
        </h1>
        <h1>
          <PokeWeight/>
        </h1>
        <br/>
        <h1>
          <PokeAbilities/>
        </h1>
      </div>
      <div className="pokeImage" id="box">
        <h1 className="name">
          <PokeName />
        </h1>
        <PokePic />
      </div>
      <div className="pokeExtraSection" id="box">
        <h1 className="Title">
          Pokemon Stats
        </h1>
        <br/>
        <h1 className="stats">
        <PokeStats/>
        </h1>
        <br/>
        <h1 className="Title">
          Typing
        </h1>
        <br/>
        <h1>
          <PokeType/>
        </h1>
      </div>
    </div>
  );
}

export function TextDescription() {
  const name = useSelector((state) => state.pokemonName);
  const { data } = useGetPokemonBySpeciesQuery(name);
  const removeArrow = (text) => {
    return text.replace("\f", "\n");
  };

  const filteredEnglish = () => {
    
    if (data) {
      const englishFlavorText = data.flavor_text_entries.find(
        (entry) => entry.language.name === "en"
      );
      if (englishFlavorText) {
        const cleanedText = removeArrow(englishFlavorText.flavor_text);
        return (
          cleanedText ||
          "No Info"
        );
      }
    }
    return "No Info";
  };

  return <div>{filteredEnglish()}</div>;
}

export function PokeName() {
  const name = useSelector((state) => state.pokemonName);
  const { data } = useGetPokemonByNameQuery(name);
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return <div>{capitalizeFirstLetter(data ? data.species.name : "bulbasaur")}</div>;
}

export function PokePic() {
  const name = useSelector((state) => state.pokemonName);
  const { data } = useGetPokemonByNameQuery(name);

  return (
    <div className="pokePic">
      <img 
        alt="pokemonPic"
        src={
          data
            ? data.sprites.other["official-artwork"].front_default
            : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        }
      />
    </div>
  );
}

export function PokeStats(){
  const name = useSelector((state) => state.pokemonName);
  const { data } = useGetPokemonByNameQuery(name);
  const pokeStats = data && data.stats ? data.stats.map(stat=>({[stat.stat.name]: stat.base_stat})) : [];
  const totalBaseStat = pokeStats.reduce((total, stat) => total + Object.values(stat)[0], 0);
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  return(
    <div>
      {pokeStats.map((stat, index)=>(
        <div key={index}>
          {capitalizeFirstLetter(Object.keys(stat)[0])}: {(Object.values(stat)[0])}
        </div>
        
      ))}
      <div>
        Total: {totalBaseStat}
      </div>
    </div>
  )
}

export function PokeWeight(){
  const name = useSelector((state) => state.pokemonName);
  const { data } = useGetPokemonByNameQuery(name);

  return(
    <div>Weight: {data ? data.weight / 10 : "69"}<span className="measure">KG</span> </div>
  )
}

export function PokeHeight(){
  const name = useSelector((state) => state.pokemonName);
  const { data } = useGetPokemonByNameQuery(name);
  
  return(
    <div>Height: {data ? data.height / 10: "7"}<span className="measure">M</span></div>
  )
}


export function PokeAbilities(){
  const name = useSelector((state) => state.pokemonName);
  const { data } = useGetPokemonByNameQuery(name);
  
  const abilities = data ? data.abilities.map((ability) => ability.ability.name) : [];

  const uniqueAbilities = [...new Set(abilities)];

  return (
    <div>
      {uniqueAbilities.map((ability, index) => (
        <div key={index}>
          {index === 1 && data.abilities[1].is_hidden ? "Hidden Ability: " : "Ability: "}
          {ability}
        </div>
      ))}
    </div>
  )
}

export function PokeType(){
  const name = useSelector((state) => state.pokemonName);
  const { data } = useGetPokemonByNameQuery(name);
  
  let typesToDisplay = null;

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  if (data && data.types) {
    if (data.types.length === 1) {
      typesToDisplay = (
        <div>
          <div>Type: {capitalizeFirstLetter(data.types[0].type.name)}</div>
        </div>
      );
    } else if (data.types.length === 2) {
      typesToDisplay = (
        <div>
          <div>Type 1: {capitalizeFirstLetter(data.types[0].type.name)}</div>
          <div>Type 2: {capitalizeFirstLetter(data.types[1].type.name)}</div>
        </div>
      );
    }
  }

  return(
    <div>{typesToDisplay}</div>
  ) 

}