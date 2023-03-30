import React from 'react'
import './Blog.css'
const Blog = (props) => {
    const {id, title, coverImg, authorImg, authorName}=props.blog
  return (
    <div className='single-blog'>
        <img src={coverImg} alt='cover_img'></img>
        <div className='authorAndTime'>
            <div className='author-section'>
                <img src={authorImg} alt="author_img"></img>
                <div className='author-name'>
                    <h4>{authorName}</h4>
                    <p>Mar 14 (4 Days ago)</p>
                </div>
            </div>
            <div className='reading-time'>kdjf</div>
        </div>
        <div className='title'>
        <h2></h2>
        </div>
    </div>
  )
}

export default Blog