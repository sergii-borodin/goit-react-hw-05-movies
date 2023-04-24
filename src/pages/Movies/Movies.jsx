import React, { useState, useEffect } from 'react';
import * as ApiService from '../../ApiService';
import { Link } from 'react-router-dom';

const Movies = props => {
  const [inputValue, setInputValue] = useState('');
  const [movieName, setMovieName] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (movieName === '') {
      return;
    }
    const getMoviesByName = async movieName => {
      try {
        const { results } = await ApiService.fetchMoviesByName(movieName);
        console.log('results', results);
        setMovies(results);
      } catch (error) {}
    };

    getMoviesByName(movieName);
  }, [movieName]);

  const onFormSubmit = e => {
    e.preventDefault();
    setMovieName(inputValue);
  };

  const onInputChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <label>
          Search movie
          <input type="text" value={inputValue} onChange={onInputChange} />
        </label>
        <button type="submit">Search</button>
      </form>

      <ul>
        {movies.map(({ original_title, id }) => (
          <li key={id}>
            <Link to={`${id}`}>{original_title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
