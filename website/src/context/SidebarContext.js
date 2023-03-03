import React, { useContext, useState } from "react";

const SidebarContext = React.createContext();

export const SidebarProvider = ({ children }) => {
  const [toggleSearchSideWindow, setToggleSearchSideWindow] = useState(false);
  const [openSavedPostsBtn, setOpenSavedPostsBtn] = useState(false);

  const showSearchSideWindow = () => {
    setToggleSearchSideWindow(!toggleSearchSideWindow);
    setOpenSavedPostsBtn(false);
  };

  const closeSideMenus = () => {
    setToggleSearchSideWindow(false);
    setOpenSavedPostsBtn(false);
  };

  const showSavedPostsBtn = () => {
    setOpenSavedPostsBtn(!openSavedPostsBtn);
  };

  return (
    <SidebarContext.Provider
      value={{
        closeSideMenus,
        showSearchSideWindow,
        showSavedPostsBtn,
        openSavedPostsBtn,
        toggleSearchSideWindow,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => {
  return useContext(SidebarContext);
};
