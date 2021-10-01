import styled from "styled-components";

export const CardContainer = styled.div`
	height: 400px;
	width: 200px;
	display: flex;
	background-color: ${(props) =>
		props.theme === true ? "#636e72" : "#ecf0f1"};
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	margin: 10px;
	border-radius: 15px;
`;

export const CardTitle = styled.h2`
	margin: 0;
	width: 175px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	&:hover {
		white-space: normal;
		overflow: visible;
	}
`;

export const CardImg = styled.img`
	border-radius: 15px;
	height: 250px;
	width: 175px;
	object-fit: contain;
`;
