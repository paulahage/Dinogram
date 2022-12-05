import React from "react";
import { usePreviewProfileContext } from "../context/PreviewProfileContext";
import styled from "styled-components";

export const UsernameOnComments = ({ user , postId}) => {
  const { handleMouseEnter } = usePreviewProfileContext();

  return (
    <UsernameOnCommentsWrapper onMouseOver={(e)=>handleMouseEnter(e,user, postId)} >
      {user.id}
    </UsernameOnCommentsWrapper>
  );
};

const UsernameOnCommentsWrapper = styled.span`
  cursor: pointer;
  font-weight: var(--bold);
  font-size: var(--fs_small);
  margin-right: 10px;
  margin-bottom: 5px;
`;
