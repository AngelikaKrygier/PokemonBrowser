import styled from "styled-components";

export const StyledFooter = styled.footer`
display: grid;
grid-template-columns: auto;
grid-gap: 5px;
align-items: center;
justify-content: center;
background-color: ${({ theme }) => theme.footer.background};
max-height: 100px;
height: 100%;
`;

export const FooterHeader = styled.h3`
color: ${({ theme }) => theme.footer.fontColor};
font-weight: 400;
margin: 10px 0 0;
text-align: center;
`;

export const Message = styled.p`
color: ${({ theme }) => theme.footer.fontColor};
margin: 0 0 5px 0;
padding: 0;
text-align: center;
`;