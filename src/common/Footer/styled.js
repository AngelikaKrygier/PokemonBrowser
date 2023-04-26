import styled from "styled-components";

export const StyledFooter = styled.footer`
display: grid;
grid-template-columns: auto;
grid-gap: 10px;
align-items: center;
justify-content: center;
background-color: ${({ theme }) => theme.footer.background};
max-height: 100px;
height: 100%;
`;

export const FooterHeader = styled.h3`
color: ${({theme})=>theme.footer.fontColor};
font-weight: 400;
margin: 20px 0 0;
text-align: center;
`;

export const Message = styled.p`
color: ${({theme})=>theme.footer.fontColor};
margin: 0 0 20px;
padding: 0;
`;