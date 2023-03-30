import React, { useEffect, useState } from 'react'
import Blog from '../Blog/Blog'
import './Blogs.css'

const Blogs = ({handleBookMark, handleReadTime}) => {
    const [blogs, setBlogs]=useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    }, [])
  return (
    <div className='blogs-container'>
        {blogs.map(blog=><Blog blog={blog} key={blog.id} handleBookMark={handleBookMark} handleReadTime={handleReadTime}></Blog>)}
    </div>
  )
}

export default Blogs