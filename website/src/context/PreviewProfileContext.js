import React, { useContext, useState } from "react";

const PreviewProfileContext = React.createContext();

export const PreviewProfileProvider = ({ children }) => {
  const [hoverOver, setHoverOver] = useState(false);
  const [user, setUser] = useState({});
  const [mousePosition, setMousePosition] = useState({ top: 0, left: 0 });

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

      let top = e.target.offsetTop + 18;
      let left = e.target.offsetLeft;

      if (
        elementScreenVerticalPosition + previewProfileHeightSize >
        windowHeightSize
      ) {
        top = previewProfileHeightSize * -1 + e.target.offsetTop;
      }

      if (
        elementScreenHorizontalPosition + previewProfileWidthSize >
        windowWidthSize
      ) {
        left = 0;
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
