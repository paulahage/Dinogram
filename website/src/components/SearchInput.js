import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import * as FiIcons from "react-icons/fi";
import * as RiIcons from "react-icons/ri";
import { useSidebarContext } from "../context/SidebarContext";
import { useSearchUserContext } from "../context/SearchUserContext";
import { useWindowSize } from "../services/WindowSizeService";

const SearchInput = () => {
  const {
    mySearch,
    setMySearch,
    loadingSearch,
    setIsInputFocused,
    isInputFocused,
  } = useSearchUserContext();
  const { toggleSearchSideWindow, setToggleSearchSideWindow } = useSidebarContext();
  const screenSize = useWindowSize();
  const searchValue = useRef("");
  const form = useRef();

  const isSearchSideWindowOpen = toggleSearchSideWindow;

  const handleSubmitSearch = (e) => {
    e.prevent.Default();
  };

  const handleSearch = () => {
    setMySearch(searchValue.current.value);
  };

  const enableSearch = () => {
    setIsInputFocused(true);
    setToggleSearchSideWindow(true);
  }

  const clearInput = () => {
    setMySearch("");
    setIsInputFocused(false);

    if (screenSize < 765) {
      setToggleSearchSideWindow(false);
    }
  };

  useEffect(() => {
    if (isSearchSideWindowOpen) {
      searchValue.current.focus();
    }
    setIsInputFocused(false);

    //eslint-disable-next-line
  }, []);

  return (
    <SearchInputWrapper
      isSearchSideWindowOpen={isSearchSideWindowOpen}
      loadingSearch={loadingSearch}
      isFocused={isInputFocused}
    >
      <FiIcons.FiSearch className="search-icon-input" />
      <form onSubmit={handleSubmitSearch} ref={form}>
        <input
          className="search-area"
          placeholder="Search"
          ref={searchValue}
          value={mySearch}
          onChange={handleSearch}
          onBlur={() => setIsInputFocused(false)}
          onClick={enableSearch}
        />
      </form>
      <div className="handle-icons" onClick={clearInput}>
        <RiIcons.RiCloseCircleFill className="close-icon-input" />
        <img
          className="loading-icon"
          src="../loading-1s-200px.gif"
          alt="loading icon"
        />
      </div>
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
  justify-content: space-between;
  margin-left: ${(props) => (props.isSearchWindowOpen ? "25px" : "15px")};

  .search-icon-input {
    font-size: 16px;
    color: var(--dark_grey);
    margin-left: 10px;
    display: ${(props) => (props.isFocused ? "none" : "block")};
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

  .handle-icons {
    width: 38px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loading-icon {
    width: 38px;
    display: ${(props) => (props.loadingSearch ? "block" : "none")};
  }

  .close-icon-input {
    width: 38px;
    color: var(--dark_grey);
    cursor: pointer;
    display: ${(props) => (props.isFocused ? "block" : "none")};
  }
`;
