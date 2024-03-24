/* eslint-disable react/prop-types */
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuList,
  Radio,
  RadioGroup,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Wrap,
} from "@chakra-ui/react";
import { FaGear } from "react-icons/fa6";
import Toggle from "./Toggle";

export const ControlPanel = ({ style, setStyle, resetStyle }) => {
  return (
    <Menu bg={style.boxesBg}>
      <MenuButton
        as={IconButton}
        icon={<FaGear />}
        variant={"ghost"}
        rounded={style.rounded}
      ></MenuButton>
      <MenuList w={600} px={6} color={style.boxesText} bg={style.boxesBg}>
        <Toggle style={style} />
        <MenuDivider />
        <FormControl>
          <FormLabel>Rounded</FormLabel>
          <Slider
            aria-label="slider-ex-1"
            defaultValue={style.rounded}
            value={style.rounded}
            onChange={(e) => setStyle({ ...style, rounded: `${e}` })}
            min={0}
            max={30}
            step={5}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <MenuDivider />
          <FormLabel>Search Bar Width</FormLabel>
          <Slider
            aria-label="slider-ex-2"
            onChange={(e) => {
              setStyle({ ...style, searchBarWidth: `${e}px` });
            }}
            defaultValue={style.searchBarWidth.substring(
              0,
              style.searchBarWidth.length - 2
            )}
            value={style.searchBarWidth.substring(
              0,
              style.searchBarWidth.length - 2
            )}
            min={350}
            max={1000}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <MenuDivider />
          <Heading size={"md"}>Base</Heading>
          <FormLabel>Background</FormLabel>
          <Input
            type="color"
            value={style.bg}
            onChange={(e) => setStyle({ ...style, bg: e.target.value })}
            variant={"flushed"}
          />
          <FormLabel>Text</FormLabel>
          <Input
            type="color"
            variant={"flushed"}
            value={style.text}
            onChange={(e) => setStyle({ ...style, text: e.target.value })}
          />
          <Heading size={"md"}>Boxes</Heading>
          <FormLabel>Background</FormLabel>
          <Input
            type="color"
            value={style.boxesBg}
            onChange={(e) => setStyle({ ...style, boxesBg: e.target.value })}
            variant={"flushed"}
          />
          <FormLabel>Text</FormLabel>
          <Input
            type="color"
            variant={"flushed"}
            value={style.boxesText}
            onChange={(e) => setStyle({ ...style, boxesText: e.target.value })}
          />
          <MenuDivider />
          <Heading size={"md"}>Button</Heading>
          <FormLabel>Background</FormLabel>
          <Input
            type="color"
            value={style.buttonBg}
            onChange={(e) => setStyle({ ...style, buttonBg: e.target.value })}
            variant={"flushed"}
          />
          <FormLabel>Text</FormLabel>
          <Input
            type="color"
            variant={"flushed"}
            value={style.buttonText}
            onChange={(e) => setStyle({ ...style, buttonText: e.target.value })}
          />
          <RadioGroup
            onChange={(e) => setStyle({ ...style, buttonVarient: e })}
            value={style.buttonVarient}
          >
            <Wrap>
              <Radio value="solid">Solid</Radio>
              <Radio value="outline">Outline</Radio>
              <Radio value="ghost">Ghost</Radio>
              <Radio value="link">Link</Radio>
            </Wrap>
          </RadioGroup>
        </FormControl>
        <MenuDivider />
        <Button onClick={resetStyle}>Reset</Button>
      </MenuList>
    </Menu>
  );
};
