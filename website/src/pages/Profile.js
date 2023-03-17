import React, { useState, useEffect } from "react";
import { useSinglePostContext } from "../context/SinglePostContext";
import { useSidebarContext } from "../context/SidebarContext";
import { usePostOptionsMenuContext } from "../context/PostOptionsMenuContext";
import { useParams } from "react-router-dom";
import { fetchUserProfile } from "../services/ApiService";
import { singlePostPageScroll } from "../services/PageScrollService";
import styled from "styled-components";
import ProfileAvatar from "../components/ProfileAvatar";
import ProfileInfos from "../components/ProfileInfos";
import ProfilePosts from "../components/ProfilePosts";
import SinglePost from "../components/SinglePost";
import PostOptionsMenu from "../components/PostOptionsMenu";
import AlertMessage from "../components/AlertMessage";

const Profile = () => {
  const { isSinglePostOpen } = useSinglePostContext();
  const { closeSideMenus } = useSidebarContext();
  const { isOptionsMenuOpen, isCopiedToClipboard } = usePostOptionsMenuContext();
  const [user, setUser] = useState({ user: {}, posts: [] });

  let { userId } = useParams();

  const getUserProfile = async (userId) => {
    const userProfile = await fetchUserProfile(userId);
    setUser(userProfile);
  };

  useEffect(() => {
    singlePostPageScroll(isSinglePostOpen);
  }, [isSinglePostOpen]);

  useEffect(() => {
    getUserProfile(userId);
    window.scrollTo(0, 0);
    //eslint-disable-next-line
  }, [userId]);

  return (
    <ProfileWrapper onClick={closeSideMenus}>
      {isCopiedToClipboard && <AlertMessage />}
      <div className="profile-info-container">
        <ProfileAvatar url={user.avatar} userProfile={user} />
        <div className="info-container">
          <p className="username-profile-page">{user.id}</p>
          <ProfileInfos user={user} />
        </div>
      </div>
      <ProfilePosts userInfo={user} />
      {isSinglePostOpen && <SinglePost />}
      {isOptionsMenuOpen && <PostOptionsMenu />}
    </ProfileWrapper>
  );
};

export default Profile;

const ProfileWrapper = styled.div`
  width: calc(100% - 245px);
  height: 100%;
  margin-left: 245px;
  padding: 40px 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .profile-info-container {
    width: 100%;
    border-bottom: 1px solid var(--grey);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 45px;
    margin-bottom: 45px;
  }

  .info-container {
    width: calc(100% - 200px);
    margin-left: 80px;
  }

  .username-profile-page {
    font-size: var(--fs_xxl);
    font-weight: var(--light);
    margin-bottom: 20px;
  }

  @media screen and (max-width: 1220px) {
    width: calc(100% - 80px);
    margin-left: 80px;
    padding: 40px 40px;
  }

  @media screen and (max-width: 765px) {
    width: 100%;
    margin-left: 0px;
    margin-top: 60px;
    padding-bottom: 60px;
    padding-left: 0px;
    padding-right: 0px;

    .profile-info-container {
      margin-bottom: 0px;
      padding-left: 10px;
    }
  }

  @media screen and (max-width: 550px) {
    .info-container {
      margin-left: 40px;
    }

    .profile-info-container {
      padding-top: 25px;
    }

    .username-profile-page {
      font-size: var(--fs_xl);
    }
  }
`;
