import { SeeMore, StyledTile, TileHeader, Link, Img } from "../Tile/styled"

export const Tile = ({ name, seeMore, link, img }) => (
    <StyledTile>
        <TileHeader>{name}</TileHeader>
        <Img src={img}></Img>
        <SeeMore>{seeMore}</SeeMore>
    </StyledTile>
);