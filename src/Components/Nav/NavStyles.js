import styled from "styled-components";

export const NavContainer = styled.div`
    height: 10vh;
	display: flex;
	justify-content: space-around;
    align-items: center;
`;

export const Header = styled.h1`
	margin: 0;
	color: ${(props) => (props.theme === true ? "white" : "black")};
`;