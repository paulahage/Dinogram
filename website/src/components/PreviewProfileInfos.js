import React from 'react'
import styled from 'styled-components'

const PreviewInfos = ({user}) => {
  return (
    <PreviewInfosWrapper>
      <div className="info">
        <p className="data-numbers">{user.user.postsCount}</p>
        <p className="title">posts</p>
      </div>
      <div className="info">
        <p className="data-numbers">{user.user.followersCount}</p>
        <p className="title">followers</p>
      </div>
      <div className="info">
        <p className="data-numbers">{user.user.followingCount}</p>
        <p className="title">following</p>
      </div>
    </PreviewInfosWrapper>
  );
}

export default PreviewInfos

const PreviewInfosWrapper = styled.div`
  width: 100%;
  height: 90px;
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex: 0 1 auto;

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .data-numbers {
    font-weight: var(--bold);
    font-size: var(--fs_regular);
  }

  .title {
    font-weight: var(--regular);
    font-size: var(--fs_regular_plus);
    color: var(--dark_grey);
  }
`;