import styled from "styled-components";

export const FeatureTable = styled.table`
border-collapse: collapse;
margin: 20px auto;
`;

export const TableHeader = styled.th`
border: 1px solid;
padding: 15px;
background-color: ${({theme})=>theme.table.headerBackground};
color: ${({theme})=>theme.table.headerFont};
font-weight: 500;
`;

export const TableData = styled.td`
border: 1px solid;
text-align: center;
padding: 15px;
background-color: ${({theme})=>theme.table.dataBackground}; 
color: ${({theme})=>theme.table.dataFont};
font-weight: 600;
`;