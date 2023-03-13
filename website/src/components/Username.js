import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { usePreviewProfileContext } from "../context/PreviewProfileContext";

const Username = ({ postInfos }) => {
  const { handleMouseEnter, handleMouseLeave } = usePreviewProfileContext();

  return (
    <UsernameWrapper
      onMouseOver={(e) => handleMouseEnter( postInfos.userWithPostsPreview, e)}
      onMouseLeave={handleMouseLeave}
    >
      <NavLink
        to={`/${postInfos.userWithPostsPreview.id}`}
        className="username-link"
      >
        {postInfos.userWithPostsPreview.id}
      </NavLink>
    </UsernameWrapper>
  );
};

export default Username;

const UsernameWrapper = styled.span`
  cursor: pointer;
  font-weight: var(--bold);
  font-size: var(--fs_regular);
  margin-left: 15px;

  .username-link {
    color: var(--icons);
  }
`;
