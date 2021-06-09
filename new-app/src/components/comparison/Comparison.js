import React from 'react'
import ComparisonMobile from './ComparisonMobile'
import ComparisonPc from './ComparisonPc'
import {COMPANIES} from '../../config/Const'

export default function Comparison({isMobile}){
  return(
    <section className='price-comparison-general-container'>
      <div className='price-comparison'>
        <p >PRICE COMPARISON</p>
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
              <ComparisonPc
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