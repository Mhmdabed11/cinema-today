import { API_KEY, API_MOVIE } from "../../../env";
import axios from "axios";

export const getMovieById = id => {
  return axios.get(`${API_MOVIE}/${id}?api_key=${API_KEY}`);
};
