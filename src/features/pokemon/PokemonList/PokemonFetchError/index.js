import { ErrorWrapper, Message, StyledIconDanger } from "./styled";

export const PokemonFetchError = () => (
    <ErrorWrapper>
        <StyledIconDanger />
        <Message>
            Coś poszło nie tak :( <br />
            Sprawdź proszę połączenie z internetem
        </Message>
    </ErrorWrapper>
);