import styled from "styled-components";

export const FeatureTable = styled.table`
border-collapse: collapse;
margin: 0 auto;
`;

export const TableHeader = styled.th`
border: 1px solid;
padding: 10px;
background-color: ${({theme})=>theme.table.headerBackground};
color: ${({theme})=>theme.table.headerFont};
font-weight: 500;
`;

export const TableData = styled.td`
border: 1px solid;
padding: 10px;
text-align: center;
background-color: transparent;
color: ${({theme})=>theme.table.dataFont};
font-weight: 600;
`;