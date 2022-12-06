import { useSinglePostContext } from "../context/SinglePostContext";
import styled from "styled-components";
import LikesAvatar from "./LikesAvatar";

export const Likes = ({ likes, likesCount }) => {
  const { isSinglePostOpen } = useSinglePostContext();

  return (
    <LikesWrapper isSinglePostOpen={isSinglePostOpen}>
      <div className="show-avatar">
        <LikesAvatar likes={likes} />
      </div>
      {likesCount === 1 ? (
        <span className=" text-bold text-likes">{likesCount} like</span>
      ) : (
        <span className="text-bold text-likes">{likesCount} likes</span>
      )}
    </LikesWrapper>
  );
};

const LikesWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
  padding: ${(props) => props.isSinglePostOpen && "0 15px 0 15px"};

  .show-avatar {
    display: flex;
  }

  .text-likes {
    margin-left: 20px;
  }
`;
