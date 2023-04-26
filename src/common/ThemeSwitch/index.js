import { useDispatch, useSelector } from "react-redux";
import { Button, Text, Box, IconWrapper, StyledIcon } from "./styled";
import { selectThemeLightState, toggleTheme } from "./themeSlice";

export const ThemeSwitch = () => {
    const dispatch = useDispatch();
    const lightTheme = useSelector(selectThemeLightState);

    return (
        <Button
            onClick={() => dispatch(toggleTheme())}
        >
            <Text>zmień motyw</Text>
            <Box>
                <IconWrapper moveToRight={lightTheme}>
                    <StyledIcon />
                </IconWrapper>
            </Box>
        </Button>
    );
};