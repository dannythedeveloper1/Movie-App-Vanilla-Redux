import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import MovieDetail from "../MovieDetail/MovieDetail";
import { FavsContainer, FavsListContainer } from "./watchListStyles";

const WatchList = () => {
	const favs = useSelector((state) => state.searchReducer.favs);
	const isModal = useSelector((state) => state.modalReducer);
	return (
		<FavsListContainer>
			<FavsContainer>
				{favs.map((movie, index) => (
					<div key={index}>
						<MovieCard
							id={movie.imdbID}
							title={movie.Title}
                            img={movie.Poster}
                            btn={true}
                        />
					</div>
				))}
			</FavsContainer>
			{isModal && <MovieDetail btn={true}/>}
		</FavsListContainer>
	);
};

export default WatchList;
