import React from "react";
import { useSinglePostContext } from "../context/SinglePostContext";

import styled from "styled-components";
import { BASE_URL } from "../utils";
import ProfilePostHoverEffect from "../components/ProfilePostHoverEffect";
import SinglePost from "../components/SinglePost";


const SavedPosts = () => {
  const { isSinglePostOpen } = useSinglePostContext();

  const savedPostsList = JSON.parse(localStorage.getItem("savedPosts"));

  return (
    <SavedPostsWrapper>
      <p className="saved-title">All saved Posts</p>
      <div className="saved-posts">
        {savedPostsList?.map((savedPost) => {
          return (
            <div className="picture-container" key={savedPost.post.id}>
              <SavedPostPicture
                className="post"
                src={BASE_URL + savedPost.post.picture}
              />
              <ProfilePostHoverEffect
                post={savedPost.post}
                userInfo={savedPost}
              />
            </div>
          );
        })}
      </div>
      {isSinglePostOpen && <SinglePost />}
    </SavedPostsWrapper>
  );
};

export default SavedPosts;

const SavedPostsWrapper = styled.div`
  width: calc(100% - 245px);
  height: 100%;
  margin-left: 245px;
  padding: 40px 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .saved-title {
    width: 100%;
    border-bottom: 1px solid var(--grey);
    font-size: var(--fs_xl);
    font-weight: var(--regular);
  }

  .saved-posts {
    width: 100%;
    height: 100%;
    flex: 1 1 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 23px;
    place-items: center;
    place-content: center;
    margin-top: 45px;
  }

  .picture-container {
    position: relative;
  }

  @media screen and (max-width: 1220px) {
    width: calc(100% - 80px);
    margin-left: 80px;
    padding: 40px 40px;
  }

  @media screen and (max-width: 800px) {
    padding: 40px 20px;
  }
`;

const SavedPostPicture = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  cursor: pointer;
`;
