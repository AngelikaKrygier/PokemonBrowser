import { List, ListItem } from "./styled";
import { Tile } from "../../../../common/Tile";

export const PokemonFetchSuccess = ({ pokemon }) => (
    <List>
        {pokemon.results.map((p) => (
            <ListItem>
                <Tile
                    name={p.name}
                    seeMore="Zobacz więcęj"
                    img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.url.split('/')[6]}.png`}
                >
                </Tile>
            </ListItem>
        ))}
    </List>
);