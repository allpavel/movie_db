import axios from "axios";
import { POPULAR_MOVIES_BASIC_URL, API_KEY, API_URL } from "./config";

export default class MovieService {
    static async getPopularMovies() {
        const movies = await axios.get(POPULAR_MOVIES_BASIC_URL);
        return movies;
    }
};