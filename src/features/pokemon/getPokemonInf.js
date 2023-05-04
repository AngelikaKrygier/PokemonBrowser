const URL_API = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

export const getPokemonInf = async () => {
    const response = await fetch(URL_API)

    if (!response.ok) {
        throw new Error(response.statusText)
    };

    return await response.json();
};

export const getSinglePokemonInf = async (pokemonKey) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonKey}`)

    if (!response.ok) {
        throw new Error(response.statusText);
    };

    return await response.json();
};