import { fetchSinglePokemonStateError, fetchSinglePokemonStateLoading } from "./singlePokemonSlice";
import { getSinglePokemonInf } from "../getPokemonInf";
import { fetchSinglePokemonStateSuccess } from "./singlePokemonSlice";
import { all, call, delay, put, takeLatest } from "redux-saga/effects";

const DELAY_ACTION = 1000;

function* watchFetchSinglePokemonHandler({ payload: pokemonKey }) {
    try {
        yield delay(DELAY_ACTION);
        const singlePokemon = yield call(getSinglePokemonInf, pokemonKey);
        yield put(fetchSinglePokemonStateSuccess(singlePokemon));
    } catch (error) {
        yield call(fetchSinglePokemonStateError);
    };
};

export function* watchFetchSinglePokemon() {
    yield takeLatest(fetchSinglePokemonStateLoading.type, watchFetchSinglePokemonHandler)
};