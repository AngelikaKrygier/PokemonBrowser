import { Tile } from "../../../../common/Tile/index";
import { FeatureTable, TableHeader, TableData } from "./styled";

export const SinglePokemonFetchSuccess = ({ id, name, height, weight, species }) => {

    return (
        <>
            <Tile
                img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                name={name}
                extraContent={<FeatureTable>
                    <tr>
                        <TableHeader scope="row">wzrost:</TableHeader>
                        <TableData>{height}</TableData>
                    </tr>
                    <tr>
                        <TableHeader scope="row">waga:</TableHeader>
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
        </>
    );
};