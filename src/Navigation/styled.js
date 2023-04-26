import styled from "styled-components";

export const Nav = styled.div`
padding: 0 30px;
display: grid;
grid-template-columns: 1fr auto;
gap: 20px;
background-color: ${({theme})=>theme.navigation.background};
`;

export const List = styled.ul`
display: grid;
grid-template-columns: auto auto;
grid-gap: 40px;
justify-content: center;
text-align: center;
`;

export const ListItem = styled.li`
padding: 20px;
list-style: none;
cursor: pointer;
color: ${({theme})=> theme.navigation.fontColor};
`;