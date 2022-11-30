import React from "react";
import styled from "styled-components";
import { usePreviewProfileContext } from "../context/PreviewProfileContext";

const Username = ({ post }) => {
  const { handleMouseEnter } = usePreviewProfileContext();

  return (
    <UsernameWrapper onMouseOver={handleMouseEnter} id={post.user.id}>
      {post.user.id}
    </UsernameWrapper>
  );
};

export default Username;

const UsernameWrapper = styled.div`
  font-weight: var(--bold);
  font-size: var(--fs_regular);
  margin-left: 15px;
  cursor: pointer;
`;
