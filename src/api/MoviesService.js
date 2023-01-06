import axios from 'axios';

const API_KEY = '6d60d7d80942a98a2c3241b43cb58dcb';
const BASE_URL = 'https://api.themoviedb.org/3/';
const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MoviesService {
    static getMovies() {
        return axios(withBaseUrl('movie/popular'))
    }

    static getMovieById(id) {
        return axios(withBaseUrl(`movie/${id}`));
    }
}