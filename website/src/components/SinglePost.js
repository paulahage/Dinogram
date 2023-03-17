import React, { useEffect, useState } from "react";
import { useSinglePostContext } from "../context/SinglePostContext";
import { fetchPostInfos } from "../services/ApiService";
import { useWindowSize } from "../services/WindowSizeService";
import { BASE_URL } from "../utils";
import styled from "styled-components";
import * as Io5Icons from "react-icons/io5";
import ProfileAvatar from "./ProfileAvatar";
import DatePost from "./DatePost";
import AllComments from "./AllComments";
import ActionsBar from "./ActionsBar";
import { Likes } from "./Likes";
import CommentInput from "./CommentInput";
import DotsKebabButton from "./DotsKebabButton";
import PreviewProfile from "./PreviewProfile";
import { PreviewProfileProvider } from "../context/PreviewProfileContext";

const SinglePost = () => {
  const { toggleSinglePost, clickedPost, handleClose } = useSinglePostContext();
  const screenSize = useWindowSize();

  const [postInfos, setPostInfos] = useState({});
  const [comments, setComments] = useState([]);

  const getPostInfos = async (postId) => {
    const infos = await fetchPostInfos(postId);
    setPostInfos(infos);
    setComments(infos.comments);
  };

  useEffect(() => {
    if (clickedPost.id) {
      getPostInfos(clickedPost.id);
    }
    //eslint-disable-next-line
  }, []);

  return postInfos.id && screenSize > 765 ? (
    <PreviewProfileProvider>
      <SinglePostWrapper
        onClick={handleClose}
        urlPicture={BASE_URL + postInfos.picture}
      >
        <button className="close-btn" onClick={toggleSinglePost}>
          <Io5Icons.IoClose />
        </button>
        <div className="post-container" id="single-post-background">
          <PreviewProfile />
          <div className="post-image" />
          <div className="infos-post">
            <div className="post-avatar">
              <div className="post-author">
                <ProfileAvatar url={postInfos.userWithPostsPreview?.avatar} />
                <span className="username-single-post">{postInfos.userId}</span>
                <DatePost datePost={postInfos.date} />
              </div>
              <DotsKebabButton postInfos={postInfos} />
            </div>
            <AllComments postInfos={postInfos} comments={comments} />
            <ActionsBar postInfos={postInfos} />
            <Likes
              likes={postInfos.likesUsers}
              likesCount={postInfos.likesCount}
            />
            <CommentInput
              postInfos={postInfos}
              updatebleComments={comments}
              setUpdatebleComments={setComments}
            />
          </div>
        </div>
      </SinglePostWrapper>
    </PreviewProfileProvider>
  ) : (
    postInfos.id && (
      <PreviewProfileProvider>
        <SinglePostWrapper
          onClick={handleClose}
          urlPicture={BASE_URL + postInfos.picture}
        >
          <button className="close-btn" onClick={toggleSinglePost}>
            <Io5Icons.IoClose />
          </button>
          <div className="post-container" id="single-post-background">
            <PreviewProfile />
            <div className="infos-post">
              <div className="post-avatar">
                <p className="title-single-post">Comments</p>
              </div>
              <AllComments postInfos={postInfos} comments={comments} />
              <ActionsBar postInfos={postInfos} />
              <Likes
                likes={postInfos.likesUsers}
                likesCount={postInfos.likesCount}
              />
              <CommentInput
                postInfos={postInfos}
                updatebleComments={comments}
                setUpdatebleComments={setComments}
              />
            </div>
          </div>
        </SinglePostWrapper>
      </PreviewProfileProvider>
    )
  );
};

export default SinglePost;

const SinglePostWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--background_transparent);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;

  .close-btn {
    font-size: 30px;
    color: var(--mainBackgroundColor);
    position: absolute;
    right: 10px;
    top: 10px;
  }

  .post-container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
  }

  .post-image {
    width: 600px;
    height: 600px;
    background-image: url(${(props) => props.urlPicture});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: var(--black);
  }

  .infos-post {
    width: 500px;
    height: 600px;
    background-color: var(--white);
    border: 1px solid var(--grey);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    display: flex;
    flex-direction: column;
  }

  .post-avatar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 70px;
    padding: 0 15px;
    border-bottom: 1px solid var(--grey);
  }

  .post-author {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .username-single-post {
    font-weight: var(--bold);
    font-size: var(--fs_regular);
    margin-left: 15px;
  }

  .post-title {
    padding: 0 15px;
    margin-top: 15px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .name-user {
    margin: 0px 10px 0px 0px;
  }

  .post-user {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (max-width: 765px) {
    .infos-post {
      width: 70%;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    .post-avatar {
      justify-content: center;
    }

    .title-single-post {
      font-weight: var(--bold);
      font-size: var(--fs_large);
    }
  }

  @media screen and (max-width: 550px) {
    .infos-post {
      width: 100%;
    }
  }
`;
