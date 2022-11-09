import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import * as BsIcons from "react-icons/bs";
import * as FiIcons from "react-icons/fi";

import ProfileAvatar from "./ProfileAvatar";
import { BASE_URL, URL_FEED } from "../utils";

const Posts = () => {
  const [feedPosts, setFeedPosts] = useState([]);

  const getPosts = async (url) => {
    const response = await axios.get(url);
    setFeedPosts(response.data);
  };

  useEffect(() => {
    getPosts(URL_FEED);
  }, []);

  return (
    feedPosts.map((feedPost, index) => {

      return (
        <PostsWrapper key={index} pictureUrl={BASE_URL + feedPost.post.picture}>
          <div className="post-avatar">
            <div className="post-author">
              <ProfileAvatar url={feedPost.user.avatar} />
              <span className="username">{feedPost.user.id}</span>
            </div>
            <BsIcons.BsThreeDots />
          </div>
          <div className="post-img"/>
          <div className="interaction-bar">
            <FiIcons.FiHeart className="interaction-icons" />
          </div>
        </PostsWrapper>
      );
    })

  );
};

export default Posts;

const PostsWrapper = styled.div`
  width: 470px;
  height: 750px;
  margin-top: 30px;
  background-color: var(--white);
  border: 1px solid var(--grey);
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  .post-avatar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 470px;
    height: 70px;
    padding: 0 20px;
  }

  .post-author {
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .username {
    font-weight: var(--bold);
    font-size: 14px;
    margin-left: 15px;
  }

  .post-img {
    height: 460px;
    background-color: var(--white);
    background-image: url(${props =>  props.pictureUrl});
  }

  .interaction-bar {
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .interaction-icons {
    color: var(--icons);
    font-size: 25px;
  }
`;
