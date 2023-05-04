import styled from "styled-components";

export const StyledTile = styled.div`
display: grid;
justify-content: center;
grid-gap: 15px;
box-shadow: ${({ theme }) => theme.boxShadow.basic};
margin: 20px 0 0;
padding: 10px 20px;
background-color: ${({ theme }) => theme.background};
`;

export const TileHeader = styled.h2`
color: ${({ theme }) => theme.baseColorFont};
font-size: 20px;
text-transform: uppercase;
text-align: center;
`;

export const Img = styled.img`
max-width: 500px;
border-radius: 10%;
justify-self: center;
`;