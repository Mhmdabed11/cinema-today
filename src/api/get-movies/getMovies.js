import { API_KEY, API_MOVIE } from "../../../env";
import axios from "axios";

export const getMoviesPlayingNow = () => {
  return axios.get(`${API_MOVIE}/now_playing?api_key=${API_KEY}`);
};

export const getMoviesTopRated = () => {
  return axios.get(`${API_MOVIE}/top_rated?api_key=${API_KEY}`);
};

export const getMoviesUpcoming = () => {
  return axios.get(`${API_MOVIE}/upcoming?api_key=${API_KEY}`);
};

export const getMovieById = id => {
  return axios.get(`${API_MOVIE}/${id}?api_key=${API_KEY}`);
};
export const getMovieVideos = id => {
  return axios.get(
    `${API_MOVIE}/${id}/videos?api_key=${API_KEY}&language=en-US`
  );
};

export const getSimilarMovies = id => {
  return axios.get(`${API_MOVIE}/${id}/similar?api_key=${API_KEY}`);
};
