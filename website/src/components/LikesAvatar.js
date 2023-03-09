import styled from "styled-components";
import { BASE_URL } from "../utils";

const LikesAvatar = ({ likes }) => {
  if (likes?.length === 1) {
    return (
      <LikesAvatarWrapper pictureUrl={BASE_URL + likes[0].avatar}>
        <div className="avatars-likes" />
      </LikesAvatarWrapper>
    );
  }

  const likesPreview = likes.slice(0, 3);

  return likesPreview.map((like, index) => (
    <LikesAvatarWrapper
      key={index}
      pictureUrl={BASE_URL + like.avatar}
      order={index + 1}
    >
      <div className="avatars-likes" />
    </LikesAvatarWrapper>
  ));
};

export default LikesAvatar;

const LikesAvatarWrapper = styled.div`
  .avatars-likes {
    width: 22px;
    height: 22px;
    display: flex;
    flex-direction: column;
    order: ${(props) => props.order };
    position: relative;
    margin-right: -8px;
    border-radius: 50%;
    border: 2px solid var(--mainBackgroundColor);
    background-image: url(${(props) => props.pictureUrl});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 20px;
  }
`;
