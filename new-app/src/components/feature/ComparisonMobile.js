import React, { useState, useEffect, useCallback } from 'react'
import { useEmblaCarousel } from "embla-carousel/react";
export default function ComparisonMobile({companies}){
  const [viewportRef, embla] = useEmblaCarousel({
    align: "center",
    skipSnaps: false,
    startIndex: 1,
    inViewThreshold: 0.1,
    loop: false
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);




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
  const producePurchaseButton = (companyObj) => {
    if (!companyObj.isZod) return
    return(
      <button className='purchase-button'>
        Buy Now !
      </button>
    )
  }
  return(
    <div className='embla' ref={viewportRef}>
      <div className="embla__container">
        {
          companies.map((companyObj, index) => {
            return(
              <div className={companyObj.isZod ? 'zodTv-data-container embla__slide' : 'competitor-data-container embla__slide'} key={index}>
                {companyObj.isZod 
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
                  {producePurchaseButton(companyObj)}
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )

}