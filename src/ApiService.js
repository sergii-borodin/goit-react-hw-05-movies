import axios from 'axios';

// working example
// https://api.themoviedb.org/3/trending/all/week?api_key=9fbe85233379d275904e898da5aa337c

const API_KEY = '9fbe85233379d275904e898da5aa337c';
const query = 'movie/week';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/${query}?api_key=${API_KEY}`);

  return response.data;
};
