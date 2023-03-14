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
            <ProfilePostHoverEffect post={post}/>
          </div>
        );
      })}
    </ProfilePostsWrapper>
  );
};

export default ProfilePosts;

const ProfilePostsWrapper = styled.div`
  width: 100%;
  flex: 1 1 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 23px;
  place-items: center;
  place-content: center;

  .picture-container {
    position: relative;
  }

  @media screen and (max-width: 765px) {
    grid-gap: 1px;
  }
`;

const PostPicture = styled.img`
  width: 100%;
  object-fit: cover;
  cursor: pointer;
  display: table-header-group;
`;
