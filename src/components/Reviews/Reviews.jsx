import React, { useEffect, useState } from 'react';
import * as ApiService from '../../ApiService';
import { useParams } from 'react-router-dom';

import { ReviewsList, ReviewItem } from './Reviews.styled';

import PropTypes from 'prop-types';

const Reviews = props => {
  const [reviewsInfo, setReviewsInfo] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviewsInfoByMovieId = async movieId => {
      try {
        const { results } = await ApiService.fetchReviewsInfoByMovieId(movieId);
        setReviewsInfo(results);
        console.log('results', results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getReviewsInfoByMovieId(movieId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);
  return (
    <ReviewsList>
      {reviewsInfo !== [] ? (
        reviewsInfo.map(({ id, author, content }) => (
          <ReviewItem key={id}>
            <article>
              <p>
                <b>{author}</b>
              </p>
              <p>{content}</p>
            </article>
          </ReviewItem>
        ))
      ) : (
        <p>Unfortunately, no reviews yet </p>
      )}
    </ReviewsList>
  );
};

Reviews.propTypes = {};

export default Reviews;
