import React, { useContext, useState } from "react";

const PostOptionsMenuContext = React.createContext();

export const PostOptionsMenuProvider = ({ children }) => {
  const [isOptionsMenuOpen, setIsOptionsMenuOpen] = useState(false);
  const [userId, setUserId] = useState("");

  let usersOnStorage = JSON.parse(localStorage.getItem("unfollowIds")) || [];

  const openMenu = (post) => {
    setIsOptionsMenuOpen(true);
    setUserId(post.user.id);
  };

  const handleCloseMenu = () => {
    setIsOptionsMenuOpen(false);
  };

  const handleUnfollow = () => {
    usersOnStorage.push(userId);
    localStorage.setItem("unfollowIds",JSON.stringify([...new Set(usersOnStorage)]));
  };

  return (
    <PostOptionsMenuContext.Provider
      value={{ openMenu, isOptionsMenuOpen, handleCloseMenu, handleUnfollow }}
    >
      {children}
    </PostOptionsMenuContext.Provider>
  );
};

export const usePostOptionsMenuContext = () => {
  return useContext(PostOptionsMenuContext);
};
