import React, { useState, useEffect } from 'react';
import * as ApiService from '../../ApiService';

const Movies = props => {
  const [movieName, setMovieName] = useState('');
  useEffect(() => {
    const getMoviesByName = async movieName => {
      try {
        const data = await ApiService.fetchMoviesByName(movieName);
        console.log('data', data);
      } catch (error) {}
    };
  }, [movieName]);

  return (
    <>
      <label>
        Search movie
        <input type="text" />
      </label>
    </>
  );
};

export default Movies;
