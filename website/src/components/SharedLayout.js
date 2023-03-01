import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import TopNavbarMobile from "./TopNavbarMobile"
import { useWindowSize } from "../services/WindowSizeService";
import BottomNavbarMobile from "./BottomNavbarMobile";

const SharedLayout = () => {
  const screenSize = useWindowSize();

  if (screenSize > 765) {
    return (
      <>
        <Sidebar />
        <Outlet />
      </>
    );
  }

  return (
    <>
      <TopNavbarMobile />
      <Outlet />
      <BottomNavbarMobile />
    </>
  );
};

export default SharedLayout;
