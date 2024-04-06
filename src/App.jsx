import { Box, ChakraProvider } from "@chakra-ui/react";

import Hero from "./components/Hero";
import theme from "./theme/theme";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box h={"100vh"}>
        <Navbar />
        <Hero />
      </Box>
    </ChakraProvider>
  );
}

export default App;
