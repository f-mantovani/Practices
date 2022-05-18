import React from 'react'
import { useStateValue } from '../StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

const Checkout = () => {

const[{basket}] = useStateValue()

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt='banner'
          className='checkout__ad'
        />
        <div>
          <h2 className="checkout__title">
            Your Shopping Basket
          </h2>

          {basket?.map(product => <CheckoutProduct key={product.id} {...product} /> )}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
