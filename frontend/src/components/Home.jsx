import React from 'react'
import LandingPage from './LandingPage'

import Category from './Category'
import Product from './Product'
import AboutUs from './AboutUs'


export default function Home() {
  return (
    <div>
      <LandingPage></LandingPage>
      <Category></Category>
      <h1 className='HProduct'>Product</h1>
      <div className="section">
        <Product Margin={{ "margin": "100px" }}></Product>
      </div>
      <AboutUs></AboutUs>
      
    </div>
  )
}
