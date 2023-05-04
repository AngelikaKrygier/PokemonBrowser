import { createSlice } from "@reduxjs/toolkit";

const singlePokemonSlice = createSlice({
    name: "singlePokemon",
    initialState: {
        singlePokemonState: "loading",
        singlePokemon: null,
    },
    reducers: {
        fetchSinglePokemonStateLoading: () => ({
            singlePokemonState: "loading",
        }),
        fetchSinglePokemonStateError: () => ({
            singlePokemonState: "error",
        }),
        fetchSinglePokemonStateSuccess: (_, { payload: singlePokemon }) => ({
            singlePokemonState: "success",
            singlePokemon,
        }),
    },
});

export const {
    fetchSinglePokemonStateLoading,
    fetchSinglePokemonStateError,
    fetchSinglePokemonStateSuccess
} = singlePokemonSlice.actions;
export const selectSinglePokemonSlice = (state) => state.singlePokemon;
export const selectSinglePokemonState = (state) => selectSinglePokemonSlice(state).singlePokemonState;
export const selectSinglePokemon = (state) => selectSinglePokemonSlice(state).singlePokemon;

export default singlePokemonSlice.reducer;

