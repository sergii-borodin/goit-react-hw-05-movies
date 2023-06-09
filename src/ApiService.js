import axios from 'axios';

const API_KEY = '9fbe85233379d275904e898da5aa337c';
const query = 'movie/week';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/${query}?api_key=${API_KEY}`);

  return response.data;
};

export const fetchMovieById = async movieId => {
  const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);

  return response.data;
};

export const fetchCastInfoByMovieId = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchReviewsInfoByMovieId = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}`
  );

  return response.data;
};

export const fetchMoviesByName = async movieName => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${movieName}&language=en-US`
  );

  return response.data;
};
