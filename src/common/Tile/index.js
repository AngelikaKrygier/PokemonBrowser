import { TileButton, StyledTile, TileHeader, Img } from "../Tile/styled"

export const Tile = ({ name, content, img, extraDescription }) => (
    <StyledTile>
        <TileHeader>{name}</TileHeader>
        <Img src={img} alt="Pokemon"></Img>
        {extraDescription}
        <TileButton>{content}</TileButton>
    </StyledTile>
);