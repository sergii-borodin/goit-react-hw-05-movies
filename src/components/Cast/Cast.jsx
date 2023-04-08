import React, { useEffect, useMemo, useState } from 'react';
import * as ApiService from '../../ApiService';
import { ActorName, ActorsList } from './Cast.styled';

import { useParams } from 'react-router-dom';

const Cast = props => {
  const [castInfo, setCastInfo] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCastInfoByMovieId = async movieId => {
      try {
        const { cast } = await ApiService.fetchCastInfoByMovieId(movieId);
        setCastInfo(cast);
        console.log('cast', cast);
      } catch (error) {
        console.log(error.message);
      }
    };
    getCastInfoByMovieId(movieId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  const popularActors = useMemo(
    () => castInfo.filter(actor => actor.popularity > 10),
    [castInfo]
  );
  console.log(popularActors);

  return (
    <ActorsList>
      {popularActors.map(({ original_name, profile_path, id }) => (
        <li key={id}>
          <img
            src={`https://image.tmdb.org/t/p/original/${profile_path}`}
            alt={original_name}
            width="100"
          />
          <ActorName>{original_name}</ActorName>
        </li>
      ))}
    </ActorsList>
  );
};

export default Cast;
