import { List, ListItem, TileButton, StyledLink } from "./styled";
import { Tile } from "../../../../../common/Tile"
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPokemon, selectPokemonByQuery } from "../../pokemonSlice";

export const PokemonFetchSuccess = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("szukaj");
    const pokemons = useSelector(state => selectPokemonByQuery(state, query));

    return (
        <List>
            {pokemons.map((p) => (
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
            ))};
        </List>
    );
};