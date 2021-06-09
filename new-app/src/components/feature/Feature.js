import React from 'react'
import FeatureContent from './FeatureContent'
import { FEATURES, COMPANIES } from '../../config/Const'

export default function Feature({isMobile}){
  return(
    <section className='feature-general-container'>
      {!isMobile &&
        <div className='feature-video-wrapper'>
          <video autoPlay muted loop>
            <source src='feature-bg.mp4' type="video/mp4"/>
          </video>
        </div>
      }
      <div className={isMobile ? 'features-general-mobile-container' : 'features-general-pc-container'}>
        <div className='why-zod'>
          <p >WHY USE ZOD.TV?</p>
        </div>
        <div className={isMobile ? 'vertical-feature-layout' : 'horizontal-feature-layout'}>
          {FEATURES.map( (feature, index) => {
            return(
              <FeatureContent
                key={feature.key}
                desc={feature.desc}
                image={feature.image}
                isMobile={isMobile}
              />
            )
          })}
        </div>
          
          
      </div>
      
        
    </section>
  )
}