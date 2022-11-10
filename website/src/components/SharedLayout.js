import React from 'react'
import SidebarCompact from './SidebarCompact'
import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
  return (
    <>
      <SidebarCompact />
      <Outlet/>
    </>
  )
}

export default SharedLayout

