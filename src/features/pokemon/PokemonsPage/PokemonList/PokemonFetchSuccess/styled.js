import styled from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
padding: 0 15px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 20px;
`;

export const ListItem = styled.li`
list-style: none;
display: grid;
`;

export const TileButton = styled.button`
background-color: ${({ theme }) => theme.tile.buttonBackground};
border: none;
padding: 10px;
margin: 0 0 10px 0;
font-size: 15px;
cursor: pointer;
transition: 0.3s;

&:hover {
    background-color: ${({ theme }) => theme.tile.hoverButton};
};
`;

export const StyledLink = styled(Link)`
color: ${({ theme }) => theme.tile.buttonFontColor};
text-decoration: none;
`;
