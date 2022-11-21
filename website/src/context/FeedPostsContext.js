import React, { useContext, useState, useEffect} from "react";
import axios from "axios";
import { URL_FEED} from "../utils";

const FeedPostsContext = React.createContext({});

export const FeedPostsProvider = ({ children }) => {
  const [feedPosts, setFeedPosts] = useState([]);
  const [lastPostId, setLastPostId] = useState("");

  const getPosts = async (url) => {
    const response = await axios.get(url);
    const posts = response.data;
    setFeedPosts(posts);

    const lastPost = posts.at(-1);
    const lastPostId = lastPost.post.id;
    setLastPostId(lastPostId);
  };

  const getMorePosts = async (morePostsUrl) => {
    const response = await axios.get(morePostsUrl);
    setFeedPosts(feedPosts.concat(response.data));
  };

  useEffect(() => {
    getPosts(URL_FEED);
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
