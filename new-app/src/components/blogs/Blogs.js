import React from 'react'
import Blog from './Blog'
import {DUMMYBLOG} from '../../config/DummyData'

export default function Blogs({isMobile}){
  return(
    <section className='blogs-general-container'>
      <div className='blogs-title-container'>
        <p>BLOGS</p>
      </div>
      <div className={isMobile?'blogs-mobile-container':'blogs-container'}>
        {
          DUMMYBLOG.map(blog => {
            return(
              <Blog
                key={blog.id}
                blog={blog}
              />
            )
          })
        }
      </div>
    </section>
  )
}