import React from 'react'
import { useLoaderData, Link } from "react-router-dom";
import "../pages/Home.css"

export default function Home() {
  return(
    <div className='home'>
      <div className='hero'>
        <h1>Explore space from the comfort <br/>of your home</h1>
      </div>
    </div>
  )
}

