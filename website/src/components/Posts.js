import React from "react";
import styled from "styled-components";
import * as BsIcons from "react-icons/bs";

import ProfileAvatar from "./ProfileAvatar";
import InteractionBar from "./InteractionBar";
import { BASE_URL } from "../utils";

const Posts = ({ post, postRef }) => {

  return (
    <PostsWrapper pictureUrl={BASE_URL + post.post.picture}>
      <div ref={postRef} className="post-avatar">
        <div className="post-author">
          <ProfileAvatar url={post.user.avatar} />
          <span className="username">{post.user.id}</span>
        </div>
        <BsIcons.BsThreeDots />
      </div>
      <div className="post-img" />
      <InteractionBar postInfo={post} />
    </PostsWrapper>
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
    background-image: url(${(props) => props.pictureUrl});
  }
`;

// const { feedPosts } = useFeedPostsContext();
// return feedPosts.map((feedPost, index) => {
//   return (
//     <PostsWrapper key={index} pictureUrl={BASE_URL + feedPost.post.picture}>
//       <div className="post-avatar">
//         <div className="post-author">
//           <ProfileAvatar url={feedPost.user.avatar} />
//           <span className="username">{feedPost.user.id}</span>
//         </div>
//         <BsIcons.BsThreeDots />
//       </div>
//       <div className="post-img" />
//       <InteractionBar postInfo={feedPost} />
//     </PostsWrapper>
//   );
// });
