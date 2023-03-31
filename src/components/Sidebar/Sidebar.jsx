import React from 'react'
import "./Sidebar.css"
const Sidebar = ({bookMarks, readTime}) => {
    const listItems = bookMarks.map((item) =><li className='bookMarkItem'>{item.title}</li>);
  return (
    <div className='sidebar'>
        <h4>Spent time on read : {readTime} min</h4>
        <div className='bookMarksContainer'>
            <h3>Bookmarked Blogs : {bookMarks.length}</h3>
            <ul>
                {listItems}
            </ul>
        </div>
    </div>
  )
}

export default Sidebar