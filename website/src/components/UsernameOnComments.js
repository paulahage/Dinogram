import React from "react";
import { usePreviewProfileContext } from "../context/PreviewProfileContext";
import styled from "styled-components";

export const UsernameOnComments = ({ post }) => {
  const { handleMouseEnter } = usePreviewProfileContext();

  console.log("post", post);


  return (
    <UsernameOnCommentsWrapper onMouseOver={handleMouseEnter}>
      {post.user.id}
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
