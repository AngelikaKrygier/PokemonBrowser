import { useDispatch } from "react-redux";
import { Button } from "./styled";
import { toggleTheme } from "./themeSlice";

export const ThemeSwitch = () => {
    const dispatch = useDispatch();

    return (
        <Button
            onClick={() => dispatch(toggleTheme())}
        >Zmień motyw
        </Button>
    );
};