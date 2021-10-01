import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { change, darkmode, search } from "../../store/actions";
import { Button, Input } from "../../styles/Styles";
import { searchMovieByName } from "../../utils/utils";
import { NavContainer, Header } from "./NavStyles";

const Nav = () => {
	const dispatch = useDispatch();
	const theme = useSelector((state) => state.theme);
    const searchFile = useSelector((state) => state.searchReducer);
    
	const handleClick = async () => {
		const res = await searchMovieByName(searchFile.searchValue);
		const data = res.Search;
		dispatch(search(data));
    };
    
	return (
		<NavContainer>
			<Link to="/" style={{ textDecoration: "none" }}>
				<Header theme={theme}>Movie Site</Header>
			</Link>

			<form style={{display:"flex",alignItems:"center"}}>
				<Input
					theme={theme}
					type="text"
					placeholder="search movie"
					onChange={(e) => dispatch(change(e))}
				/>
				<Button
					theme={theme}
					onClick={(e) => {
						e.preventDefault();
						if (searchFile.searchValue) {
							dispatch(darkmode());
							handleClick();
						} else {
							alert("please enter search value");
						}
					}}
				>
					Search
				</Button>
			</form>

			<Link to="/watchlist" style={{ textDecoration: "none" }}>
				<Header theme={theme}>Watch List</Header>
			</Link>
		</NavContainer>
	);
};

export default Nav;
