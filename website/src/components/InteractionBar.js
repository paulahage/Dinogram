import styled from "styled-components";

import ViewAllComments from "./ViewAllComments";
import { Likes } from "./Likes";
import ActionsBar from "./ActionsBar";
import FirstComment from "./FirstComment";
import { UsernameOnComments } from "./UsernameOnComments";

const InteractionBar = ({ postInfo }) => {
  const { post } = postInfo;
  const previewComments = post.commentsPreview;

  return (
    <InteractionBarWrapper>
      <ActionsBar postInfo={postInfo} />
      <Likes likes={post.likesPreview} likesCount={post.likesCount} />
      <div className="user-comment">
        <UsernameOnComments user={postInfo.user} postId={post.id} />
        <span className="normal-text">{post.text}</span>
      </div>
      {post.commentsCount > 1 ? <ViewAllComments postInfo={postInfo} /> : ""}
      <FirstComment comments={previewComments} />
    </InteractionBarWrapper>
  );
};

export default InteractionBar;

const InteractionBarWrapper = styled.div`
  padding: 5px 15px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
