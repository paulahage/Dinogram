import React from 'react'
import styled from 'styled-components';
import { useSinglePostContext } from '../context/SinglePostContext';

const ViewAllComments = ({ postInfos, updatebleCommentsCount }) => {
  const {toggleSinglePost} = useSinglePostContext();

  if (updatebleCommentsCount <= 1) {
    return <span></span>;
  }

  return (
    <ViewAllCommentsWrapper onClick={() => toggleSinglePost(postInfos)}>
      <span className="view-all-comments">
        View all {updatebleCommentsCount} comments
      </span>
    </ViewAllCommentsWrapper>
  );
};

export default ViewAllComments

const ViewAllCommentsWrapper = styled.button`
  margin-top: 8px;

  .view-all-comments {
    font-size: var(--fs_regular);
    font-family: "Poppins", sans-serif;
    color: var(--dark_grey);
  }
`;