import { AbsoluteCenter, Box } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import HeroHeading from "./HeroHeading";

function Hero() {
  return (
    <div>
      <Box mb={6}>
        <AbsoluteCenter>
          <HeroHeading />
          <SearchInput />
        </AbsoluteCenter>
      </Box>
    </div>
  );
}

export default Hero;
