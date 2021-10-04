import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../../styles/Styles";
import { CardContainer, CardImg, CardTitle } from "./MovieCardStyles";
import { searchMovieById } from "../../utils/utils";
import { delFavs, detail, openModal } from "../../store/actions";

const MovieCard = ({ id, title, img, btn }) => {
	const theme = useSelector((state) => state.theme);
	const favoriteMovies = useSelector((state) => state.searchReducer.favs);
	const dispatch = useDispatch();

	const handleClick = async (e) => {
		e.preventDefault();
		const res = await searchMovieById(id);
		dispatch(detail(res));
		dispatch(openModal());
	};

	const deleteFavorite = (e, id) => {
		e.preventDefault();
		const favsCopy = [...favoriteMovies];
		const newFavs = favsCopy.filter((favs) => favs.imdbID !== id);
		dispatch(delFavs(newFavs));
	};

	return (
		<CardContainer theme={theme}>
			<CardImg src={img} alt="" />
			<CardTitle>{title}</CardTitle>
			<div>
				<Button theme={theme} onClick={(e) => handleClick(e)}>
					Details
				</Button>
				{btn && (
					<Button
						style={{ marginLeft: "10px" }}
						theme={theme}
						onClick={(e) => deleteFavorite(e, id)}
					>
						Remove
					</Button>
				)}
			</div>
		</CardContainer>
	);
};

export default MovieCard;
