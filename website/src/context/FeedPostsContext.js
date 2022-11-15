import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { URL_FEED } from "../utils";

const FeedPostsContext = React.createContext();

export const FeedPostsProvider = ({ children }) => {
  const [feedPosts, setFeedPosts] = useState([]);

  const getPosts = async (url) => {
    const response = await axios.get(url);
    setFeedPosts(response.data);
  };

  useEffect(() => {
    getPosts(URL_FEED);
  }, []);

  return <FeedPostsContext.Provider value={{ feedPosts }}>
    {children}
  </FeedPostsContext.Provider>;
};

export const useFeedPostsContext = () => {
  return useContext(FeedPostsContext);
};
