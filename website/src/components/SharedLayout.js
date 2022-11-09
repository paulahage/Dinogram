import React from 'react'
import { Outlet } from 'react-router-dom'

import SidebarCompact from './SidebarCompact'

const SharedLayout = () => {
  return (
    <>
      <SidebarCompact />
      <Outlet/>
    </>
  )
}

export default SharedLayout