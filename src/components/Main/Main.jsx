import React,{useState} from 'react'
import Blogs from '../Blogs/Blogs'
import './Main.css'
import Sidebar from '../Sidebar/Sidebar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Main = () => {
  const [bookMarks, setBookMarks]=useState([])
  const [readTime, setReadTime]=useState(0)
  const handleBookMark=(blog)=>{
    const newBookMarks=[...bookMarks, blog]
    const findBookMarkById=bookMarks.find(item=>item.id===blog.id)
    if(findBookMarkById){
      toast("This Item allready added")
    }else{
      setBookMarks(newBookMarks)
    }
  }
  const handleReadTime=(time)=>{
    setReadTime((previousTime)=>previousTime+time)
  }
  return (
    <div className='main-section'>
      <Blogs handleBookMark={handleBookMark} handleReadTime={handleReadTime}></Blogs>
       <Sidebar bookMarks={bookMarks} readTime={readTime}></Sidebar>
       <ToastContainer />
    </div>
  )
}

export default Main