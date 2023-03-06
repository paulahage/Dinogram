import React, { useEffect } from "react";
import styled from "styled-components";
import SearchInput from "./SearchInput";
import { useSearchUserContext } from "../context/SearchUserContext";
import UserSearched from "./UserSearched";
import { useWindowSize } from "../services/WindowSizeService";

const SearchSideWindow = ({ open }) => {
  const sidebarIsOpen = open;
  const { usersList, setIsInputFocused, mySearch } = useSearchUserContext();
  const screenSize = useWindowSize();

  useEffect(() => {
    setIsInputFocused(true);
    //eslint-disable-next-line
  }, []);

  return screenSize > 765 ? (
    <SearchSideWindowWrapper
      sidebarIsOpen={sidebarIsOpen}
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
          : "No recent searches."}
      </div>
    </SearchSideWindowWrapper>
  ) : (
    <SearchSideWindowWrapper
      sidebarIsOpen={sidebarIsOpen}
      usersList={usersList}
      screenSize={screenSize}
    >
      {mySearch ? (
        ""
      ) : (
        <div className="search-container">
          <h2 className="title">Recent</h2>
        </div>
      )}
      <div className="search-result-container">
        {usersList.length
          ? usersList.map((user) => {
              return <UserSearched user={user} key={user.id} />;
            })
          : "No recent searches."}
      </div>
    </SearchSideWindowWrapper>
  );
};

export default SearchSideWindow;

const SearchSideWindowWrapper = styled.div`
  width: 600px;
  height: 100vh;
  position: fixed;
  text-align: center;
  background: var(--white);
  padding: 30px 0px 20px 244px;
  border-top-right-radius: 3%;
  border-bottom-right-radius: 3%;
  z-index: 2;
  transition: 1s;
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
      transform: 0;
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
    justify-content: ${(props) =>
      props.usersList.length ? "flex-start" : "center"};
    overflow-y: auto;
    overflow-x: hidden;
    padding-top: 15px;
    padding-bottom: 100px;
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
    padding: 60px 0px 0px 0px;
    border-bottom-left-radius: 3%;
    right: 10px;

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
      margin-bottom: 30px;
    }

    .search-result-container {
      padding-top: 0px;
      padding-bottom: 0px;
    }
  }

  @media screen and (max-width: 550px) {
    width: ${(props) => props.screenSize - 100 + "px"};
    min-width: 250px;
    padding: 90px 0px 0px 0px;
  }
`;
