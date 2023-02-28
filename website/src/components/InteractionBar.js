import styled from "styled-components";

import ViewAllComments from "./ViewAllComments";
import { Likes } from "./Likes";
import ActionsBar from "./ActionsBar";
import FirstComment from "./FirstComment";
import { UsernameOnComments } from "./UsernameOnComments";

const InteractionBar = ({ postInfos }) => {
  return (
    <InteractionBarWrapper>
      <ActionsBar postInfos={postInfos} />
      <Likes
        likes={postInfos.likesUsersPreview}
        likesCount={postInfos.likesCount}
      />
      <div>
        <UsernameOnComments
          user={postInfos.userWithPostsPreview}
          postId={postInfos.id}
        />
        <span className="normal-text">key: text here</span>
      </div>
      {postInfos.commentsCount > 1 ? (
        <ViewAllComments postInfos={postInfos} />
      ) : (
         ""
      )}
      <FirstComment previewComments={postInfos.commentsPreview} />
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
