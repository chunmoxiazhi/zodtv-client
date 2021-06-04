import React from 'react'

export default function Blog({blog}){
  return(
    <div className='blog-container'>
      <img
        src={blog.image}
        alt={blog.image}
      />
      <h3>{blog.title}</h3>
      <div className='blog-content-divider'>.. </div>
      <h5>{blog.date}</h5>
      <div className='blog-note-container'>
        <p>{blog.note}</p>
      </div>
      <div className='blog-button-container'>
        <button>Read More</button>
      </div>
    </div>
  )
}