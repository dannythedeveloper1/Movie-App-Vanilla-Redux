import { useSelector } from "react-redux";
import styled from "styled-components";
import MovieList from "./Components/MovieList/MovieList";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WatchList from "./Components/WatchList/WatchList";

function App() {
	const theme = useSelector((state) => state.theme);

	const styles = {
		dark: {
			backgroundColor: "black",
			color: "white",
		},
		light: {
			backgroundColor: "white",
			color: "black",
		},
	};

	return (
		<Router>
			<Container style={theme ? styles.dark : styles.light}>
				<Nav />
				<Switch>
					<Route exact path="/">
						<MovieList />
					</Route>
					<Route exact path="/watchlist">
						<WatchList />
					</Route>
				</Switch>
			</Container>
		</Router>
	);
}

const Container = styled.div`
	padding: 0 10%;
	min-height: 100vh;
`;

export default App;
