import { Navigation } from "../../Navigation";
import { Container } from "../../common/Container/styled";
import { Pokemon } from "../../features/pokemon/Pokemon";
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from "./GlobalStyle";
import { useSelector } from 'react-redux';
import { dark, light } from "../App/theme";
import { selectThemeLightState } from "../../common/ThemeSwitch/themeSlice";
import { Footer } from "../../common/Footer";

export const App = () => {
  const theme = useSelector(selectThemeLightState)

  return (
    <ThemeProvider theme={theme ? light : dark}>
      <GlobalStyle />
      <Navigation />
      <Container>
        <Pokemon />
      </Container>
      <Footer />
    </ThemeProvider>
  );
};
