import styled from "styled-components";

export const StyledTile = styled.div`
display: grid;
width: 250px;
box-shadow: ${({ theme }) => theme.boxShadow.basic};
margin: 20px 0 0;
padding: 10px 20px;
background-color: ${({ theme }) => theme.background};
`;

export const TileHeader = styled.h2`
color: ${({ theme }) => theme.baseColorFont};
font-size: 20px;
text-transform: uppercase;
`;

export const Description = styled.p`
color: ${({ theme }) => theme.tile.description};
`;