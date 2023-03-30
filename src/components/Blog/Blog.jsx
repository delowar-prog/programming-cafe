import React from 'react'
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
const Blog = (props) => {
    const {title, coverImg, authorImg, authorName, readTime, createdDate}=props.blog
    const handleBookMark=props.handleBookMark;
    const handleReadTime=props.handleReadTime;
  return (
    <div className='single-blog'>
        <img src={coverImg} alt='cover_img'></img>
        <div className='authorAndTime'>
            <div className='author-section'>
                <img src={authorImg} alt="author_img"></img>
                <div className='author-name'>
                    <h4>{authorName}</h4>
                    <p>{createdDate}</p>
                </div>
            </div>
            <div className='reading-time'>
                <p>{readTime} min read <span className='font-awesome' onClick={()=>handleBookMark(props.blog)}><FontAwesomeIcon icon={faBookmark} /></span></p>
            </div>
        </div>
        <div className='title-markRead-container'>
            <h1 className='title'>{title}</h1>
            <p className='hash-tag'>#beginners <span className='hash-tag-right'>#programming</span></p>
            <a className='mark-read-btn' onClick={()=>handleReadTime(readTime)}>Mark as read</a>
        </div>
    </div>
  )
}

export default Blog