import React, { useCallback, useRef } from "react";
import { useFeedPostsContext } from "../context/FeedPostsContext";
import { useSinglePostContext } from "../context/SinglePostContext";
import styled from "styled-components";

import Posts from "../components/Posts";
import SinglePost from "../components/SinglePost";
import { useEffect } from "react";

const Home = () => {
  const { isSinglePostOpen } = useSinglePostContext();
  const { feedPosts, getMorePosts, lastPostId } = useFeedPostsContext();

  const observer = useRef();

  const lastPostDisplayCallback = (entries) => {
    const lastPost = entries[0];

    if (lastPost.isIntersecting) {
      getMorePosts(lastPostId);
      observer.current.disconnect();
    }
  };

  observer.current = new IntersectionObserver(lastPostDisplayCallback);

  const lastPostRef = useCallback((domElement) => {
    if (domElement) {
      observer.current.observe(domElement);
    }
  }, []);


  useEffect(() => {
    document.body.style.overflow = isSinglePostOpen ? "hidden" : "unset";
  }, [isSinglePostOpen])

  return (
    <HomeWrapper>
      {feedPosts.map((post, index) => {
        if (index === feedPosts.length - 1) {
          return <Posts key={index} post={post} postRef={lastPostRef} />;
        }
        return <Posts key={index} post={post} />;
      })}
      {isSinglePostOpen && (
        <SinglePost  posts={feedPosts} />
      )}
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  width: calc(100% + 155px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1220px) {
    width: calc(100% + 80px);
  }
`;
