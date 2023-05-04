import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SinglePokemonFetchLoading } from "./SinglePokemonFetchLoading";
import { SinglePokemonFetchSuccess } from "./SinglePokemonFetchSuccess";
import { fetchSinglePokemonStateLoading } from "./singlePokemonSlice";
import { FetchError } from "../../../common/FetchErorr";

export const PokemonPage = ({ pokemonState, pokemonInf }) => {
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch(fetchSinglePokemonStateLoading(params.key));
    }, [dispatch, params.key]);

    switch (pokemonState) {
        case "loading":
            return <SinglePokemonFetchLoading />
        case "error":
        case !params?.key:
            return <FetchError />
        case "success":
            return <SinglePokemonFetchSuccess 
            id={params.key} 
            name={pokemonInf.name}
            height={pokemonInf.height}
            weight={pokemonInf.weight}
            species={pokemonInf.species.name}
            />
    };
};
