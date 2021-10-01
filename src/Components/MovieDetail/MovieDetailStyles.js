import styled from "styled-components";

export const DetailContainer = styled.div`
    position: fixed;
    top: 20%;
    height: 500px;
	background-color: ${(props) =>
    props.theme === true ? "#636e72" : "#ecf0f1"};
    padding: 20px;
    margin:0 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 15px;
    z-index: 1;
`;

export const DetailImg = styled.img`
    border-radius: 15px;
`;

export const DetailContent = styled.div`
    display: flex;
`;

export const DetailText = styled.div`
    margin-left:10px;
`;
