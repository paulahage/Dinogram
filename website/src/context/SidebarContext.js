import React, { useContext, useState } from "react";

const SidebarContext = React.createContext();

export const SidebarProvider = ({ children }) => {
  const [openSidebarNotifications, setOpenSidebarNotifications] = useState(false);
  const [openSavedPostsBtn, setOpenSavedPostsBtn] = useState(false);

  const showNotifications = () => {
    setOpenSidebarNotifications(!openSidebarNotifications);
    setOpenSavedPostsBtn(false);
  };

  const closeSideMenus = () => {
    setOpenSidebarNotifications(false);
    setOpenSavedPostsBtn(false);
  };

  const showSavedPostsBtn = () => {
    setOpenSavedPostsBtn(!openSavedPostsBtn);
  };

  return (
    <SidebarContext.Provider
      value={{
        closeSideMenus,
        showNotifications,
        showSavedPostsBtn,
        openSavedPostsBtn,
        openSidebarNotifications,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => {
  return useContext(SidebarContext);
};
