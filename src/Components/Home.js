import React from 'react'
import { NavLink } from 'react-router-dom'



export default function Home() {
  return (
    <div>
        <h1>Welcome {'\n'}to{'\n'} Watchlist!{'\n'}</h1>
        <NavLink className="home" to="/" >Home</NavLink><br/>
        <NavLink className="home" to="/movies" >Movies</NavLink><br/>
        <NavLink className="home" to="/movies/new" >Movie Form</NavLink><br/>
    </div>
    
  )
}
