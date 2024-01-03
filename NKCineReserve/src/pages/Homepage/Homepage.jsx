import React, {useState, useEffect} from 'react'
import './Homepage.css'

import axios from 'axios'

import Logo from '../../components/Logo/Logo';
import MenuItems from '../../components/MenuItems/MenuItems';
import Search from '../../components/Search/Search';
import AuthenticationWay from '../../components/AuthenticationType/AuthenticationType';
import MovieList from '../../components/MovieList/MovieList'

const Homepage = () => {

  const menuItems = ['About', 'Service', 'Contact Us'];

  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
 


  // useEffect(() => {
  //   axios.get('https://raw.githubusercontent.com/erik-sytnyk/movies-list/master/db.json')
  //   .then(response => {
  //     const listOfGenres = response.data.genres;
  //     const listOfMovies = response.data.movies;
  //     setGenres(listOfGenres);
  //     setMovies(listOfMovies);
  //   })
  //   .catch(error => console.error('Error:', error));
  // })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/json/Movielist.json'); 
        const listOfGenres = response.data.genres;
        const listOfMovies = response.data.movies;
        setGenres(listOfGenres);
        setMovies(listOfMovies);
        setFilteredMovies(listOfMovies);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const handleGenreChange = (selectedGenre) => {
    debugger
    if (selectedGenre === '') {
      setFilteredMovies(movies); 
    } else {
      console.log(selectedGenre);
      const filtered = movies.filter((movie) => movie.genres.includes(selectedGenre));
      setFilteredMovies(filtered);
      console.log(filtered);
    }
  };

  return (
    <div className="homepageConatiner">
      <header>
        <nav className="navbar navbar-expand-md bg-blue">
          <div className="headerComponent container-fluid p-1 justify-content-evenly">
            <div className="row align-items-center">
              <div className="col-3 col-md-2">
                  <a href="#/">
                    <Logo/>
                  </a>  
              </div>
                  
              <div className="d-none d-md-block col-md-3">
                  <MenuItems menuitems={menuItems} />
              </div>
              
              <div className="col-9 col-md-5">
                  <Search genres={genres} onGenreChange={handleGenreChange} />
              </div>
          
              <div className="d-none d-md-block col-md-2"> 
                  <AuthenticationWay />
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <MovieList movies={filteredMovies}/>
      </main>
      
    </div>
  )
}

export default Homepage
