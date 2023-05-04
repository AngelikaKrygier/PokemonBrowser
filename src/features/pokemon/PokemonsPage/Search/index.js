import { useHistory, useLocation } from "react-router-dom";
import { Input, SearchStyled, SearchButton } from "./styled";

export const Search = () => {
    const location = useLocation();
    const history = useHistory();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("szukaj");

    const onInputChange = ({ target }) => {
        const searchParams = new URLSearchParams(location.search)

        if (target.value.trim() === "") {
            searchParams.delete("szukaj")
        } else {
            searchParams.set("szukaj", target.value)
        };

        history.push(`${location.pathname}?${searchParams.toString()}`)
    };

    return (
        <SearchStyled>
            <Input
                placeholder="Wyszukaj pokemona"
                value={query || ""}
                onChange={onInputChange}
            >
            </Input>
            <SearchButton>Wyszukaj Pokemona</SearchButton>
        </SearchStyled>
    )
};