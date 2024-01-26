import { Center, Heading } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import { useEffect, useState } from "react";

function Hero() {
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    setInterval(() => setClock(new Date()), 1000);

    return () => {
      clearInterval(setClock);
    };
  }, []);

  return (
    <div>
      <Center>
        <Heading size={"4xl"} mb={2}>
          {clock.getHours()}:{clock.getMinutes()}
        </Heading>
      </Center>
      <SearchInput />
    </div>
  );
}

export default Hero;
