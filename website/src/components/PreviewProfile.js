import React from "react";
import styled from "styled-components";
import { usePreviewProfileContext } from "../context/PreviewProfileContext";
import PreviewProfileInfos from "./PreviewProfileInfos";
import PreviewProfilePosts from "./PreviewProfilePosts";
import ProfileAvatar from "./ProfileAvatar";

const PreviewProfile = ({ posts }) => {
  const { hoverUserId, handleMouseLeave} = usePreviewProfileContext();

  const user = posts.find((post) => hoverUserId === post.user.id);
  console.log('user', user);

  const postsPreview = user.user.postsPreview;

  return (
    <PreviewProfileWrapper id="preview_profile" onMouseOut={handleMouseLeave} user={user}>
      <div className="header">
        <ProfileAvatar url={user.user.avatar} />
        <span className="username">{user.user.id}</span>
      </div>
      <PreviewProfileInfos user={user} />
      <div className="preview-posts">
        <PreviewProfilePosts posts={postsPreview} />
      </div>
    </PreviewProfileWrapper>
  );
};

export default PreviewProfile;

const PreviewProfileWrapper = styled.div`
  width: 380px;
  height: 320px;
  border-radius: 10px;
  border: 1px solid var(--grey);
  background-color: var(--mainBackgroundColor);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 2;
  position: absolute;
  top: 58px;
  right: 185px;

  .header {
    width: 100%;
    height: 75px;
    padding: 15px;
    border-bottom: 1px solid var(--grey);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  .username {
    font-weight: var(--bold);
    font-size: var(--fs_regular);
    margin-left: 15px;
  }

  .preview-posts {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
