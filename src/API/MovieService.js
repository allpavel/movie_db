import axios from "axios";
import { POPULAR_MOVIES_BASIC_URL, SEARCH_BASIC_URL } from "./config";

export default class MovieService {
    static async getPopularMovies(searchTerm, page) {
        const endpoint = searchTerm ? `${SEARCH_BASIC_URL}${searchTerm}&page=${page}` : `${POPULAR_MOVIES_BASIC_URL}&page=${page}`;
        const movies = await axios.get(endpoint);
        return movies.data;
    }
};