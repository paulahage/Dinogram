import React, { useState, useEffect } from "react";
import { useSinglePostContext } from "../context/SinglePostContext";
import { useParams } from "react-router-dom";
import { fetchUserProfile } from "../services/ApiService";
import styled from "styled-components";

import ProfileAvatar from "../components/ProfileAvatar";
import ProfileInfos from "../components/ProfileInfos";
import ProfilePosts from "../components/ProfilePosts";
import SinglePost from "../components/SinglePost";
import { useSidebarContext } from "../context/SidebarContext";

const Profile = () => {
  const { isSinglePostOpen } = useSinglePostContext();
  const { closeSideMenus } = useSidebarContext();
  const [user, setUser] = useState({ user: {}, posts: [] });

  let { userId } = useParams();

  const getUserProfile = async (userId) => {
    const userProfile = await fetchUserProfile(userId);
    setUser(userProfile);
  };

  useEffect(() => {
    getUserProfile(userId);
    //eslint-disable-next-line
  }, []);

  return (
    <ProfileWrapper onClick={closeSideMenus}>
      <div className="profile-info-container">
        <ProfileAvatar url={user.avatar} userProfile={user} />
        <div className="info-container">
          <p className="username">{user.id}</p>
          <ProfileInfos user={user} />
        </div>
      </div>
      <ProfilePosts userInfo={user} />
      {isSinglePostOpen && <SinglePost />}
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
    justify-content: center;
    padding-bottom: 45px;
    margin-bottom: 45px;
  }

  .info-container {
    margin-left: 80px;
  }

  .username {
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
    padding-bottom: 100px;
  }

  @media screen and (max-width: 570px) {
    .profile-info-container {
      justify-content: space-around;
    }

    .info-container {
      margin-left: 20px;
    }
  }
`;
