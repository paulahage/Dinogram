import React from "react";
import styled from "styled-components";

const ProfileInfos = ({ user }) => {
  return (
    <ProfileInfosWrapper>
      <p className="data-numbers">
        {user?.postsCount} <span className="info-title">posts</span>{" "}
      </p>
      <button className="data-numbers">
        {user?.followersCount} <span className="info-title">followers</span>
      </button>
      <button className="data-numbers">
        {user?.followingCount} <span className="info-title">following</span>
      </button>
    </ProfileInfosWrapper>
  );
};

export default ProfileInfos;

const ProfileInfosWrapper = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .data-numbers {
    font-size: var(--fs_large);
    font-weight: var(--bold);
    color: var(--icons);
  }

  .info-title {
    font-weight: var(--regular);
    color: var(--icons);
  }
`;
