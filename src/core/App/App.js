import { Navigation } from "../../Navigation";
import { Container } from "../../common/Container/styled";
import { Pokemon } from "../../features/pokemon/PokemonPages/Pokemon";
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from "./GlobalStyle";
import { useSelector } from 'react-redux';
import { dark, light } from "../App/theme";
import { selectThemeLightState } from "../../common/ThemeSwitch/themeSlice";
import { Footer } from "../../common/Footer";
import { MainInformation } from "../../features/mainInformation/MainInformation";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";

export const App = () => {
  const theme = useSelector(selectThemeLightState)

  return (
    <ThemeProvider theme={theme ? light : dark}>
      <HashRouter>
        <GlobalStyle />
        <Navigation />
        <Container>
          <Switch>
            <Route path="/pokemony"><Pokemon /></Route>
            <Route path="/ogolneInformacje"><MainInformation /></Route>
            <Route path="/">
              <Redirect to="/pokemony"></Redirect>
            </Route>
          </Switch>
        </Container>
        <Footer />
      </HashRouter>
    </ThemeProvider>
  );
};
