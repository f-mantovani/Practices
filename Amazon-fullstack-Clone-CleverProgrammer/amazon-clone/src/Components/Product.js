import React from 'react'
import './Product.css'
import StarRateSharpIcon from '@mui/icons-material/StarRateSharp'
import { useStateValue } from '../StateProvider'

const Product = ({ id, title, image, price, rating }) => {

  const [{ basket }, dispatch ] = useStateValue()

  const addToBasket = () => {
    // dispatch the item to the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    })
  }

  return (
    <div className='product'>
      <div className='product__info'>
        <p> {title} </p>
        <p className='product__price'>
          <small>$</small>
          <strong> {price} </strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((_, index) => (
              <StarRateSharpIcon
                style={{ color: '#FFA41C', margin: "0.25em 0" }}
                fontSize='small'
                key={index}
              >
                ★
              </StarRateSharpIcon>
            ))}
        </div>
      </div>
      <img src={image} alt='...' />
      <button onClick={addToBasket}> Add to basket </button>
    </div>
  )
}

export default Product
