import React from 'react'
import './Header.css'
import Profile from '../../images/profile-pic.jpg'
const Header = () => {
  return (
    <div className='header'>
        <h2>Programming Cafe</h2>
        <img src={Profile} alt='profile-pic'></img>
    </div>
  )
}

export default Header