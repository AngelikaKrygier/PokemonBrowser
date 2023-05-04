import { ErrorWrapper, Message, StyledError} from "./styled";

export const FetchError = () => (
    <ErrorWrapper>
        <Message>
            Coś poszło nie tak :( <br />
            Sprawdź proszę połączenie z internetem!
        </Message>
        <StyledError/>
    </ErrorWrapper>
);