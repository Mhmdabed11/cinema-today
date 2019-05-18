import { API_KEY, API_MOVIE } from "../../../env";
import axios from "axios";

export const getMoviesPlayingNow = () => {
  return axios.get(`${API_MOVIE}/upcoming?api_key=${API_KEY}`);
};
