import React from 'react'
export default function GetStart({isMobile}){
  return(
    <section className='get-start-general-container'>
      <div className={isMobile ? "get-start-content-layout mobile-screen-layout" : "get-start-content-layout pc-screen-layout"}>
        <div className='intro-title-container'>
            <span>GET STARTED IN MINUTES</span>
        </div>
        <div className='get-start-txt-container'>
          <p>Instantly try it with 600 ZOD token gift for guests.</p>
        </div>
        <div className='get-start-button-container'>
          <button>Start Transcoding</button>
        </div>
        {isMobile
          ?<div className='start-image-mobile-container'>
            <img
              src='get-start-mobile.png'
              alt='start transcoding'
            />
          </div>
          :<div className='start-image-pc-container'>
            <img
              src='get-start-pc.png'
              alt='start transcoding'
            />
          </div>
        }
        <div className='api-doc-button-container'>
          <button>API Documentation</button>

        </div>
        
      </div>
    </section>
  )
  
}