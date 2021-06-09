import React from 'react'
export default function FeatureContent({
  desc,
  image,
  isMobile
}){
  // {isMobile ? 'feature-content-container col-md-10' : 'feature-content-container col-md-3'}
  return(
    <>
      <div className='feature-content-container'>
        <img
          src={image}
          alt={desc}
        />
        <p>{desc}</p>
      </div>
    </>
  )
}