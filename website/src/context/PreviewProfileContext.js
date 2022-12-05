import React, { useContext, useState } from "react";

const PreviewProfileContext = React.createContext();

export const PreviewProfileProvider = ({ children }) => {
  const [hoverOver, setHoverOver] = useState(false);
  const [user, setUser] = useState({});
  const [mousePosition, setMousePosition] = useState({ top: 0, left: 0 });
  const [postId, setPostId] = useState("");

  const handleMouseEnter = (e, user, postId) => {
    setHoverOver(true);
    setUser(user);
    setPostId(postId);
    setMousePosition({ top: e.target.offsetTop + 22, left: 65 });
  };

  const handleMouseLeave = () => {
    setHoverOver(false);
  };

  return (
    <PreviewProfileContext.Provider
      value={{
        handleMouseEnter,
        hoverOver,
        handleMouseLeave,
        user,
        mousePosition,
        postId
      }}
    >
      {children}
    </PreviewProfileContext.Provider>
  );
};

export const usePreviewProfileContext = () => {
  return useContext(PreviewProfileContext);
};
