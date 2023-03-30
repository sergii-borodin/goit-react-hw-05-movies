import React, { useState, useEffect } from 'react';
import * as ApiService from '../../ApiService';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const Home = props => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const { results } = await ApiService.fetchTrendingMovies();
        setMovies(results);
        console.log(results);
      } catch (error) {
        console.log(error);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to="movie/:movieId">{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

Home.propTypes = {};

export default Home;
