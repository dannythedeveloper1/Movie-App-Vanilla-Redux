import axios from "axios";
const api_key = process.env.REACT_APP_API_KEY;
const apiEndpoint = `https://www.omdbapi.com/?apikey=${api_key}`;


export const searchMovieByName = (search) => {
	const data = axios.get(`${apiEndpoint}&s=${search}`).then((res) => res.data);
	return data;
};

export const searchMovieById = (id) => {
	const data = axios.get(`${apiEndpoint}&i=${id}`).then((res) => res.data);
	return data;
}

