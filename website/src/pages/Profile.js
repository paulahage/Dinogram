import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUserProfile } from "../services/ApiService";
import styled from "styled-components";

import ProfileAvatar from "../components/ProfileAvatar";
import { useEffect } from "react";
import ProfileInfos from "../components/ProfileInfos";
import ProfilePosts from "../components/ProfilePosts";

const Profile = () => {
  let { userId } = useParams();
  console.log("userId", userId);

  const [user, setUser] = useState({user:{}, posts:[]});

  const getUserProfile = async (userId) => {
    const userProfile = await fetchUserProfile(userId);
    setUser(userProfile);
  };

  useEffect(() => {
    getUserProfile(userId);
    //eslint-disable-next-line
  }, []);

  console.log("user", user);

  return (
    <ProfileWrapper>
      <div className="profile-info-container">
        <ProfileAvatar url={user.user.avatar} userProfile={user} />
        <div className="info-container">
          <p className="username">{user.user.id}</p>
          <ProfileInfos user={user.user} />
        </div>
      </div>
      <ProfilePosts userInfo={user} />
    </ProfileWrapper>
  );
};

export default Profile;

const ProfileWrapper = styled.div`
  width: calc(100% - 245px);
  height: 100%;
  margin-left: 201px;
  padding: 40px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .profile-info-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 45px;
  }

  .info-container {
    margin-left: 80px;
  }

  .username {
    font-size: var(--fs_xl);
    font-weight: var(--light);
    margin-bottom: 20px;
  }

  @media screen and (max-width: 1220px) {
    width: calc(100% - 80px);
    margin-left: 80px;
  }
`;
