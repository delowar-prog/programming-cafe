import React from 'react'
import "./Sidebar.css"
const Sidebar = ({bookMarks}) => {
    const listItems = bookMarks.map((item) =><li>{item.title}</li>);
  return (
    <div className='sidebar'>
        <h4>Spent time on read : 177 min</h4>
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