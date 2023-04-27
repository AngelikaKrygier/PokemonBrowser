import { ThemeSwitch } from "../common/ThemeSwitch";
import { Nav, List, ListItem, StyledNavLink } from "./styled";

export const Navigation = () => (
    <Nav>
        <List>
            <ListItem>
                <StyledNavLink to="/ogolneInformacje"> Ogólne informacje</StyledNavLink>
            </ListItem>
            <ListItem>
                <StyledNavLink to="/pokemony">Pokemony</StyledNavLink>
            </ListItem>
        </List>
        <ThemeSwitch />
    </Nav>
);