import styled from "styled-components";
import { ReactComponent as IconDanger } from "../../images/Danger.svg"

export const ErrorWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 20px;
`;

export const Message = styled.p`
text-align: center;
padding: 20px;
`;

export const StyledIconDanger = styled(IconDanger)`
`;