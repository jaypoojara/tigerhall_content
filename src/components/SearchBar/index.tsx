import { SearchBarProps } from "./type";
import { Input, InputContainer } from "./style";
import SearchIcon from "../../assets/Icons/SearchIcon.svg";

const SearchBar = ({ onChange }: SearchBarProps) => {
  return (
    <InputContainer>
      <img src={SearchIcon} alt="SearchIcon" />
      <Input data-testid="searchInput" onChange={(e) => onChange(e.target.value)} />
    </InputContainer>
  );
};

export default SearchBar;
