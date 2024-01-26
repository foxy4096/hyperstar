import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FaSearch, FaWikipediaW } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsBing } from "react-icons/bs";
import DuckDuckGoIcon from "./icons/DuckDuckGoIcon";
import { useEffect, useState } from "react";

const searchProviders = [
  {
    name: "Google",
    icon: <FcGoogle />,
    searchUrl: "https://www.google.com/search?q=",
    query: "q",
  },
  {
    name: "Bing",
    icon: <BsBing color="#469ad4" />,
    searchUrl: "https://www.bing.com/search?q=",
    query: "q",
  },
  {
    name: "DuckDuckGo",
    icon: <DuckDuckGoIcon />,
    searchUrl: "https://duckduckgo.com/?q=",
    query: "q",
  },
  {
    name: "Wikipedia",
    icon: <FaWikipediaW />,
    searchUrl: "https://en.wikipedia.org/wiki/Special:Search?go=Go&ns0=1",
    query: "search",
  },
];

const style = {
  rounded: "full",
};

function SearchInput() {
  const savedProvider =
    localStorage.getItem("searchProvider") || searchProviders[0].name;

  const [selectedSearchProvider, setSelectedSearchProvider] = useState(
    searchProviders.find((p) => p.name === savedProvider)
  );

  useEffect(() => {
    localStorage.setItem("searchProvider", selectedSearchProvider.name);
  }, [selectedSearchProvider]);

  return (
    <form action={selectedSearchProvider.searchUrl}>
      <InputGroup size={"lg"}>
        <InputLeftElement>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={selectedSearchProvider.icon}
              rounded={style.rounded}
              variant={"ghost"}
            ></MenuButton>
            <MenuList>
              {searchProviders.map((searchProvider) => (
                <MenuItem
                  key={searchProvider.name}
                  icon={searchProvider.icon}
                  onClick={() => setSelectedSearchProvider(searchProvider)}
                >
                  {searchProvider.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </InputLeftElement>
        <Input
          autoFocus
          isRequired={true}
          rounded={style.rounded}
          placeholder="Search the web"
          type="search"
          name={selectedSearchProvider.query}
        />
        <InputRightElement>
          <IconButton
            icon={<FaSearch />}
            rounded={style.rounded}
            variant={"ghost"}
            type="submit"
          />
        </InputRightElement>
      </InputGroup>
    </form>
  );
}

export default SearchInput;
