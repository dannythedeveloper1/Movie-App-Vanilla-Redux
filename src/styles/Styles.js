import styled from "styled-components";

export const Button = styled.button`
	border-radius: 5px;
	padding: 5px;
	border: none;
	font-size: medium;
	color: ${(props) => (props.theme === true ? "black" : "white")};
	background-color: ${(props) =>
		props.theme === true ? "#ecf0f1" : "#2d3436"};
	cursor: pointer;
`;


export const Input = styled.input`
	outline: none;
	border: none;
	font-size: 22px;
	border-radius: 5px;
	background-color: ${(props) =>
		props.theme === true ? "#636e72" : "#ecf0f1"};
	margin-right: 10px;
`;
