import { Box, ChakraProvider } from "@chakra-ui/react";

import Hero from "./components/Hero";
import theme from "./theme/theme";
import Navbar from "./components/Navbar";
import { Suspense } from "react";
import Loading from "./components/Loading";

function App() {
  theme;
  return (
    <Suspense fallback={<Loading />}>
      <ChakraProvider theme={theme}>
        <Box h={"100vh"}>
          <Navbar />
          <Hero />
        </Box>
      </ChakraProvider>
    </Suspense>
  );
}

export default App;
