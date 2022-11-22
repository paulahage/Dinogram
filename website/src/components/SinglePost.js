import React from "react";
import styled from "styled-components";
import * as Io5Icons from "react-icons/io5";
import { BASE_URL } from "../utils";
import { useSinglePostContext } from "../context/SinglePostContext";


const SinglePost = () => {

  const { toggleSinglePost } = useSinglePostContext();

  return (
    <SinglePostWrapper onClick={toggleSinglePost} urlPicture={BASE_URL + post.picture}>
      <button onClick={toggleSinglePost}>
        <Io5Icons.IoClose className="close-btn"/>
      </button>
      <div className="post-container">
        <div className="post-image"/>

      </div>
    </SinglePostWrapper>

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
  z-index: 10;

  .close-btn {
    font-size: 30px;
    color: var(--mainBackgroundColor);
    position: absolute;
    right: 10px;
  }

  .post-container {
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .post-image {
    flex: 1 1 auto;
    min-width: 100px;
    background-image: url(${props => props.urlPicture});
  }
`;
