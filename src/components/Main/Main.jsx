import React,{useState} from 'react'
import Blogs from '../Blogs/Blogs'
import './Main.css'
import Sidebar from '../Sidebar/Sidebar'
const Main = () => {
  const [bookMarks, setBookMarks]=useState([])
  const handleBookMark=(blog)=>{
    const newBookMarks=[...bookMarks, blog]
    setBookMarks(newBookMarks)
  }
  return (
    <div className='main-section'>
      <Blogs handleBookMark={handleBookMark}></Blogs>
       <Sidebar bookMarks={bookMarks}></Sidebar>
    </div>
  )
}

export default Main