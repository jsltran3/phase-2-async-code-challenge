import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import Filter from "./Filter";
import Search from "./Search";
import { display } from "@mui/system";

const API = "http://localhost:3000/movies"

function MovieContainer({ movieList, setMovieList }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [pickGenre, setPickGenre] = useState("All");
  
  const { id, title, description, genre, watched, image } = movieList 
  
  function handleGenreChange(genre) {
    setPickGenre(genre);
  }


  useEffect(() => {
		fetch(API)
			.then((resp) => resp.json())
			.then((movie) => { 
				setMovieList(movie)
			});
	}, []);
  
  const displayfilteredMovies = () => {
    return movieList.filter(movie => {
      const title = movie.title.toLowerCase();
      const search = searchTerm.toLowerCase();
      const isSearchInTitle = title.includes(search);
      const isGenrePicked = movie.genre === pickGenre || pickGenre === 'All';

      return isSearchInTitle && isGenrePicked;
    });
  };

  return (
    <div>
      <h1>Watchlist</h1>
      
      <Search 
        setSearchTerm={setSearchTerm} 
        searchTerm={searchTerm}
        /><br/>
      <Filter 
        onGenreChange={handleGenreChange}
        pickGenre={pickGenre}
      />
    
      {displayfilteredMovies().map((movie) => (
        <MovieCard 
          key={movie.id}
          id={movie.id}
          movie={movie}
        />
      ))}
    </div>
  );
}

export default MovieContainer;
