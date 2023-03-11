import React from "react";
import styled from "styled-components";
import SearchInput from "./SearchInput";
import { useSearchUserContext } from "../context/SearchUserContext";
import UserSearched from "./UserSearched";
import { useWindowSize } from "../services/WindowSizeService";
import { useSidebarContext } from "../context/SidebarContext";

const SearchSideWindow = () => {
  const { toggleSearchSideWindow } = useSidebarContext();
  const { usersList, checkUserMatchSearch } = useSearchUserContext();
  const screenSize = useWindowSize();

  return toggleSearchSideWindow && screenSize > 765 ? (
    <SearchSideWindowWrapper
      usersList={usersList}
      screenSize={screenSize}
    >
      <div className="search-container">
        <h2 className="title">Search</h2>
        <SearchInput />
      </div>
      <div className="search-result-container">
        {usersList.length
          ? usersList.map((user) => {
              return <UserSearched user={user} key={user.id} />;
            })
          : checkUserMatchSearch()}
      </div>
    </SearchSideWindowWrapper>
  ) : (
    toggleSearchSideWindow && (
      <SearchSideWindowWrapper
        usersList={usersList}
        screenSize={screenSize}
      >
        <div className="search-result-container">
          {usersList.length
            ? usersList.map((user) => {
                return <UserSearched user={user} key={user.id} />;
              })
            : checkUserMatchSearch()}
        </div>
      </SearchSideWindowWrapper>
    )
  );
};

export default SearchSideWindow;

const SearchSideWindowWrapper = styled.div`
  width: 600px;
  height: 100vh;
  position: fixed;
  background: var(--white);
  padding: 30px 0px 20px 244px;
  border-top-right-radius: 3%;
  border-bottom-right-radius: 3%;
  z-index: 2;
  transition: all 0.5s linear;
  animation: openSearchWindow 0.5s linear;

  -webkit-box-shadow: 4px 0px 30px -4px rgba(142, 142, 142, 1);
  -moz-box-shadow: 4px 0px 30px -4px rgba(142, 142, 142, 1);
  box-shadow: 4px 0px 30px -4px rgba(142, 142, 142, 1);

  @keyframes openSearchWindow {
    from {
      opacity: 0.25;
      transform: translateX(-100%);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .search-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-bottom: 1px solid var(--grey);
    padding-bottom: 25px;
  }

  .title {
    font-weight: var(--bold);
    font-size: var(--fs_xl);
    margin-left: 25px;
    margin-bottom: 30px;
  }

  .search-result-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${(props) => props.usersList.length ? "flex-start" : "center"};
    overflow-y: auto;
    overflow-x: hidden;
    padding-top: 15px;
    padding-bottom: 96px;
    color: var(--dark_grey);
    font-weight: var(--regular);
    font-size: var(--fs_small);
  }

  @media screen and (max-width: 1220px) {
    width: 450px;
    padding: 20px 0px 20px 80px;
  }

  @media screen and (max-width: 765px) {
    width: 375px;
    height: 375px;
    display: flex;
    flex-direction: column;
    padding: 0px 0px 0px 0px;
    border-bottom-left-radius: 3%;
    border-top-right-radius: 0;
    right: 16px;

    -webkit-box-shadow: 0px 0px 30px -4px rgba(142, 142, 142, 1);
    -moz-box-shadow: 0px 0px 30px -4px rgba(142, 142, 142, 1);
    box-shadow: 0px 0px 30px -4px rgba(142, 142, 142, 1);

    @keyframes openSearchWindow {
      from {
        opacity: 0.25;
        transform: translateY(-100%);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .search-container {
      padding-top: 5px;
      border-bottom: 0px;
      padding-bottom: 0px;
      border-top: 1px solid var(--grey_transparent);
    }

    .title {
      font-size: var(--fs_large);
      margin-left: 25px;
      margin-bottom: 0px;
    }

    .search-result-container {
      padding-top: 0px;
      padding-bottom: 0px;
    }
  }

  @media screen and (max-width: 550px) {
    width: ${(props) => props.screenSize - 100 + "px"};
    min-width: 250px;
    padding: 30px 0px 0px 0px;
  }
`;
