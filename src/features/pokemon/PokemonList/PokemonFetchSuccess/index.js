import { List, ListItem } from "./styled";
import { Tile } from "../../../../common/Tile";

export const PokemonFetchSuccess = ({ pokemon }) => (
    <List>
        {pokemon.results.map(({ name, url }) => (
            <ListItem>
                <Tile
                    name={name}
                    description="Zobacz więcęj"
                >
                </Tile>
            </ListItem>
        ))}
    </List>
);