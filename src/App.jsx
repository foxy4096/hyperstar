import { Box, ChakraProvider, useColorMode } from "@chakra-ui/react";

import Hero from "./components/Hero";
import theme from "./theme/theme";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

function App() {
  const { colorMode } = useColorMode();

  const baseStyle = {
    rounded: "30",
    bg: colorMode === "light" ? "gray.100" : "#151515",
    text: colorMode === "light" ? "black" : "white",
    boxesBg: colorMode === "light" ? "white" : "black",
    boxesText: colorMode === "light" ? "black" : "white",
    searchBarWidth: "350px",
    buttonVarient: "solid",
  };
  const [style, setStyle] = useState(
    JSON.parse(localStorage.getItem("style")) || baseStyle
  );
  const resetStyle = () => {
    setStyle(baseStyle);
    localStorage.setItem("style", JSON.stringify(baseStyle));
  };
  useEffect(() => {
    localStorage.setItem("style", JSON.stringify(style));
  }, [style]);

  return (
    <ChakraProvider theme={theme}>
      <Box h={"100vh"} bg={style.bg} color={style.text}>
        <Navbar setStyle={setStyle} style={style} resetStyle={resetStyle} />
        <Hero style={style} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
