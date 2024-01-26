import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme(
  {
    config,
    styles: {
      global: (props) => ({
        body: {
          backgroundColor: mode("white", "black")(props),
        },
        "*::placeholder": {
          color: mode("gray.400", "whiteAlpha.400")(props),
        },
        "*, *::before, &::after": {
          borderColor: mode("gray.200", "whiteAlpha.300")(props),
          wordWrap: "break-word",
        },
      }),
    },
  },
);

export default theme;