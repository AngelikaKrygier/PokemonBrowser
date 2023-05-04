import styled from "styled-components";

export const Wrapper = styled.div`
display: grid;
grid-template-columns: 1fr;
justify-content: center;
`;

export const Header = styled.h2`
padding: ${({ theme }) => theme.padding.small};
color: ${({ theme }) => theme.baseColorFont};
`;

export const Content = styled.p`
line-height: 30px;
padding: ${({ theme }) => theme.padding.small};
color: ${({ theme }) => theme.baseColorFont};
`;

export const Image = styled.img`
max-width: 500px;
justify-self: center;
border-radius: 5%;
`;
