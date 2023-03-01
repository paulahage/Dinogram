import React, {  useState } from "react";
import styled from "styled-components";
import * as FiIcons from "react-icons/fi";

const SearchInput = () => {
  const [mySearch, setMySearch] = useState("");

  const handleSubmitSearch = (e) => {
    e.prevent.Default();
    setMySearch("");
  };

  return (
    <SearchInputWrapper>
      <FiIcons.FiSearch className="search-icon-input" />
      <form onSubmit={handleSubmitSearch}>
        <input
          className="search-area"
          placeholder="Search"
          value={mySearch}
          onChange={(e) => setMySearch(e.target.value)}
        ></input>
      </form>
    </SearchInputWrapper>
  );
};

export default SearchInput;

const SearchInputWrapper = styled.div`
  width: 260px;
  height: 30px;
  background-color: var(--search_input);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 15px;

  .search-icon-input {
    font-size: 16px;
    color: var(--dark_grey);
    margin-left: 10px;
  }

  .search-area {
    width: 100%;
    font-family: "Poppins", sans-serif;
    font-size: var(--fs_regular);
    font-weight: var(--light);
    color: var(--dark_grey);
    background: transparent;
    margin-left: 10px;
    outline: none;
  }
`;
