import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const SavedPosts = () => {
  const { userId } = useParams();

  return <SavedPostsWrapper>SavedPosts</SavedPostsWrapper>;
};

export default SavedPosts;

const SavedPostsWrapper = styled.div`
  text-align: center;
`;
