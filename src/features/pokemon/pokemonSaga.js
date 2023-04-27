import { put, takeLatest, call, delay } from "redux-saga/effects";
import { fetchPokemonError, fetchPokemonLoading, fetchPokemonSuccess } from "./pokemonSlice";
import { getPokemonInf } from "./getPokemonInf";

const DELAY_ACTION = 3000;

function* watchFetchPokemonHandler() {
    try {
        yield delay(DELAY_ACTION);
        const pokemon = yield call(getPokemonInf);
        yield put(fetchPokemonSuccess(pokemon));
    } catch (error) {
        yield put(fetchPokemonError());
    };
};

export function* watchFetchPortfolio() {
    yield takeLatest(fetchPokemonLoading.type, watchFetchPokemonHandler)
};