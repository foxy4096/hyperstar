/* eslint-disable react/prop-types */
import { AbsoluteCenter, Box } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import HeroHeading from "./HeroHeading";

function Hero({style}) {
  return (
    <div>
      <Box>
        <AbsoluteCenter mt={-10} w={style.searchBarWidth}>
          <HeroHeading style={style} />
          <SearchInput style={style}/>
        </AbsoluteCenter>
      </Box>
    </div>
  );
}

export default Hero;
