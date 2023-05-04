import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-gap: 20px;
`;

export const FeatureTable = styled.table`
border-collapse: collapse;
margin: 20px auto;
`;

export const TableHeader = styled.th`
border: 1px solid ${({ theme }) => theme.table.border};
padding: ${({ theme }) => theme.padding.small};
background-color: ${({ theme }) => theme.table.headerBackground};
color: ${({ theme }) => theme.table.headerFont};
font-weight: 500;
`;

export const TableData = styled.td`
border: 1px solid;
text-align: center;
padding: ${({ theme }) => theme.padding.small};
background-color: ${({ theme }) => theme.table.dataBackground}; 
color: ${({ theme }) => theme.table.dataFont};
font-weight: 600;
`;

export const Button = styled.button`
max-width: 150px;
color: ${({ theme }) => theme.Button.fontColor};
background-color: ${({ theme }) => theme.Button.background};
border: none;
padding: 10px;
cursor: pointer;
transition: 0.3s;

&:hover {
    background-color: ${({ theme }) => theme.tile.hoverButton};
};
`;

export const StyledLink = styled(Link)`
color: ${({ theme }) => theme.tile.buttonFontColor};
text-decoration: none;
justify-self: center;
`;