import React, { useContext, useState, useEffect, useRef } from "react";
import { fetchMorePosts, fetchFeed } from "../services/ApiService";

const FeedAndPostsContext = React.createContext({});

export const FeedAndPostsProvider = ({ children }) => {
  const [feed, setFeed] = useState([]);

  const [lastPostId, setLastPostId] = useState("");

  const focusRef = useRef();

  const getLastPostId = (posts) => {
    const lastPost = posts.at(-1);
    const lastPostId = lastPost.id;
    setLastPostId(lastPostId);
  };

  const getFeed = async () => {
    const posts = await fetchFeed();
    setFeed(posts);
    getLastPostId(posts);
  };

  const getMorePosts = async (lastPostId) => {
    const morePosts = await fetchMorePosts(lastPostId);
    setFeed(feed.concat(morePosts));
    getLastPostId(morePosts);
  };

  useEffect(() => {
    getFeed();
    //eslint-disable-next-line
  }, []);

  return (
    <FeedAndPostsContext.Provider
      value={{
        feed,
        getMorePosts,
        lastPostId,
        setLastPostId,
        focusRef,
      }}
    >
      {children}
    </FeedAndPostsContext.Provider>
  );
};

export const useFeedAndPostsContext = () => {
  return useContext(FeedAndPostsContext);
};
