import React from 'react'
import styled from 'styled-components';

const ViewAllComments = ({ post }) => {
  const { commentCount } = post;

  if (commentCount <= 1) {
    return <span></span>
  }
  
  return (
    <ViewAllCommentsWrapper>
      <span className="view-all-comments">
        View all {commentCount} comments
      </span>
    </ViewAllCommentsWrapper>
  );
}

export default ViewAllComments

const ViewAllCommentsWrapper = styled.button`
  margin: 5px 0;

  .view-all-comments {
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    color: var(--dark_grey);
  }
`;