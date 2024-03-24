/* eslint-disable react/prop-types */
import {
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Link,
  Spacer,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { ControlPanel } from "./ControlPanel";

function Navbar({ setStyle, style, resetStyle }) {
  return (
    <>
      <Flex p={2} bg={style.bg} color={style.text}>
        <Link href="https://github.com/foxy4096/hyperstar" isExternal>
          <IconButton
            aria-label="github"
            icon={<FaGithub />}
            size="lg"
            rounded={style.rounded}
          />
        </Link>
        <Spacer />
        <Button rounded={style.rounded} size={"lg"} fontSize={"xl"}>
          <Link
            isExternal
            href="https://hyperstar.vercel.app"
            _hover={{ textDecor: "none" }}
          >
            <span style={{ color: "#5AB4CB" }}>Hyper</span>
            <span style={{ color: "#EFCB66" }}>Star</span> 🌠
          </Link>
        </Button>
        <Spacer />
        <ButtonGroup>
          <ControlPanel
            style={style}
            setStyle={setStyle}
            resetStyle={resetStyle}
          />
        </ButtonGroup>
      </Flex>
    </>
  );
}

export default Navbar;
