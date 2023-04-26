import { ThemeSwitch } from "../common/ThemeSwitch";
import { Nav, List, ListItem } from "./styled";

export const Navigation = () => (
    <Nav>
        <List>
            <ListItem>Ogólne informacje</ListItem>
            <ListItem>Pokemony</ListItem>
        </List>
        <ThemeSwitch />
    </Nav>
);