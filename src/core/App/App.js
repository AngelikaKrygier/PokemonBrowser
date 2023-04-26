import { Navigation } from "../../Navigation";
import { Container } from "../../common/Container";
import { Pokemon } from "../../features/pokemon/Pokemon";

export const App = () => (
  <Container>
    <Navigation />
    <Pokemon />
  </Container>
);
