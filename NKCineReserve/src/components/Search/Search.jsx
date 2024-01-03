import React, {useState} from 'react'

import './Search.css'


const Search = ({genres, onGenreChange}) => {

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  }

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
    onGenreChange(event.target.value); 
  }
  

  return (
    <div className="searchBarContainer container p-0">
      <div className="d-flex flex-wrap align-items-center">
        <div className="col-md-3">
          <select 
            className="form-select bg-dark text-white" 
            name="genre" 
            id="genres" 
            value={selectedGenre}
            onChange={handleGenreChange}>
            <option value="">
              Select a genre
            </option>
            {
              genres.map((selectedGenre, key) => (
                <option value={selectedGenre} key={key}>
                  {selectedGenre}
                </option>
              ))
            }
          </select>
        </div>
        <div className="col-md-9">
          <input 
            type="text" 
            className="form-control" 
            id="search" 
            placeholder="Search.." 
            onChange={handleInputChange} />
        </div>
      </div>
    </div>
  )
}

export default Search
