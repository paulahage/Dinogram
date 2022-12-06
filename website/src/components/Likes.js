import styled from "styled-components";
import LikesAvatar from "./LikesAvatar";

export const Likes = ({ likes, likesCount }) => {

  return (
    <LikesWrapper>
      <div className="show-avatar">
        <LikesAvatar likes={likes} />
      </div>
      {likesCount === 1 ? (
        <span className=" text-bold text-likes">
          {likesCount} like
        </span>
      ) : (
        <span className="text-bold text-likes">
          {likesCount} likes
        </span>
      )}
    </LikesWrapper>
  );
};

const LikesWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;

  .show-avatar {
    display: flex;
  }

  .text-likes {
    margin-left: 20px;
  }
`;
