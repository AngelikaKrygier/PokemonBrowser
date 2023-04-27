import { Description, StyledTile, TileHeader } from "../Tile/styled"

export const Tile = ({ name, description }) => (
    <StyledTile>
        <TileHeader>{name}</TileHeader>
        <Description>{description}</Description>
    </StyledTile>
);