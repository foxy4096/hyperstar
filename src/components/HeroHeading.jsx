/* eslint-disable react/prop-types */
import { Center, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const getDay = (n) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[n];
};
const getMonth = (n) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[n];
};

function HeroHeading({style}) {
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    setInterval(() => setClock(new Date()), 1000);

    return () => {
      clearInterval(setClock);
    };
  }, []);
  return (
    <>
      <Center mb={1} color={style.text}>
        <Heading size={"4xl"}>
          {clock.getHours()}:{clock.getMinutes().toString().padStart(2, "0")}
        </Heading>
      </Center>
      <Center my={4}>
        <Text fontSize={"xl"}>
          {getDay(clock.getDay())}, {clock.getDate()}{" "}
          {getMonth(clock.getMonth())}
        </Text>
      </Center>
    </>
  );
}

export default HeroHeading;
