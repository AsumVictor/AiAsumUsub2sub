import React, {useRef } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './navbar'
import SideNav from './sideNav'
import './component.css'

function UserPortal() {
  const containerRef = useRef(null);

  const scrollToBottom = () => {
    const container = containerRef.current;
    container.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
   
  };

  return (
    <div className='layout'>
       <SideNav />
      <main className='bg-darkPrimary' ref={containerRef}>
        <Navbar />
        <Outlet context={scrollToBottom}/>
      </main>

    </div>
  )
}

export default UserPortal