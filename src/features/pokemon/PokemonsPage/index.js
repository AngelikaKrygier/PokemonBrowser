import { useDispatch, useSelector } from "react-redux";
import { Search } from "./Search";
import { Header } from "./styled";
import { PokemonList } from "./PokemonList";
import { fetchPokemonLoading, selectPokemonState } from "../PokemonsPage/pokemonSlice";
import { useEffect } from "react";

export const PokemonsPage = () => {
    const dispatch = useDispatch();
    const pokemonState = useSelector(selectPokemonState);

    useEffect(() => {
        dispatch(fetchPokemonLoading())
    }, []);

    return (
        <>
            <Search></Search>
            <Header>Lista pokemonów</Header>
            <PokemonList
                pokemonState={pokemonState}
            />
        </>
    );
};