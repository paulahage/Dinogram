import React from "react";
import { useSinglePostContext } from "../context/SinglePostContext";
import styled from "styled-components";
import { BASE_URL } from "../utils";

const ProfileAvatar = ({ url }) => {
  const { isSinglePostOpen } = useSinglePostContext();

  return (
    <ProfileAvatarWrapper url={BASE_URL + url} postIsOpen={isSinglePostOpen} />
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
