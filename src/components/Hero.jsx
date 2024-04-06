/* eslint-disable react/prop-types */
import { AbsoluteCenter, Box } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import HeroHeading from "./HeroHeading";

function Hero() {
  return (
    <div>
      <Box>
        <AbsoluteCenter
          mt={-10}
          w={["max-content", "100vh", "100vh"]}
          p={0}
        >
          <HeroHeading />
          <SearchInput />
        </AbsoluteCenter>
      </Box>
    </div>
  );
}

export default Hero;
