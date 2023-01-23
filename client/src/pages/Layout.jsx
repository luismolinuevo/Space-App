import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Home from "../pages/Home"

export default function Layout() {
  return (
    <div>
        <Navbar/>
        {/* <Home/> */}
        <Outlet/>
    </div>

  )
}
