import { LoadingWrapper, Message, StyledEmojiIcoan } from "./styled";

export const PokemonFetchLoading = () => (
    <LoadingWrapper>
        <StyledEmojiIcoan />
        <Message>
            Pokemony ładują się spacjelnia dla Ciebie!<br />
            Daj im chwilę, a będziesz mógł rozpocząć niezwykłą przygodę!
        </Message>
    </LoadingWrapper>
);