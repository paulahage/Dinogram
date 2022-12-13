import React from "react";
import styled from "styled-components";
import * as HiIcons from "react-icons/hi";
import * as FiIcons from "react-icons/fi";
import { useSinglePostContext } from "../context/SinglePostContext";

const ProfilePostHoverEffect = ({ post, userInfo}) => {
  const { toggleSinglePost } = useSinglePostContext();
  const userPostInfo = { user: userInfo.user, post: post };

  return (
    <ProfilePostHoverEffectWrapper
      onClick={() => toggleSinglePost(userPostInfo)}
    >
      <div className="likes-count">
        <HiIcons.HiHeart className="icon" />
        &nbsp;&nbsp;
        <span className="icon-title">{post.likesCount}</span>
      </div>
      <div>
        <FiIcons.FiMessageCircle className="icon" />
        &nbsp;&nbsp;
        <span className="icon-title">{post.commentsCount}</span>
      </div>
    </ProfilePostHoverEffectWrapper>
  );
};

export default ProfilePostHoverEffect;

const ProfilePostHoverEffectWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0%;
  opacity: 0;

  .likes-count {
    margin-right: 20px;
  }

  .icon {
    font-size: var(--fs_xl);
    fill: var(--mainBackgroundColor);
    color: var(--mainBackgroundColor);
  }

  .icon-title {
    color: var(--mainBackgroundColor);
    font-size: var(--fs_large);
    font-weight: var(--bold);
    position: relative;
    top: -6px;
  }

  :hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.5);

    .icon {
      opacity: 1;
    }
  }
`;
