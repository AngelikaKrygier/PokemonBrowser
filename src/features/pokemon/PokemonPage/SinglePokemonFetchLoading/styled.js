import styled from "styled-components";
import { ReactComponent as Spinner } from "../../images/Ellipse.svg";

export const LoadingWrapper = styled.div`
display: flex;
justify-content: center;
margin: 20px;
`;

export const StyledSpinner = styled(Spinner)`
animation: rotate 0.9s linear infinite;
border: 4px solid ${({ theme }) => theme.spinner.border};
border-radius: 50%;
border-right-color: ${({ theme }) => theme.spinner.animation};

@keyframes rotate {
    to {
        transform: rotate(360deg);
    };
};
`;
