import styled from "styled-components";

export const Container = styled.main`
margin: 0 auto;
max-width: 1000px;
padding: ${({ theme }) => theme.padding.small};
background-color: ${({ theme }) => theme.container.background};
box-shadow: ${({ theme }) => theme.boxShadow.basic};
`;