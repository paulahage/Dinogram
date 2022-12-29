import React, { useCallback, useRef, useEffect } from "react";
import { useFeedPostsContext } from "../context/FeedPostsContext";
import { useSinglePostContext } from "../context/SinglePostContext";
import { usePostOptionsMenuContext } from "../context/PostOptionsMenuContext";
import styled from "styled-components";

import Posts from "../components/Posts";
import SinglePost from "../components/SinglePost";
import PostOptionsMenu from "../components/PostOptionsMenu";
import AlertMessage from "../components/AlertMessage";

const Home = () => {
  const { isSinglePostOpen } = useSinglePostContext();
  const { feedPosts, getMorePosts, lastPostId, setLastPostId } =
    useFeedPostsContext();
  const { isOptionsMenuOpen, isCopiedToClipboard } =
    usePostOptionsMenuContext();

  const observer = useRef();

  const lastPostDisplayCallback = (entries) => {
    const lastPost = entries[0];

    if (lastPost.isIntersecting) {
      getMorePosts(lastPostId);
      setLastPostId("");

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
  }, [isSinglePostOpen]);

  useEffect(() => {
    document.body.style.overflow = isOptionsMenuOpen ? "hidden" : "auto";
  }, [isOptionsMenuOpen]);

  return (
    <HomeWrapper
      isOptionsMenuOpen={isOptionsMenuOpen}
      isSinglePostOpen={isSinglePostOpen}
    >
      {isCopiedToClipboard && <AlertMessage />}
      {feedPosts.map((post, index) => {
        if (index === feedPosts.length - 1) {
          return <Posts key={index} post={post} postRef={lastPostRef} />;
        }
        return <Posts key={index} post={post} />;
      })}
      {isSinglePostOpen && <SinglePost posts={feedPosts} />}
      {isOptionsMenuOpen && <PostOptionsMenu />}
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  width: calc(100% - 245px);
  height: 100%;
  margin-left: 201px;
  padding-right: ${(props) => props.isOptionsMenuOpen || props.isSinglePostOpen ? "17px" : "0px"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  @media screen and (max-width: 1220px) {
    width: calc(100% - 80px);
    margin-left: 80px;
    padding-right: ${(props) =>
      props.isOptionsMenuOpen || props.isSinglePostOpen ? "17px" : "0px"};
  }
`;
