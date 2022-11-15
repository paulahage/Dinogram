import styled from "styled-components";

import ViewAllComments from "./ViewAllComments";
import {Likes} from "./Likes";
import ActionsBar from "./ActionsBar";
import FirstComment from "./FirstComment";

const InteractionBar = ({ postInfo }) => {
  const { post } = postInfo;
  const likesCount = post.previewLikes.avatars;
  const previewComments = post.previewComments;

  return (
    <InteractionBarWrapper>
      <ActionsBar likesCount={likesCount} />
      <Likes likesCount={likesCount} />
      <div>
        <span className="text-bold name-user">{postInfo.user.id}</span>
        <span className="normal-text">{post.text}</span>
      </div>
      <ViewAllComments post={post} />
      <FirstComment comments={previewComments} />
    </InteractionBarWrapper>
  );
};

export default InteractionBar;

const InteractionBarWrapper = styled.div`
  padding: 15px;
  margin-top: -28px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

`;
