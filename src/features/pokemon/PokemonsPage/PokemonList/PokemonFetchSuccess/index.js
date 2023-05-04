import { List, ListItem, TileButton, StyledLink } from "./styled";
import { Tile } from "../../../../../common/Tile"
import { useDispatch } from "react-redux";

export const PokemonFetchSuccess = ({ pokemon }) => {
    const dispatch = useDispatch();

    return (
        <List>
            {pokemon.results.map((p) => (
                <ListItem
                    key={p.url.split('/')[6]}
                    id={p.url}
                >
                    <Tile
                        name={p.name}
                        img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.url.split('/')[6]}.png`}
                    />
                    <TileButton
                    >
                        <StyledLink to={`pokemony/${p.url.split('/')[6]}`}>Dowiedz się więcęj!</StyledLink>
                    </TileButton>
                </ListItem>
            ))}
        </List>
    );
};