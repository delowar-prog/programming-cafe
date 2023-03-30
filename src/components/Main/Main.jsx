import React from 'react'
import Blogs from '../Blogs/Blogs'
import './Main.css'
const Main = () => {
  return (
    <div className='main-section'>
        
            <Blogs></Blogs>
        <div className='sidebar'>
            <h1>Right sidebar</h1>
        </div>
    </div>
  )
}

export default Main