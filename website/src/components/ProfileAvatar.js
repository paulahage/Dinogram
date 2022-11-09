import React from "react";
import styled from "styled-components";
import { BASE_URL } from "../utils";

const ProfileAvatar = ({url}) => {
  return (
    <ProfileAvatarWrapper url={BASE_URL + url}/>
  );
};

export default ProfileAvatar;

const ProfileAvatarWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid var(--grey);
  background-image: url(${(props) => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
