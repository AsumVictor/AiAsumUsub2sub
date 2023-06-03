import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './navbar'
import SideNav from './sideNav'
import './component.css'

function UserPortal() {
  return (
    <div className='layout'>
       <SideNav />
      <main className='bg-darkPrimary'>
        <Navbar />
        <Outlet />
      </main>

    </div>
  )
}

export default UserPortal