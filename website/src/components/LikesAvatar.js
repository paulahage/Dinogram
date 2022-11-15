import styled from "styled-components";
import { BASE_URL } from "../utils";

const LikesAvatar = ({ likes }) => {
  if (likes.length === 1) {
    return (
      <LikesWrapper pictureUrl={BASE_URL + likes[0]}>
        <div className="avatars-likes" />
      </LikesWrapper>
    );
  }

  return likes.map((avatar, index) => (
    <LikesWrapper key={index} pictureUrl={BASE_URL + avatar} order={index}>
        <div className="avatars-likes" />
    </LikesWrapper>
  ));
};

export default LikesAvatar;

const LikesWrapper = styled.div`
  .avatars-likes {
    width: 22px;
    height: 22px;
    display: flex;
    flex-direction: column;
    order: ${(props) => props.order};
    position: relative;
    margin-right: -8px;
    z-index: ${(props) => (props.order === 0 ? 1 : 0)};
    border-radius: 50%;
    border: 2px solid var(--mainBackgroundColor);
    background-image: url(${(props) => props.pictureUrl});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 20px;
  }
`;
