import React, { useState, useEffect } from 'react';
import * as ApiService from '../../ApiService';
import { Link } from 'react-router-dom';

const Home = props => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const { results } = await ApiService.fetchTrendingMovies();
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <>
      <ul>
        {movies.map(({ title, id }) => (
          <li key={id}>
            <Link to={`movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
