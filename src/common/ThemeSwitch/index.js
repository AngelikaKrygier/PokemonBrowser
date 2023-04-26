import { useDispatch, useSelector } from "react-redux";
import { ThemeButton, Text, Box, IconWrapper, StyledIcon } from "./styled";
import { selectThemeLightState, toggleTheme } from "./themeSlice";

export const ThemeSwitch = () => {
    const dispatch = useDispatch();
    const lightTheme = useSelector(selectThemeLightState);

    return (
        <ThemeButton
            onClick={() => dispatch(toggleTheme())}
        >
            <Text>zmień motyw</Text>
            <Box>
                <IconWrapper moveToRight={lightTheme}>
                    <StyledIcon />
                </IconWrapper>
            </Box>
        </ThemeButton>
    );
};