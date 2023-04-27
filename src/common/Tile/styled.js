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
`;

export const TileButton = styled.button`
background-color: ${({ theme }) => theme.tile.buttonBackground};
color: ${({ theme }) => theme.tile.buttonFontColor};
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

export const Link = styled.a`
`;

export const Img = styled.img`
max-width: 500px;
border-radius: 10%;
justify-self: center;
`;

export const Description = styled.p`
`;