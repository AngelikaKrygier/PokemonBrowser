import styled from "styled-components";
import { ReactComponent as ErrorIcon } from "./Error.svg";

export const ErrorWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 20px;
`;

export const Message = styled.p`
text-align: center;
padding: ${({ theme }) => theme.padding.small};
`;

export const StyledError = styled(ErrorIcon)`
max-width:200px;
`;
