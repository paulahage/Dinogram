import React, { useContext, useState } from "react";

const SidebarContext = React.createContext();

export const SidebarProvider = ({ children }) => {
  const [openSidebarNotifications, setOpenSidebarNotifications] = useState(false);
  const [openLogoutBtn, setOpenLogoutBtn] = useState(false);

  const showNotifications = () => {
    setOpenSidebarNotifications(!openSidebarNotifications);
    setOpenLogoutBtn(false);
  };

  const closeSideMenus = () => {
    setOpenSidebarNotifications(false);
    setOpenLogoutBtn(false);
  };

  const showLogoutBtn = () => {
    setOpenLogoutBtn(!openLogoutBtn);
  };

  return (
    <SidebarContext.Provider
      value={{
        closeSideMenus,
        showNotifications,
        showLogoutBtn,
        openLogoutBtn,
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
