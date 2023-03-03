import React from "react";
import styled from "styled-components";
import SearchInput from "./SearchInput";
import { useSearchUserContext } from "../context/SearchUserContext";
import UserSearched from "./UserSearched";

const SearchSideWindow = ({ open }) => {
  const sidebarIsOpen = open;
  const { usersList } = useSearchUserContext();

  return (
    <SearchSideWindowWrapper sidebarIsOpen={sidebarIsOpen}>
      <div className="search-container">
        <h2 className="title">Search</h2>
        <SearchInput />
      </div>
      <div className="search-result-container">
        {usersList.length ? usersList.map((user) => {
          return <UserSearched user={user} key={user.id}/>;
        })  : ""}
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
  top: 0;
  left: ${(props) => (props.sidebarIsOpen ? "0" : "-100%")};
  transition: ${(props) => (props.sidebarIsOpen ? "1s" : "2s")};
  animation: openSearchWindow 0.5s linear;
  transform: ${(props) => (props.sidebarIsOpen ? "" : "translateX(-10px)")};

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
    font-size: 22px;
    margin-left: 25px;
    margin-bottom: 30px;
  }

  .search-result-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow-y: auto;
    overflow-x: hidden;
    padding-top: 15px;
    padding-bottom: 100px;
  }

  // .side-notifications {
  //   top: 0;
  //   left: -100%;
  //   transition: 1s ;
  // }

  // .side-notifications.active {
  //   left: 0;
  //   transition: 1s;
  // }

  @media screen and (max-width: 1220px) {
    width: 450px;
    padding: 20px 0px 20px 80px;
  }
`;
