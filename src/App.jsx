import { ChakraProvider, Container } from "@chakra-ui/react";

import Hero from "./components/Hero";
import theme from "./theme/theme";

function App() {
  theme
  return (
    <ChakraProvider theme={theme}>
      <Container mt={"10em"}>
        <Hero />
      </Container>
    </ChakraProvider>
  );
}

export default App;
