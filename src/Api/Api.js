import axios from "axios";
const ApiKey = '67b4b2f72966fb7844cde967d3967510';
export const axiosInstance = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie/popular?api_key={${ApiKey}}`,
});
