import React from "react";
import styled from "styled-components";
import { BASE_URL } from "../utils";

const ProfileAvatar = ({ url, userProfile }) => {
  return <ProfileAvatarWrapper url={BASE_URL + url} userProfile={userProfile} />;
};

export default ProfileAvatar;

const ProfileAvatarWrapper = styled.div`
  width: ${(props) => (props.userProfile ? "100px" : "40px")};
  height: ${(props) => (props.userProfile ? "100px" : "40px")};
  border-radius: 50%;
  border: 2px solid var(--grey);
  background-image: url(${(props) => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 570px) {
    width: ${(props) => (props.userProfile ? "70px" : "35px")};
    height: ${(props) => (props.userProfile ? "70px" : "35px")};
  }
`;
