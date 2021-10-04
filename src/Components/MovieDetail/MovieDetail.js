import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { closeModal, favs } from "../../store/actions";
import { Button } from "../../styles/Styles";
import {
	DetailContainer,
	DetailContent,
	DetailImg,
	DetailText,
} from "./MovieDetailStyles";

const MovieDetail = ({btn}) => {
	const singleMovie = useSelector((state) => state.searchReducer.movieDetail);
	const theme = useSelector((state) => state.theme);
	const favoriteMovies = useSelector((state) => state.searchReducer.favs);
	const dispatch = useDispatch();

	const handleClick = (e) => {
		e.preventDefault();
		const favsImdbID = [];
		favoriteMovies.map((item) => favsImdbID.push(item.imdbID));
		if (favsImdbID.includes(singleMovie.imdbID)) {
			alert("It already exists in Watch List!");
		} else {
			const favsCopy = [...favoriteMovies, singleMovie];
			dispatch(favs(favsCopy));
		}
	};

	return (
		<DetailContainer theme={theme}>
			<DetailContent>
				<DetailImg src={singleMovie.Poster} alt="" />
				<DetailText>
					<h1>{singleMovie.Title}</h1>
					<div>
						<p>{singleMovie.Rated}</p>
						<p>{singleMovie.Runtime}</p>
					</div>
					<h2>Plot</h2>
					<p>{singleMovie.Plot}</p>
					<h2>Actors</h2>
					<p>{singleMovie.Actors}</p>
				</DetailText>
			</DetailContent>
			<div>
				<Button
					theme={theme}
					onClick={(e) => {
						e.preventDefault();
						dispatch(closeModal());
					}}
				>
					close
				</Button>
				{!btn&&<Button
					style={{ marginLeft: "10px" }}
					theme={theme}
					onClick={(e) => {
						handleClick(e);
					}}
				>
					Add to WatchList
				</Button>}
			</div>
		</DetailContainer>
	);
};

export default MovieDetail;
