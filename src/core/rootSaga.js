import { watchFetchPokemon } from "../features/pokemon/PokemonsPage/pokemonSaga";
import { all } from "redux-saga/effects";
import { watchFetchSinglePokemon } from "../features/pokemon/PokemonPage/singlePokemonSaga";

export default function* rootSaga() {
    yield all([
        watchFetchPokemon(),
        watchFetchSinglePokemon(),
    ]);
};