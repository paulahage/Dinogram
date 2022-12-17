import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
  return (
    <>
      <Sidebar />
      <Outlet/>
    </>
  )
}

export default SharedLayout

