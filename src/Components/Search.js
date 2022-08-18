import React from 'react'

function Search({ setSearchTerm, searchTerm }) {

  function handleSearch(event) {
    let lowerCaseInput = event.target.value.toLowerCase();
    setSearchTerm(event.target.value)
    console.log("Searching...")
  }

  return (
    <div>
        <input 
          type="text" 
          placeholder="Search for movie by title" 
          style={{width: '250px'}}
          onChange={handleSearch}
          value={searchTerm}
        />
    </div>
  )
}

export default Search;
