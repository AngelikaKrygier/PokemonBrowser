import { StyledTile, TileHeader, Img } from "../Tile/styled"

export const Tile = ({ name, img, extraContent}) => (
    <StyledTile>
        <TileHeader>{name}</TileHeader>
        <Img src={img} alt="Pokemon"></Img>
        {extraContent}
    </StyledTile>
);