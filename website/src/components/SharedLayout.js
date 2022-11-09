import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import SidebarCompact from "./Sidebar_Compact";


import SidebarCompact from './SidebarCompact'

const SharedLayout = () => {
  return (
    <>
      <Sidebar/>
      {/* <SidebarCompact /> */}
      <Outlet/>
    </>
  )
}

export default SharedLayout