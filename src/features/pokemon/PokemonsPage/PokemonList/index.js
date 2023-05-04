import { PokemonFetchLoading } from "./PokemonFetchLoading";
import { PokemonFetchSuccess } from "./PokemonFetchSuccess";
import { FetchError } from "../../../../common/FetchErorr";

export const PokemonList = ({ pokemonState, pokemon }) => {

    switch (pokemonState) {
        case "loading":
            return <PokemonFetchLoading />
        case "error":
            return <FetchError />
        case "success":
            return <PokemonFetchSuccess pokemon={pokemon}/>
    };
};