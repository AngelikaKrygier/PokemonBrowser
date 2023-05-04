import styled from "styled-components";
import { ReactComponent as EmojiIcon } from "../../../images/Emot.svg"

export const LoadingWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
`;

export const Message = styled.p`
text-align: center;
color: ${({ theme }) => theme.baseColorFont};
`;

export const StyledEmojiIcoan = styled(EmojiIcon)`
width: 150px;
`;

