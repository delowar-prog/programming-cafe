import React from 'react'
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
const Blog = (props) => {
    const {id, title, coverImg, authorImg, authorName}=props.blog
    const handleBookMark=props.handleBookMark;
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
            <div className='reading-time'>
                <p>05 min read <span className='font-awesome' onClick={()=>handleBookMark(props.blog)}><FontAwesomeIcon icon={faBookmark} /></span></p>
            </div>
        </div>
        <div className='title-markRead-container'>
            <h1 className='title'>{title}</h1>
            <p className='hash-tag'>#beginners <span className='hash-tag-right'>#programming</span></p>
            <a className='mark-read-btn'>Mark as read</a>
        </div>
    </div>
  )
}

export default Blog