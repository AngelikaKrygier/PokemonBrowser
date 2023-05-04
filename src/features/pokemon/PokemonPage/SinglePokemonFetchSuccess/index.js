import { Tile } from "../../../../common/Tile/index";
import { FeatureTable, TableHeader, TableData, Button, Wrapper, StyledLink } from "./styled";

export const SinglePokemonFetchSuccess = ({ id, name, height, weight, species }) => (
    <Wrapper>
        <Tile
            img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            name={name}
            extraContent={<FeatureTable>
                <tr>
                    <TableHeader scope="row">wzrost [cm] :</TableHeader>
                    <TableData>{height}</TableData>
                </tr>
                <tr>
                    <TableHeader scope="row">waga [kg] :</TableHeader>
                    <TableData>{weight} </TableData>
                </tr>
                <tr>
                    <TableHeader scope="row">gatunek: </TableHeader>
                    <TableData>{species}</TableData>
                </tr>
                <tr>
                    <TableHeader scope="row">ID: </TableHeader>
                    <TableData>{id}</TableData>
                </tr>
            </FeatureTable>}
        >
        </Tile>
        <StyledLink to="/pokemony">
            <Button>Wróć</Button>
        </StyledLink>
    </Wrapper>
);