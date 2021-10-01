import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import { MoviesContainer, MoviesListContainer } from "./MovieListStyles";
import MovieDetail from "../MovieDetail/MovieDetail";

const MovieList = () => {
	const searchFile = useSelector((state) => state.searchReducer);
	const isModal = useSelector((state) => state.modalReducer);

	return (
		<MoviesListContainer>
			<MoviesContainer>
				{searchFile.searchData.map((movie, index) => (
					<div key={index}>
						<MovieCard
							id={movie.imdbID}
							title={movie.Title}
							img={movie.Poster}
						/>
					</div>
				))}
			</MoviesContainer>
			{isModal && <MovieDetail />}
		</MoviesListContainer>
	);
};

export default MovieList;
