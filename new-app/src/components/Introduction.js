import React from 'react'
export default function Introduction({isMobile}){
  return(
    <>
    {
      isMobile
      ? <section className='vertical-layout'>
          <div className='mobile-video-wrapper'>
            <video autoPlay muted loop>
              <source src='mobile-v2.mp4' type="video/mp4"/>
            </video>
          </div>
          <div className='intro-title-container'>
            <span>ZOD VIDEO TRANSCODER</span>
          </div>
          <div className='intro-desc-container'>
              <p>Do you want low cost, decentralized or top video transcoding?</p>
              <p>With Zod.TV, you don't have to choose because it both.</p>
          </div>
          <button type="button" className='intro-button'>Start Transcoding</button>
        </section>
      : <div className='horizontal-layout'>
          <div className='video-wrapper'>
            <video autoPlay muted loop>
              <source src='head_banner-v4.mp4' type="video/mp4"/>
            </video>
          </div>
          <div className='head-intro'>
            <div className='intro-title-container'>
              <span>ZOD VIDEO TRANSCODER</span>
            </div>
            <div className='intro-desc-container'>
              <p>Do you want low cost, decentralized or top video transcoding?</p>
              <p>With Zod.TV, you don't have to choose because it both.</p>
            </div>
            <button type="button" className='intro-button'>Start Transcoding</button>

          </div>
          
        </div>
    }
    </>
  )
}