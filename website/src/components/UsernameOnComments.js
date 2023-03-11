import React from "react";
import { usePreviewProfileContext } from "../context/PreviewProfileContext";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const UsernameOnComments = ({ user, postId }) => {
  const { handleMouseEnter } = usePreviewProfileContext();

  return (
    <UsernameOnCommentsWrapper onMouseOver={(e) => handleMouseEnter(e, user, postId)}>
      <NavLink to={`/${user.id}`} className="username-comments">
        {user.id}
      </NavLink>
    </UsernameOnCommentsWrapper>
  );
};

const UsernameOnCommentsWrapper = styled.span`
  font-weight: var(--bold);
  font-size: var(--fs_small);
  margin-right: 10px;
  margin-bottom: 5px;

  .username-comments {
    color: var(--icons);
  }
`;
