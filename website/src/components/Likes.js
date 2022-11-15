import styled from "styled-components";
import LikesAvatar from "./LikesAvatar";

export const Likes = ({ likesCount }) => {

  return (
    <LikesWrapper>
      <div className="show-avatar">
        <LikesAvatar likes={likesCount} />
      </div>
      {likesCount.length === 1 ? (
        <span className=" text-bold text-likes">
          {likesCount.length} like
        </span>
      ) : (
        <span className="text-bold text-likes">
          {likesCount.length} likes
        </span>
      )}
    </LikesWrapper>
  );
};

const LikesWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  .show-avatar {
    display: flex;
  }

  .text-likes {
    margin-left: 20px;
  }
`;
