import React from 'react'

function Filter({ onGenreChange, pickGenre }) {

  function handleFilterChange(event) {
    onGenreChange(event.target.value);
  }

  return (
    <div>
        <select value={pickGenre} onChange={handleFilterChange}>
            <option value="All">All</option>
            <option value="Action">Action</option>
            <option value="Horror">Horror</option>
            <option value="Drama">Drama</option>
            <option value="Comedy">Comedy</option>
        </select>
    </div>
  )
}

export default Filter;
