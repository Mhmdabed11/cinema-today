import { TMDB_CONFIG_URL } from "../../../env";
import axios from "axios";

export const getApiConfig = () => {
  return axios.get(TMDB_CONFIG_URL);
};
