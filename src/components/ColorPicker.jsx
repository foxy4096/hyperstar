/* eslint-disable react/prop-types */
import {
  Button,
  Center,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  SimpleGrid,
} from "@chakra-ui/react";

const colors = [
  "gray.500",
  "red.500",
  "gray.600",
  "green.500",
  "blue.500",
  "blue.800",
  "yellow.500",
  "orange.500",
  "purple.500",
  "pink.500",
];
export const ColorPicker = ({ value, onChange }) => {
  return (
    <Popover variant="picker">
      <PopoverTrigger>
        <Button
          aria-label={value}
          background={value}
          height="22px"
          width="22px"
          padding={0}
          minWidth="unset"
          borderRadius={3}
        ></Button>
      </PopoverTrigger>
      <PopoverContent width="170px">
        <PopoverArrow bg={value} />
        <PopoverCloseButton value="white" />
        <PopoverHeader
          height="100px"
          backgroundvalue={value}
          borderTopLeftRadius={5}
          borderTopRightRadius={5}
          value="white"
        >
          <Center height="100%">{value}</Center>
        </PopoverHeader>
        <PopoverBody>
          <SimpleGrid columns={5} spacing={2}>
            {colors.map((c) => (
              <Button
                key={c}
                aria-label={c}
                background={c}
                height="22px"
                width="22px"
                padding={0}
                minWidth="unset"
                borderRadius={3}
                _hover={{ background: c }}
                onClick={(c) => onChange(c)}
              ></Button>
            ))}
          </SimpleGrid>
          <Input
            borderRadius={3}
            marginTop={3}
            placeholder="red.100"
            size="sm"
            value={value}
            onChange={onChange}
          />
          <Input
            borderRadius={3}
            marginTop={3}
            placeholder="red.100"
            size="sm"
            type="color"
            value={value}
            variant={"flushed"}
            onChange={onChange}
          />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
