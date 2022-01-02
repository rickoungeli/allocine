import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Card from './components/Card';

const App = () => {
  const [movies, setMovies] = useState([])

  useEffect(()=>{
    getMovies()
  }, [])

  const getMovies = () => {
    axios
    .get('https://api-allocine.herokuapp.com/api/movies/popular')
    .then((res)=> setMovies(res.data.results))
  }


  return (
    <main>
      <Header />
      <Navbar />
      <div className="moviesContainer">
        <ul>
          {movies.map((movie)=>(
            <li><Card movie={movie} key={movie.id}/></li>
          ))}
        </ul>

      </div>
    </main>
  );
};

export default App;