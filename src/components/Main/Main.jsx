import React,{useState} from 'react'
import Blogs from '../Blogs/Blogs'
import './Main.css'
import Sidebar from '../Sidebar/Sidebar'
const Main = () => {
  const [bookMarks, setBookMarks]=useState([])
  const [readTime, setReadTime]=useState(0)
  const handleBookMark=(blog)=>{
    const newBookMarks=[...bookMarks, blog]
    setBookMarks(newBookMarks)
  }
  const handleReadTime=(time)=>{
    const newReadTime=readTime+time;
    console.log(newReadTime)
  }
  return (
    <div className='main-section'>
      <Blogs handleBookMark={handleBookMark} handleReadTime={handleReadTime}></Blogs>
       <Sidebar bookMarks={bookMarks}></Sidebar>
    </div>
  )
}

export default Main