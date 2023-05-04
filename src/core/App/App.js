import { Navigation } from "../../Navigation";
import { Container } from "../../common/Container/styled";
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from "./GlobalStyle";
import { useSelector } from 'react-redux';
import { dark, light } from "../App/theme";
import { selectThemeLightState } from "../../common/ThemeSwitch/themeSlice";
import { Footer } from "../../common/Footer";
import { MainInformation } from "../../features/mainInformation/MainInformation";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { PokemonPage } from "../../features/pokemon/PokemonPage";
import { PokemonsPage } from "../../features/pokemon/PokemonsPage";
import { selectSinglePokemonState } from "../../features/pokemon/PokemonPage/singlePokemonSlice";
import { selectSinglePokemon } from "../../features/pokemon/PokemonPage/singlePokemonSlice";

export const App = () => {
  const theme = useSelector(selectThemeLightState);
  const singlePokemonState = useSelector(selectSinglePokemonState);
  const singlePokemonInf = useSelector(selectSinglePokemon);

  return (
    <ThemeProvider theme={theme ? light : dark}>
      <HashRouter>
        <GlobalStyle />
        <Navigation />
        <Container>
          <Switch>
            <Route path="/pokemony/:key">
              <PokemonPage
                pokemonState={singlePokemonState}
                pokemonInf={singlePokemonInf}
              >
              </PokemonPage>
            </Route>
            <Route path="/pokemony"><PokemonsPage /></Route>
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
