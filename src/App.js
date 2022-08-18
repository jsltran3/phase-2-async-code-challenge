import React, { useState } from "react";
import MovieContainer from "./Components/MovieContainer";
import MovieForm from "./Components/MovieForm";
import Home from "./Components/Home";
import './App.css';

import {
  Routes,
  Route,
} from "react-router-dom";



function App() {  
  const [movieList, setMovieList] = useState([]);
  
  function handleAddMovie(newMovie) {
    setMovieList([...movieList, newMovie]);
  }

  return (
    <div className="app">
      <Home />
     <Routes>
          <Route path="/movies" element={ 
              <MovieContainer movieList={movieList} setMovieList={setMovieList}/> } 
          />
          <Route path="/movies/new" element={ 
              <MovieForm movieList={movieList} setMovieList={setMovieList} handleAddMovie={handleAddMovie}/> } 
          />
      </Routes>
      
    </div>
  );
}

export default App;