import React from "react";
import styled from "styled-components";

const Profile_Avatar = () => {
  return (
    <ProfileAvatarWrapper>
      {/* <img
        src=""
        alt="avatar_profile"
        className="dino_photo"
      /> */}
    </ProfileAvatarWrapper>
  );
};

export default Profile_Avatar;

const ProfileAvatarWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid var(--grey);
  background-image: url(../../images/dino_avatar.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
