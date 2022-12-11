import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { usePreviewProfileContext } from "../context/PreviewProfileContext";

const Username = ({ post }) => {
  const { handleMouseEnter } = usePreviewProfileContext();

  return (
    <UsernameWrapper
      onMouseOver={(e) => handleMouseEnter(e, post.user, post.post.id)}
    >
      <NavLink to={`/${post.user.id}`} className="username-link">
        {post.user.id}
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
