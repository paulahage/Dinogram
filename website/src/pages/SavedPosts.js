import React, {useEffect} from "react";
import { useSinglePostContext } from "../context/SinglePostContext";
import { useSidebarContext } from "../context/SidebarContext";
import { singlePostPageScroll } from "../services/PageScrollService";
import { BASE_URL } from "../utils";
import styled from "styled-components";
import ProfilePostHoverEffect from "../components/ProfilePostHoverEffect";
import SinglePost from "../components/SinglePost";

const SavedPosts = () => {
  const { isSinglePostOpen } = useSinglePostContext();
  const { closeSideMenus } = useSidebarContext();

  const savedPostsList = JSON.parse(localStorage.getItem("savedPosts"));

  useEffect(() => {
    singlePostPageScroll(isSinglePostOpen);
  }, [isSinglePostOpen]);

  return (
    <SavedPostsWrapper onClick={closeSideMenus}>
      <p className="saved-title">All saved Posts</p>
      <div className="saved-posts">
        {savedPostsList?.map((savedPost) => {
          return (
            <div className="picture-container" key={savedPost.id}>
              <SavedPostPicture
                className="post"
                src={BASE_URL + savedPost?.picture}
              />
              <ProfilePostHoverEffect post={savedPost} />
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
    margin: 45px 0px;
  }

  .picture-container {
    position: relative;
  }

  @media screen and (max-width: 1220px) {
    width: calc(100% - 80px);
    margin-left: 80px;
    padding: 40px 40px;
  }

  @media screen and (max-width: 765px) {
    width: 100%;
    margin-left: 0px;
    margin-top: 60px;
    margin-bottom: 15px;

    .saved-posts {
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }
  }

  @media screen and (max-width: 550px) {
    .saved-posts {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const SavedPostPicture = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  cursor: pointer;
`;
