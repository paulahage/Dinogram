import React, { useCallback, useRef } from "react";
import { useFeedPostsContext } from "../context/FeedPostsContext";
import styled from "styled-components";
import Posts from "../components/Posts";

const Home = () => {
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

  return (
    <HomeWrapper>
      {feedPosts.map((post, index) => {
        if (index === feedPosts.length - 1) {
          return <Posts post={post} key={index} postRef={lastPostRef} />;
        }
        return <Posts post={post} key={index} />;
      })}
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
