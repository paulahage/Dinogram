import React, { useContext, useState} from "react";

const SinglePostContext = React.createContext();

export const SinglePostProvider = ({ children }) => {
  const [isSinglePostOpen, setIsSinglePostOpen] = useState(false);

  const toggleSinglePost = () => {
    setIsSinglePostOpen(!isSinglePostOpen);
  };


  return <SinglePostContext.Provider value={{toggleSinglePost, isSinglePostOpen}}>{children}</SinglePostContext.Provider>;
};

export const useSinglePostContext = () => {
  return useContext(SinglePostContext);
};
