import React from 'react'
import "../css/nav.css"
import SearchBar from './searchBar'

export default function nav() {
    
    return (
    <div className='infoContainer'>
        <div className='pokeDexInfo'>
            <h1><span className='hide'>Info</span></h1>
            <div className='extraInfo'><span className='hide'>A pokèdex is basically a dictionary for the Pokemon it has all the
            info for all 1008 pokèmon from type, abilities, moves and much more.</span> 
            </div>
        </div>
        <SearchBar/>
        <div className='instruction'>
            <h1><span className='hide'>How To Use</span></h1>
            <div className='extraInfo'><span className='hide'>Search anything in the search bar like name or pokèmon number and a
            list of pokèmon matching that criteria will pop up</span>
            </div>
        </div>
    </div>
  )
}
