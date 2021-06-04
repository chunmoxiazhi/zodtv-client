import React from 'react'

export default function Footer({isMobile}){
  return(
    <section className={isMobile ? 'footer-mobile-layout' : 'footer-pc-layout'}>
      <div className='footer-logo-container'>
        <img
          src='logo.png'
          alt='logo'
        />
      </div>
      <div className='footer-intro-container'>
        <div className='footer-intro-text'>
          <p>Secure, zero trust, gaming and transcoding</p>
        </div>
        <div className='footer-intro-link'>
          <a href="/">Transcode</a>
          <a href="/">Game</a>
          <a href="/">Discord</a>
        </div>
      </div>
      <div className='footer-copyright-container'>
        <p>© 2021 Zod. TV. All rights reserved.</p>
      </div>
    </section>
  )
}