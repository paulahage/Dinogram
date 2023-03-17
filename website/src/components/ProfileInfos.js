import React from "react";
import styled from "styled-components";

const ProfileInfos = ({ user }) => {
  return (
    <ProfileInfosWrapper>
      <p className="data-numbers">
        {user.postsCount} <span className="info-title">posts</span>{" "}
      </p>
      <p className="data-numbers">
        {user.followersCount} <span className="info-title">followers</span>
      </p>
      <p className="data-numbers">
        {user.followingCount} <span className="info-title">following</span>
      </p>
    </ProfileInfosWrapper>
  );
};

export default ProfileInfos;

const ProfileInfosWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .data-numbers {
    font-size: var(--fs_large);
    font-weight: var(--bold);
    color: var(--icons);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-right: 60px;
  }

  .info-title {
    font-weight: var(--regular);
    color: var(--icons);
    margin-left: 5px;
  }

  @media screen and (max-width: 765px) {
    .data-numbers {
      margin-right: 30px;
    }
  }

  @media screen and (max-width: 550px) {
    .data-numbers {
      font-size: var(--fs_regular);
    }

    .info-title {
      font-size: var(--fs_small);
      margin-right: 0px;
    }
  }
`;
