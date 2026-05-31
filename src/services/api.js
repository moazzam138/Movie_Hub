import axios from "axios";

// Your API Key
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

// Base URL
const BASE_URL = "https://api.themoviedb.org/3";

// Image URL
export const IMAGE_BASE_URL =
  "https://image.tmdb.org/t/p/w500";

/* =========================
   Get Trending Movies
========================= */

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );

    return response.data.results;
  } catch (error) {
    console.error(
      "Error fetching trending movies:",
      error
    );
    return [];
  }
};

/* =========================
   Search Movies
========================= */

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie`,
      {
        params: {
          api_key: API_KEY,
          query: query,
        },
      }
    );

    return response.data.results;
  } catch (error) {
    console.error(
      "Error searching movies:",
      error
    );
    return [];
  }
};

/* =========================
   Get Single Movie Details
========================= */

export const getMovieDetails = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );

    return response.data;
  } catch (error) {
    console.error(
      "Error fetching movie details:",
      error
    );
    return null;
  }
};

/* =========================
   Get Movie Cast
========================= */

export const getMovieCast = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
    );

    return response.data.cast;
  } catch (error) {
    console.error(
      "Error fetching cast:",
      error
    );
    return [];
  }
};

/* =========================
   Get Similar Movies
========================= */

export const getSimilarMovies = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`
    );

    return response.data.results;
  } catch (error) {
    console.error(
      "Error fetching similar movies:",
      error
    );
    return [];
  }
};