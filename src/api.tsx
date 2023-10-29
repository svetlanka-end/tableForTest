import axios from "axios";

export const getApiData = (apiUrl: string) => {
  return axios.get(apiUrl);
};
