import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import * as FiIcons from "react-icons/fi";
import { useSidebarContext } from "../context/SidebarContext";
import { useSearchUserContext } from "../context/SearchUserContext";

const SearchInput = () => {
  const { setMySearch } = useSearchUserContext();
  const { toggleSearchSideWindow } = useSidebarContext();
  const isSearchWindowOpen = toggleSearchSideWindow;
  const searchValue = useRef("");

  const handleSubmitSearch = (e) => {
    e.prevent.Default();
  };

  const handleSearch = () => {
    setMySearch(searchValue.current.value);
  }

  useEffect(() => {
    if (isSearchWindowOpen) {
      searchValue.current.focus();
    }
    //eslint-disable-next-line
  }, [])

  return (
    <SearchInputWrapper isSearchWindowOpen={isSearchWindowOpen}>
      <FiIcons.FiSearch className="search-icon-input" />
      <form onSubmit={handleSubmitSearch}>
        <input
          className="search-area"
          placeholder="Search"
          // value={mySearch}
          ref={searchValue}
          onChange={handleSearch}
        />
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
  margin-left: ${(props) => (props.isSearchWindowOpen ? "25px" : "15px")};
  //margin-bottom: ${(props) => (props.isSearchWindowOpen ? "25px" : "0px")};



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
