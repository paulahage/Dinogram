import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as FiIcons from "react-icons/fi";


const SearchInput = () => {
  const [mySearch, setMySearch] = useState("");

  const handleSearch = (e) => {
    setMySearch(e.target.value);
    console.log('search',mySearch);
  }

  const handleSubmitSearch = (e) => {
    e.prevent.Default();
    setMySearch("");
  }

  return (
    <SearchInputWrapper>
      <FiIcons.FiSearch className="search-icon-input" />
      <form onSubmit={handleSubmitSearch}>
        <input
          className="search-area"
          placeholder="Search"
          value={mySearch}
          onChange={handleSearch}
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
    background-color: var(--search_input);
    margin-left: 10px;
    outline:none;
  }
`;
