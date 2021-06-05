import React from 'react'
import Header from '../../components/Header'
import Introduction from '../../components/Introduction'
import Hero from '../../components/Hero'
import Feature from '../../components/feature/Feature'
import GetStart from '../../components/GetStart'
import ReferralProgram from '../../components/ReferralProgram'
import Blogs from '../../components/blogs/Blogs'
import Footer from '../../components/Footer'
import { useMediaQuery } from 'react-responsive'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Product() {
  const isMobile = useMediaQuery({ query: `(max-width: 700px)` })
  return(
    <section className='product-container'>
      <div className={isMobile ? "mobile-screen-layout" : "pc-screen-layout"}>
        <Header
          isMobile = {isMobile}
        />
      </div>
      <div className={isMobile ? "mobile-screen-layout" : "pc-screen-layout"}>
        <Introduction
          isMobile = {isMobile}
        />
      </div>
      <div className="mobile-screen-layout">
        <Hero
          isMobile = {isMobile}
        />
      </div>
      <div className={isMobile ? "mobile-screen-layout" : "pc-screen-layout"}>
        <Feature
          isMobile = {isMobile}
        />
      </div>
      <div className="mobile-screen-layout">
        <GetStart
          isMobile = {isMobile}
        />
      </div>
      
      <div className={isMobile ? "mobile-screen-layout" : "pc-screen-layout"}>
        <ReferralProgram
          isMobile = {isMobile}
        />
      </div>
      
      <div className={isMobile ? "mobile-screen-layout" : "pc-screen-layout"}>
        <Blogs
          isMobile = {isMobile}
        />
      </div>
      <div className="mobile-screen-layout">
        <Footer
          isMobile = {isMobile}
        />
      </div>
    </section>
  )
}