import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as ApiService from '../../ApiService';

import { Wrapper, Description, Title } from './MovieDetails.styled';

const MovieDetails = props => {
  const [movieInfo, setMovieInfo] = useState({});
  const { movieId } = useParams();
  console.log(movieId);
  useEffect(() => {
    const getMovieById = async movieId => {
      try {
        const data = await ApiService.fetchMovieById(movieId);
        setMovieInfo(data);
        console.log('movieInfo', movieInfo);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovieById(movieId);
  }, [movieId, movieInfo]);

  const { title, vote_average, overview, genres, poster_path, tagline } =
    movieInfo;

  return (
    <Wrapper>
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        width="300"
        alt={tagline}
      />
      <Description>
        <Title>{title}</Title>
        <p> User Score: {(vote_average * 10).toFixed()} %</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres && genres.map(genre => genre.name + ' ')}</p>
      </Description>
    </Wrapper>
  );
};

export default MovieDetails;
