import React, { useContext, useState, useEffect } from "react";
import {fetchMorePosts, fetchPosts} from "../services/ApiService";

const FeedPostsContext = React.createContext({});

export const FeedPostsProvider = ({ children }) => {
  const [feedPosts, setFeedPosts] = useState([]);
  const [lastPostId, setLastPostId] = useState("");

  const getPosts = async () => {
    const posts = await fetchPosts();
    setFeedPosts(posts);

    const lastPost = posts.at(-1);
    const lastPostId = lastPost.post.id;
    setLastPostId(lastPostId);
  };

  const getMorePosts = async (lastPostId) => {
    const morePosts = await fetchMorePosts(lastPostId);
    setFeedPosts(feedPosts.concat(morePosts));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <FeedPostsContext.Provider
      value={{
        feedPosts,
        getMorePosts,
        lastPostId,
      }}
    >
      {children}
    </FeedPostsContext.Provider>
  );
};

export const useFeedPostsContext = () => {
  return useContext(FeedPostsContext);
};
