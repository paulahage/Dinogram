import React, { useEffect, useState } from "react";
import styled from "styled-components";

import ViewReplies from "./ViewReplies";
import SingleComment from "./SingleComment";

const AllComments = ({ postInfos, comments }) => {
  const postUserComment = {
    comments: [],
    text: postInfos?.text,
    user: {
      id: postInfos?.userId,
      avatar: postInfos?.userWithPostsPreview?.avatar,
    },
  };

  const [allComments, setAllComments] = useState([postUserComment]);

  useEffect(() => {
    if (!comments?.length) return;

    if (allComments.length > 1) {
      setAllComments([postUserComment].concat(comments));
    } else {
      setAllComments(allComments.concat(comments));
    }
    //eslint-disable-next-line
  }, [comments]);

  return (
    <AllCommentsWrapper>
      {allComments.map((comment, index) =>  (
        <div className="all-comments-container" key={index}>
          <SingleComment comment={comment} postInfos={postInfos} />
          {comment.comments.length ? <ViewReplies comment={comment} /> : ""}
        </div>
      ))}
    </AllCommentsWrapper>
  );
};

export default AllComments;

const AllCommentsWrapper = styled.div`
  height: 400px;
  padding: 0 15px 15px 15px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none;
  }

  .all-comments-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;
