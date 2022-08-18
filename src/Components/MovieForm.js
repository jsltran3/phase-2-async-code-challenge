import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers";
import React, { useState } from "react";
const API = "http://localhost:3000/movies"

function MovieForm({ handleAddMovie }) {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [movieInput, setMovieInput] = useState({
    title: "",
    description: "",
    watched: "false",
    image: ""
  });

  function handleMovieInput(event) {
    setMovieInput({
      ...movieInput, 
      [event.target.name]: event.target.value
    })
  }

  function handleGenreSelection(event) {
    setSelectedGenre(event.target.value);
  }

  

  function handleNewMovieSubmit(event) {
    event.preventDefault();
    const addMovie = ({
      title: movieInput.title,
      description: movieInput.description,
      genre: selectedGenre,
      watched: movieInput.watched,
      image: movieInput.image
    })

    fetch(API, {
      method: "POST", 
      headers: {
        Accept: "application/json", 
        "Content-Type": "application/json"
      },
      body: JSON.stringify( addMovie )
    })
      .then((resp) => resp.json())
      .then((addedMovie) => handleAddMovie(addedMovie))

        setMovieInput({
          title: "",
          description: "",
          genre: "",
          watched:"",
          image: ""
        })
  }

  return (
    <form className="new-movie-form" onSubmit={handleNewMovieSubmit}>
        <h3>Add Movie</h3>
        <input placeholder="Title" name="title" value={movieInput.title} onChange={handleMovieInput}/><br/>
      <select name="genre" value={selectedGenre} onChange={handleGenreSelection}>
        <option value="" disabled selected>Select Genre:</option>
        <option value="Action">Action</option>
        <option value="Horror">Horror</option>
        <option value="Drama">Drama</option>
        <option value="Comedy">Comedy</option>
      </select><br/>
      <label>Watched?
        <input type="checkbox" name="genre" value={movieInput.watched} onChange={handleMovieInput}/>
      </label><br/>
        <input placeholder="Image" name="image" onChange={handleMovieInput} value={movieInput.image}/><br/>
      <textarea placeholder="Description" rows={10} value={movieInput.description} name="description" onChange={handleMovieInput}/><br/>
        <input type="submit" value="Add Movie" />
    </form>
  );
}

export default MovieForm;
