import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'
import Head from './Head'

const Body = () => {
  return (
    <div className='grid grid-flow-col'>
      <SideBar />
      <Outlet />
    </div>
  )
}

export default Body
