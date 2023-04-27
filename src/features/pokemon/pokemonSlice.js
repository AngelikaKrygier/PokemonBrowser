import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: {
        pokemon: null,
        pokemonState: "loading",
    },
    reducers: {
        fetchPokemonLoading: () => ({
            pokemonState: "loading",
            pokemon: null,
        }),
        fetchPokemonError: () => ({
            pokemonState: "error",
            pokemon: null,
        }),
        fetchPokemonSuccess: (_, { payload: pokemon }) => ({
            pokemonState: "success",
            pokemon,
        }),
    },
});

export const { fetchPokemonLoading, fetchPokemonError, fetchPokemonSuccess } = pokemonSlice.actions;
export const selectPokemonSlice = (state) => state.pokemon;
export const selectPokemon = (state) => selectPokemonSlice(state).pokemon;
export const selectPokemonState = (state) => selectPokemonSlice(state).pokemonState;
export default pokemonSlice.reducer;