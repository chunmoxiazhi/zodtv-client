import React from 'react'
import FeatureContent from './FeatureContent'
import Comparison from './Comparison'
import ComparisonMobile from'./ComparisonMobile';
import { FEATURES, COMPANIES } from '../../config/Const'

export default function Feature({isMobile}){
  return(
    <section >
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
          {FEATURES.map( feature => {
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
          
          <div className='price-comparison'>
            <p >PRICE COMPARISON</p>
          </div>
      </div>
      <div className={isMobile ? 'mobile-layout' : 'pc-layout'}>
        {isMobile
          ?<>
            <ComparisonMobile
              companies={COMPANIES}
            />
          </>
          :<>
            {COMPANIES.map( (company, index) => {
              return(
                <Comparison
                  key={company.key}
                  companyObj={company}
                />
              )
            })}
          </>
          
        }
        
      </div>
        
    </section>
  )
}