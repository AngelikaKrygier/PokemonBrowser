import { useDispatch, useSelector } from "react-redux";
import { Search } from "../Search";
import { Header } from "./styled";
import { PokemonList } from "../PokemonList";
import { fetchPokemonLoading, selectPokemon, selectPokemonState } from "../pokemonSlice";
import { useEffect } from "react";

export const Pokemon = () => {
    const dispatch = useDispatch();
    const pokemonState = useSelector(selectPokemonState);
    const pokemon = useSelector(selectPokemon);

    useEffect(() => {
        dispatch(fetchPokemonLoading())
    }, []);

    return (
        <>
            <Search></Search>
            <Header>Lista pokemonów</Header>
            <PokemonList
                pokemonState={pokemonState}
                pokemon={pokemon}
            />
        </>
    );
};