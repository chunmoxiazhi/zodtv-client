import React from 'react'

export default function Comparison( {companyObj} ){
  const zodTv = companyObj.name === 'logo.png' ? true : false
  const decorStr = (unitPrice) =>{
    const biggerStr = unitPrice.slice(0,2)
    const remainStr = unitPrice.slice(2, unitPrice.length)
    if (unitPrice === 'N/A') {
      return (
        <div className='unit-price row'>
          <p className='biggerStr'>{unitPrice}</p>
        </div>
      )
    }
    else{
      return(
        <div className='unit-price row'>
          <p className='biggerStr'>{biggerStr}</p>
          <p className='remainStr'>{remainStr}</p>
        </div>
      )
    }
  }
  const produceExampleStr = (examples) => {
    if (examples.length === 0) return
    return examples.join(',')
  }
  const producePurchaseButton = () => {
    if (!zodTv) return
    return(
      <button className='purchase-button'>
        Buy Now !
      </button>
    )
  }
  return(
    <>
      <div className={zodTv ? 'zodTv-data-container' : 'competitor-data-container'}>
        {zodTv 
          ? <img src={companyObj.name} alt={companyObj.name}/>
          :<h1>{companyObj.name}</h1>
        }
        <p className='price'>{companyObj.price}</p>
        <div className='services-detail-container'>
          {companyObj.units.map( (unit, index) =>{
            return(
              <div className='service-detail' key={index}>
                {decorStr(unit.unitPrice)}
                <div className='unit-desc'>
                  <p>{unit.unitDesc}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className='examples'>
          <p>{produceExampleStr(companyObj.examples)}</p>
        </div>
        <div className='purchase-button-container'>
          {producePurchaseButton()}
        </div>
      </div>
      
    </>
  )
}