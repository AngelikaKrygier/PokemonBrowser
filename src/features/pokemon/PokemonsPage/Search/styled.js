import styled from "styled-components";

export const SearchStyled = styled.section`
display: grid;
grid-template-columns: 1fr auto;
grid-gap: 20px;
`;

export const Input = styled.input`
font-size: 18px;
padding: 10px;
`;

export const SearchButton = styled.button`
border: none;
padding: 10px;
border-radius: 5%;
cursor: pointer;
background-color: ${({theme})=>theme.searchButton.background};
color: ${({theme})=>theme.searchButton.fontColor};
`;