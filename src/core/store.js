import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import themeSwitchReducers from "../common/ThemeSwitch/themeSlice";
import pokemonReducers from "../features/pokemon/pokemonSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        theme: themeSwitchReducers,
        pokemon: pokemonReducers,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);