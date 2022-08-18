import React from "react";
import { useState } from 'react'
import Comments from './Comments'

function MovieCard({ movie }) {
  const [comments, setComments] = useState([])

  const {id, title, description, genre, image} = movie;

  return (
    <div>
      {/* <img  src={image} alt={title}/> */}
      <h3>{title}</h3>
      <p>{genre}</p>
      <p>
        <strong>{description}</strong>
      </p>
      <button>Mark as watched</button>
      <Comments comments={comments} setComments={setComments}/>
    </div>
  );
}

export default MovieCard;