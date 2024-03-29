import React, { useContext, useState } from "react";
import { useSinglePostContext } from "./SinglePostContext";

const PreviewProfileContext = React.createContext();

export const PreviewProfileProvider = ({ children }) => {
  const [hoverOver, setHoverOver] = useState(false);
  const [user, setUser] = useState({});
  const [mousePosition, setMousePosition] = useState({ top: 0, left: 0 });

  const { isSinglePostOpen } = useSinglePostContext();

  const handleMouseEnter = (user, e) => {
    setHoverOver(true);
    setUser(user);

    if (e) {
      const windowHeightSize = window.innerHeight;
      const windowWidthSize = window.innerWidth;

      const previewProfileHeightSize = 320;
      const previewProfileWidthSize = 380;

      const elementScreenVerticalPosition = e.clientY;
      const elementScreenHorizontalPosition = e.target.offsetLeft;

      let top = isSinglePostOpen ? elementScreenVerticalPosition : e.target.offsetTop + 18;
      let left = e.target.offsetLeft;

      if ( elementScreenVerticalPosition + previewProfileHeightSize > windowHeightSize ) {
        top = isSinglePostOpen ? previewProfileHeightSize * -1 + elementScreenVerticalPosition : previewProfileHeightSize * -1 + e.target.offsetTop;
      }

      if ( elementScreenHorizontalPosition + previewProfileWidthSize > windowWidthSize ) {
        left = e.target.offsetLeft - previewProfileWidthSize / 2;
      }

      setMousePosition({ top, left });
    }
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
      }}
    >
      {children}
    </PreviewProfileContext.Provider>
  );
};

export const usePreviewProfileContext = () => {
  return useContext(PreviewProfileContext);
};
