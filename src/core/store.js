import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import themeSwitchReducers from "../common/ThemeSwitch/themeSlice";
import pokemonReducers from "../features/pokemon/PokemonsPage/pokemonSlice";
import rootSaga from "./rootSaga";
import singlePokemonReducers from "../features/pokemon/PokemonPage/singlePokemonSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        theme: themeSwitchReducers,
        pokemon: pokemonReducers,
        singlePokemon: singlePokemonReducers,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);