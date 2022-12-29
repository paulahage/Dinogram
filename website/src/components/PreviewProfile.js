import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { usePreviewProfileContext } from "../context/PreviewProfileContext";

import PreviewProfileInfos from "./PreviewProfileInfos";
import PreviewProfilePosts from "./PreviewProfilePosts";
import ProfileAvatar from "./ProfileAvatar";

const PreviewProfile = (props) => {
  const { user, handleMouseLeave, mousePosition, postId, hoverOver } = usePreviewProfileContext();
  const { top, left } = mousePosition;

  const postsPreview = user.postsPreview;

  return (
    props.postId === postId &&
    hoverOver && (
      <PreviewProfileWrapper
        id="preview_profile"
        onMouseLeave={handleMouseLeave}
        top={top}
        left={left}
      >
        <div className="header">
          <ProfileAvatar url={user.avatar} />
          <NavLink to={`/${user.id}`} className="username">
            {user.id}
          </NavLink>
          <span className="username"></span>
        </div>
        <PreviewProfileInfos user={user} />
        <div className="preview-posts">
          <PreviewProfilePosts posts={postsPreview} />
        </div>
      </PreviewProfileWrapper>
    )
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
  top: ${(props) => props.top + "px"};
  left: ${(props) => props.left + "px"};

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
    color: var(--icons);
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
