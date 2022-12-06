import React from "react";
import styled from "styled-components";
import { BASE_URL } from "../utils";

const PreviewProfilePosts = ({ posts }) => {
  return posts.map((post) => {
    return (
      <PreviewProfilePostsWrapper
        post={post}
        key={post.id}
      ></PreviewProfilePostsWrapper>
    );
  });
};

export default PreviewProfilePosts;

const PreviewProfilePostsWrapper = styled.div`
  width: 126px;
  height: 126.6px;
  background-image: url(${(props) => BASE_URL + props.post.picture});
`;
