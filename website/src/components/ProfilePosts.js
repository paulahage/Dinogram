import React from "react";
import styled from "styled-components";
import { BASE_URL } from "../utils";

const ProfilePosts = ({ userInfo }) => {
  const { user, posts } = userInfo;

  return (
    <ProfilePostsWrapper>
      {posts.map((post) => {
        return (
          <PostPicture
            className="post"
            key={post.id}
            url={BASE_URL + post.picture}
          />
        );
      })}
    </ProfilePostsWrapper>
  );
};

export default ProfilePosts;

const ProfilePostsWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-top: 1px solid var(--grey);
  display: grid;
  grid: auto-flow / 1fr 1fr 1fr;
  gap: 28px 28px;
  place-items: center;
  place-content: center;
`;

const PostPicture = styled.div`
  width: 260px;
  height: 260px;
  background-image: url(${(props) => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
