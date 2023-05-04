import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: {
        pokemon: [],
        pokemonState: "loading",
    },
    reducers: {
        fetchPokemonLoading: () => ({
            pokemonState: "loading",
        }),
        fetchPokemonError: () => ({
            pokemonState: "error",
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

export const selectPokemonByQuery = (state, query) => {
    const pokemons = selectPokemon(state).results;

    if (!query || query.trim() === "") {
        return pokemons;
    }
    return pokemons.filter(({ name }) =>
        name.toUpperCase().includes(query.trim().toUpperCase()));
};
export default pokemonSlice.reducer;