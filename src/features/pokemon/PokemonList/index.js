import { PokemonFetchError } from "./PokemonFetchError";
import { PokemonFetchLoading } from "./PokemonFetchLoading";
import { PokemonFetchSuccess } from "./PokemonFetchSuccess";

export const PokemonList = ({ pokemonState, pokemon }) => {

    switch (pokemonState) {
        case "loading":
            return <PokemonFetchLoading />
        case "error":
            return <PokemonFetchError />
        case "success":
            return <PokemonFetchSuccess pokemon={pokemon}/>
    };
};