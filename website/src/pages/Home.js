import React, { useCallback, useRef, useEffect } from "react";
import { useFeedAndPostsContext } from "../context/FeedAndPostsContext";
import { useSinglePostContext } from "../context/SinglePostContext";
import { usePostOptionsMenuContext } from "../context/PostOptionsMenuContext";
import { useSidebarContext } from "../context/SidebarContext";
import { optionsMenuPageScroll, singlePostPageScroll,} from "../services/PageScrollService";
import styled from "styled-components";
import Post from "../components/Post";
import SinglePost from "../components/SinglePost";
import PostOptionsMenu from "../components/PostOptionsMenu";
import AlertMessage from "../components/AlertMessage";

const Home = () => {
  const { isSinglePostOpen } = useSinglePostContext();
  const { feed, getMorePosts, lastPostId, setLastPostId } = useFeedAndPostsContext();
  const { isOptionsMenuOpen, isCopiedToClipboard } = usePostOptionsMenuContext();
  const { closeSideMenus } = useSidebarContext();

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
    singlePostPageScroll(isSinglePostOpen);
  }, [isSinglePostOpen]);

  useEffect(() => {
    optionsMenuPageScroll(isOptionsMenuOpen);
  }, [isOptionsMenuOpen]);

  return (
    <HomeWrapper
      isOptionsMenuOpen={isOptionsMenuOpen}
      isSinglePostOpen={isSinglePostOpen}
      onClick={closeSideMenus}
    >
      {isCopiedToClipboard && <AlertMessage />}
      {feed.map((post, index) => {
        if (index === feed.length - 1) {
          return <Post key={index} post={post} postRef={lastPostRef} />;
        }
        return <Post key={index} post={post} />;
      })}
      {isSinglePostOpen && <SinglePost />}
      {isOptionsMenuOpen && <PostOptionsMenu />}
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  width: calc(100% - 245px);
  height: 100%;
  margin-left: 201px;
  padding-right: ${(props) =>
    props.isOptionsMenuOpen || props.isSinglePostOpen ? "17px" : "0px"};
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

  @media screen and (max-width: 765px) {
    width: 100%;
    margin-left: 0px;
    padding-top: 100px;
  }

  @media screen and (max-width: 550px) {
    padding-top: 90px;
  }
`;
