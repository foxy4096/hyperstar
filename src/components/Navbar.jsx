/* eslint-disable react/prop-types */
import {
  Avatar,
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Link,
  Spacer,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import Toggle from "./Toggle";

function Navbar() {
  return (
    <>
      <Flex p={2}>
        <Link href="https://github.com/foxy4096/hyperstar" isExternal>
          <IconButton
            aria-label="github"
            icon={<FaGithub />}
            size="lg"
            rounded="full"
          />
        </Link>
        <Spacer />
        <Link
          isExternal
          href="https://hyperstar.vercel.app"
          _hover={{ textDecor: "none" }}
        >
          <Button rounded="full" size={"lg"} fontSize={"xl"} hideBelow={"sm"}>
            <span style={{ color: "#5AB4CB" }}>Hyper</span>
            <span style={{ color: "#EFCB66" }}>Star</span> 🌠
          </Button>
          <Button
            size={"lg"}
            variant={'plain'}
            fontSize={"xl"}
            hideFrom={"sm"}
          >
            <Avatar size=";g" name="Icon" borderRadius={10} src="favicon.ico" />
          </Button>
        </Link>
        <Spacer />
        <ButtonGroup>
          <Toggle />
        </ButtonGroup>
      </Flex>
    </>
  );
}

export default Navbar;
