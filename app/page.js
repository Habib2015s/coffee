import React from 'react'
import Header from './Header'
import Mainbox from './Mainbox'
import Boxes from './Boxes'
import Offerbox from './Offerbox'
import  PriceCurves  from './PriceCurves'
export default function page  ()  {
  return (
    <div>
      <Header/>
      <Mainbox/>
      <Boxes/>
      <Offerbox/>
      <PriceCurves/>
    </div>
  )
}
