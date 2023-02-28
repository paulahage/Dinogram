import React from "react";
import styled from "styled-components";
import { BASE_URL } from "../utils";

import ProfileAvatar from "./ProfileAvatar";
import InteractionBar from "./InteractionBar";
import DatePost from "./DatePost";
import Username from "./Username";
import PreviewProfile from "../components/PreviewProfile";
import CommentInput from "../components/CommentInput";
import DotsKebabButton from "./DotsKebabButton";

const Posts = ({ post, postRef }) => {

   return (
     post.id && (
       <PostsWrapper pictureUrl={BASE_URL + post.picture}>
         <div ref={postRef} className="post-avatar">
           <div className="post-author">
             <ProfileAvatar url={post.userWithPostsPreview.avatar} />
             <Username postInfos={post} />
             <DatePost datePost={post.date} />
           </div>
           <DotsKebabButton postInfos={post} />
         </div>
         <PreviewProfile postId={post.id} />
         <div className="post-img" />
         <InteractionBar postInfos={post} />
         <CommentInput />
       </PostsWrapper>
     )
   );
};

export default Posts;

const PostsWrapper = styled.div`
  width: 470px;
  margin-top: 30px;
  background-color: var(--white);
  border: 1px solid var(--grey);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  position: relative;

  .post-avatar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 70px;
    padding: 0 14px;
  }

  .post-author {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .post-img {
    height: 460px;
    background-color: var(--white);
    background-image: url(${(props) => props.pictureUrl});
  }
`;
