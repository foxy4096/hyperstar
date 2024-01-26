import { Button, Flex, IconButton, Link, Spacer } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import Toggle from "./Toggle";

function Navbar() {
  return (
    <>
      <Flex p={2}>
        <IconButton rounded={"full"}>
          <Link
            icon={<FaGithub />}
            href="https://github.com/foxy4096/hyperstar"
          >
            <FaGithub />
          </Link>
        </IconButton>
        <Spacer />
        <Button rounded={"full"} size={"lg"} fontSize={"xl"}>
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
        <Toggle />
      </Flex>
    </>
  );
}

export default Navbar;
