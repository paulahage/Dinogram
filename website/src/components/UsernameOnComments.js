import React from "react";
import { NavLink } from "react-router-dom";
import { usePreviewProfileContext } from "../context/PreviewProfileContext";
import { useSinglePostContext } from "../context/SinglePostContext";
import styled from "styled-components";

export const UsernameOnComments = ({ user}) => {
  const { handleMouseEnter, handleMouseLeave } = usePreviewProfileContext();
  const { handleClose, isSinglePostOpen } = useSinglePostContext();

   const handleCloseSinglePost = (e) => {
     if (isSinglePostOpen) {
       handleClose(e);
     }
   };

  return (
    <UsernameOnCommentsWrapper
      onMouseOver={(e) => handleMouseEnter(user, e)}
      onMouseLeave={handleMouseLeave}
    >
      <NavLink
        to={`/${user.id}`}
        className="username-comments"
        id="single-comment-user"
        onClick={handleCloseSinglePost}
      >
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
