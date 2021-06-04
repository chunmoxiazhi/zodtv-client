import React from 'react'

export default function Hero({isMobile}){
  return(
    <section className={isMobile ? 'hero-mobile-container':'hero-container'}>
      <p>Zod.TV is a decentralized video platform built on the NEAR blockchain.</p>
    </section>
  )
}