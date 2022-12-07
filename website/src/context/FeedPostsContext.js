import React, { useContext, useState, useEffect } from "react";
import { fetchMorePosts, fetchPosts } from "../services/ApiService";

const FeedPostsContext = React.createContext({});

export const FeedPostsProvider = ({ children }) => {
  const [feedPosts, setFeedPosts] = useState([]);
  const [lastPostId, setLastPostId] = useState("");

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
  }, []);

  //console.log("feed posts", feedPosts);
  //console.log("last Post Id", lastPostId);


  return (
    <FeedPostsContext.Provider
      value={{
        feedPosts,
        getMorePosts,
        lastPostId,
        setLastPostId,
      }}
    >
      {children}
    </FeedPostsContext.Provider>
  );
};

export const useFeedPostsContext = () => {
  return useContext(FeedPostsContext);
};
