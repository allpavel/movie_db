const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = process.env.REACT_APP_API_KEY;

export const POPULAR_MOVIES_BASIC_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;