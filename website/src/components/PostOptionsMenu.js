import React from "react";
import { usePostOptionsMenuContext } from "../context/PostOptionsMenuContext";
import styled from "styled-components";

const PostOptionsMenu = () => {
  const { handleCloseMenu, handleUnfollow, copyToClipboard} = usePostOptionsMenuContext();

  return (
    <PostOptionsMenuWrapper onClick={handleCloseMenu}>
      <div className="menu-container">
        <button className="unfollow-btn" onClick={handleUnfollow}>
          Unfollow
        </button>
        <button className="copy-link-btn" onClick={copyToClipboard}>
          Copy Link
        </button>
      </div>
    </PostOptionsMenuWrapper>
  );
};

export default PostOptionsMenu;

const PostOptionsMenuWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--background_transparent);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @keyframes showMenu {
    from {
      opacity: 0;
      transform: scale(0.7);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .menu-container {
    width: 300px;
    height: 160px;
    margin-left: 140px;
    background-color: var(--mainBackgroundColor);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: showMenu 0.2s forwards;
  }

  .unfollow-btn {
    width: 100%;
    height: 100%;
    border-bottom: 1px solid var(--grey);
    color: var(--heart);
    font-size: var(--fs_large);
    font-weight: var(--bold);
  }

  .copy-link-btn {
    width: 100%;
    height: 100%;
    color: var(--icons);
    font-size: var(--fs_large);
    font-weight: var(--light);
  }

  @media screen and (max-width: 1220px) {
    .menu-container {
      margin-left: 60px;
    }
  }
`;
