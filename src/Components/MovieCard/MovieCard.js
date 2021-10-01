import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../../styles/Styles";
import { CardContainer, CardImg, CardTitle } from "./MovieCardStyles";
import { searchMovieById } from "../../utils/utils";
import { detail, openModal } from "../../store/actions";

const MovieCard = ({ id, title, img }) => {
	const theme = useSelector((state) => state.theme);
	const dispatch = useDispatch();

	const handleClick = async (e) => {
		e.preventDefault();
		const res = await searchMovieById(id);
		dispatch(detail(res));
		dispatch(openModal());
	};

	return (
		<CardContainer theme={theme}>
			<CardImg src={img} alt="" />
			<CardTitle>{title}</CardTitle>
			<Button theme={theme} onClick={(e)=>handleClick(e)}>
				Details
			</Button>
		</CardContainer>
	);
};

export default MovieCard;
