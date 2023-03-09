import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ProfileAvatar from "./ProfileAvatar";
import { useSidebarContext } from "../context/SidebarContext";
import { useSearchUserContext } from "../context/SearchUserContext";

const UserSearched = ({ user }) => {
  const { showSearchSideWindow } = useSidebarContext();
  const { updateMySearch, setSearchedUser } = useSearchUserContext();

  useEffect(() => {
    setSearchedUser(user);
    //eslint-disable-next-line
  }, []);

  return (
    <UserSearchedWrapper onClick={() => updateMySearch("")}>
      <NavLink
        to={user.id}
        className="search-result-user"
        onClick={showSearchSideWindow}
      >
        <ProfileAvatar url={user.avatar} />
        <div className="user-searched-infos">
          <p className="username-searched">{user.id}</p>
          <div className="user-followers-info">
            <span>{user.id}</span>
            <span className="user-search-info-details">•</span>
            <span>{user.followersCount} followers</span>
          </div>
        </div>
      </NavLink>
    </UserSearchedWrapper>
  );
};

export default UserSearched;

const UserSearchedWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding-left: 30px;

  :hover {
    background: var(--grey_transparent);
  }

  .search-result-user {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
  }

  .user-searched-infos {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-left: 10px;
    color: var(--dark_grey);
    font-weight: var(--regular);
    font-size: var(--fs_small);
  }

  .username-searched {
    color: var(--black);
    font-weight: var(--bold);
  }

  .user-followers-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: var(--fs_regular_plus);
  }

  .user-search-info-details {
    margin: 0px 5px;
  }

  @media screen and (max-width: 550px) {
    padding-left: 10px;

    .user-followers-info {
      font-size: var(--fs_small);
    }
  }

  @media screen and (max-width: 380px) {
    .user-followers-info {
      font-size: var(--fs_xsmall);
    }
  }
`;
