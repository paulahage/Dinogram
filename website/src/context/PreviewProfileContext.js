import React, { useContext, useState } from "react";

const PreviewProfileContext = React.createContext();

export const PreviewProfileProvider = ({ children }) => {
  const [hoverOver, setHoverOver] = useState(false);
  const [hoverUserId, setHoverUserId] = useState("");

  const handleMouseEnter = (e) => {
    console.log("enter", e);

    setHoverOver(true);
    setHoverUserId(e.target.id);
  };

  const handleMouseLeave = (e) => {
    console.log("out", e);

    if (e.target.id === "preview_profile") {
      setHoverOver(false);
    }
  };

  return (
    <PreviewProfileContext.Provider
      value={{
        handleMouseEnter,
        hoverOver,
        handleMouseLeave,
        hoverUserId,
      }}
    >
      {children}
    </PreviewProfileContext.Provider>
  );
};

export const usePreviewProfileContext = () => {
  return useContext(PreviewProfileContext);
};
