import React, { useContext, useState } from "react";
import { URL_POST_COPY_CLIPBOARD } from "../utils";

const PostOptionsMenuContext = React.createContext();

export const PostOptionsMenuProvider = ({ children }) => {
  const [isOptionsMenuOpen, setIsOptionsMenuOpen] = useState(false);
  const [userId, setUserId] = useState("");
  const [postId, setPostId] = useState("");
  const [urlCopyMessage, setUrlCopyMessage] = useState("");
  const [isCopiedToClipboard, setIsCopiedToClipboard] = useState(false);

  let usersOnStorage = JSON.parse(localStorage.getItem("unfollowIds")) || [];

  const openMenu = (post) => {
    setIsOptionsMenuOpen(true);
    setUserId(post.user.id);
    setPostId(post.post.id);
  };

  const handleCloseMenu = () => {
    setIsOptionsMenuOpen(false);
  };

  const handleUnfollow = () => {
    usersOnStorage.push(userId);
    localStorage.setItem("unfollowIds", JSON.stringify([...new Set(usersOnStorage)]));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(URL_POST_COPY_CLIPBOARD + postId);
    setUrlCopyMessage("Copied to clipboard");
    setIsCopiedToClipboard(true);

    setTimeout(() => {
      setIsCopiedToClipboard(false);
    }, 3000);
  };

  return (
    <PostOptionsMenuContext.Provider
      value={{
        openMenu,
        isOptionsMenuOpen,
        handleCloseMenu,
        handleUnfollow,
        copyToClipboard,
        urlCopyMessage,
        isCopiedToClipboard,
        userId,
        postId,
      }}
    >
      {children}
    </PostOptionsMenuContext.Provider>
  );
};

export const usePostOptionsMenuContext = () => {
  return useContext(PostOptionsMenuContext);
};
