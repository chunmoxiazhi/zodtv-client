import React from 'react'
import {PROCESS} from '../config/Const'

export default function ReferralProgram({isMobile}){
  return(
    <>
      {isMobile
        ?<div className='referral-content-mobile-layout'>
            <div className='referral-title'>
              <p>REFERRAL PROGRAM</p>
            </div>
            <div className='steps-container'>
              {PROCESS.map(step=>{
                return(
                  <div className='step-container' key={step.key}>
                    <div className='step-number-container'>
                      <div className='step-number'>
                        <p>{step.key}</p>
                      </div>
                    </div>
                    <div className='step-image-container'>
                      <div className='step-image'>
                        <img
                          src={step.image}
                          alt={step.image}
                        />
                      </div>
                    </div>
                    <div className='col-md-4 step-description-container'>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          :<div className='referral-content-layout'>
            <div className='referral-title'>
              <p>REFERRAL PROGRAM</p>
            </div>
            <div className='steps-container'>
              <div className='step-numbers-container'>
                {PROCESS.map(step => {
                  return(
                    <div className='col-md-4 step-number-container' key={step.key}>
                      <div className='step-number'>
                        <p>{step.key}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className='step-images-container'>
                {PROCESS.map(step => {
                  return(
                    <div className='col-md-4 step-image-container' key={step.image}>
                      <div className='step-image'>
                        <img
                          src={step.image}
                          alt={step.image}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className='step-descriptions-container'>
                {PROCESS.map(step => {
                  return(
                    <div className='col-md-4 step-description-container' key={step.desc}>
                      <p>{step.desc}</p>
                    </div>
                  )
                })}
              </div>
              <div className='ambassador-button-container'>
                <button>Become an Ambassador</button>
              </div>

            </div>
            
          </div>
          
      }
      
    </>
  )
}
