import React, { useContext, useState, useEffect, useRef } from "react";
import { fetchMorePosts, fetchPosts } from "../services/ApiService";

const FeedPostsContext = React.createContext({});

export const FeedPostsProvider = ({ children }) => {
  const [feedPosts, setFeedPosts] = useState([]);
  const [lastPostId, setLastPostId] = useState("");

  const focusRef = useRef();

  const getLastPostId = (posts) => {
    const lastPost = posts.at(-1);
    const lastPostId = lastPost.post.id;
    setLastPostId(lastPostId);
  };

  const getPosts = async () => {
    const posts = await fetchPosts();
    setFeedPosts(posts);
    getLastPostId(posts);
  };

  const getMorePosts = async (lastPostId) => {
    const morePosts = await fetchMorePosts(lastPostId);
    setFeedPosts(feedPosts.concat(morePosts));
    getLastPostId(morePosts);
  };

  useEffect(() => {
    getPosts();
    //eslint-disable-next-line
  }, []);

  return (
    <FeedPostsContext.Provider
      value={{
        feedPosts,
        getMorePosts,
        lastPostId,
        setLastPostId,
        focusRef,
      }}
    >
      {children}
    </FeedPostsContext.Provider>
  );
};

export const useFeedPostsContext = () => {
  return useContext(FeedPostsContext);
};
