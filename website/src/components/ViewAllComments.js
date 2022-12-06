import React from 'react'
import styled from 'styled-components';
import { useSinglePostContext } from '../context/SinglePostContext';

const ViewAllComments = ({ postInfo }) => {
  const { toggleSinglePost } = useSinglePostContext();

  const { commentCount } = postInfo.post;

  if (commentCount <= 1) {
    return <span></span>
  }

  return (
    <ViewAllCommentsWrapper onClick={()=> toggleSinglePost(postInfo)}>
      <span className="view-all-comments">
        View all {commentCount} comments
      </span>
    </ViewAllCommentsWrapper>
  );
}

export default ViewAllComments

const ViewAllCommentsWrapper = styled.button`
  margin-top: 8px;

  .view-all-comments {
    font-size: var(--fs_regular);
    font-family: "Poppins", sans-serif;
    color: var(--dark_grey);
  }
`;