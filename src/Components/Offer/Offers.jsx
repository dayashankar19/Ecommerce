import React from 'react'
import './Offer.css'
import exclusive_image from '../Asset/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>EXCLUSIVE</h1>
            <h1>Offers for you</h1>
            <p>ONLY ON BEST SELLER PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className='offers-right'>
            <img src={exclusive_image} alt=''/>
        </div>
    </div>
  )
}

export default Offers