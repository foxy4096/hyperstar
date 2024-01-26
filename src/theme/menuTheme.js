import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({
  button: {
    _dark: {
      bg: "#070707",
    },
    color: "gray.200",
  },
  list: {
    py: "4",
    borderRadius: "md",
    _dark: {
      bg: "#070707",
    },
  },
  item: {
    _dark: {
      bg: "#070707",
      _hover: {
        bg: "#151515",
      },
    },
  },
  groupTitle: {
    textTransform: "uppercase",
    color: "white",
    textAlign: "center",
    letterSpacing: "wider",
    opacity: "0.7",
  },
  command: {
    opacity: "0.8",
    fontFamily: "mono",
    fontSize: "sm",
    letterSpacing: "tighter",
    pl: "4",
  },
});
// export the base styles in the component theme
export const menuTheme = defineMultiStyleConfig({ baseStyle });
