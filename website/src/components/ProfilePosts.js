import React from "react";
import styled from "styled-components";
import { BASE_URL } from "../utils";
import ProfilePostHoverEffect from "./ProfilePostHoverEffect";

const ProfilePosts = ({ userInfo }) => {

  const { posts } = userInfo;

  return (
    <ProfilePostsWrapper>
      {posts.map((post) => {
        return (
          <div className="picture-container" key={post.id}>
            <PostPicture className="post" src={BASE_URL + post.picture} />
            <ProfilePostHoverEffect
              post={post}
              userInfo={userInfo}
            />
          </div>
        );
      })}
    </ProfilePostsWrapper>
  );
};

export default ProfilePosts;

const ProfilePostsWrapper = styled.div`
  width: 100%;
  height: 100%;
  flex: 1 1 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 23px;
  place-items: center;
  place-content: center;

  .hover-effect {
    width: 100%;
    aspect-ratio: 1 / 1;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .picture-container {
    position: relative;
  }
`;

const PostPicture = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  cursor: pointer;
`;
