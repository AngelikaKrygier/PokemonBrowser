import styled, { css } from "styled-components";
import { ReactComponent as Icon } from "./sun.svg";

export const Button = styled.button`
display: flex;
gap: 10px;
align-items: center;
background: transparent;
border: none;
`;

export const Text = styled.span`
font-size: 15px;
margin: 0;
color: ${({ theme }) => theme.button.font};
`;

export const Box = styled.span`
width: 40px;
display: flex;
justify-content: flex-start;
background-color: ${({ theme }) => theme.button.background};
border: 1px solid ${({ theme }) => theme.button.border};
border-radius: 25%;
margin: 0px;
`;

export const IconWrapper = styled.span`
display: flex;
justify-content: center;
align-items: center;
width: 18px;
height: 18px;
border-radius: 100%;
background-color: white;

${({ moveToRight }) => moveToRight && css`
transform: translateX(20px)`};
transition: 0.5s;
`;

export const StyledIcon = styled(Icon)`

`;

