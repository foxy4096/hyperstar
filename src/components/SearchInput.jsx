import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
function SearchInput() {
  return (
    <InputGroup size={"lg"}>
      <Input placeholder="Search the web" />
      <InputRightElement>
        <IconButton icon={<FaSearch />} variant={'ghost'} />
      </InputRightElement>
    </InputGroup>
  );
}

export default SearchInput;
