import { useEffect, useState } from 'react'
import { useStateValue } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { Link, useNavigate } from 'react-router-dom'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../reducer'
import axios from '../axios'
import { db } from '../utils/firebase'
import './Payment.css'

const Payment = () => {

  const [{ basket, user }, dispatch ] = useStateValue()
  
  const stripe = useStripe()
  const elements = useElements()
  
  const [error, setError] = useState(null)

  const [disabled, setDisabled] = useState(false) 
  const [processing, setProcessing] = useState(false) 
  const [succeeded, setSucceeded] = useState(false) 

  const [clientSecret, setClientSecret] = useState(true) 

  const navigate = useNavigate()

  useEffect(() => {
    // generate special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const { data } = await axios({
        method: 'post',
        // Stripe expects the total in a currencies subunits 
        // => the subunit should accomodate the 'cents' also, for example
        url: `payments/create?total=${getBasketTotal(basket) * 100}`,
      })
      setClientSecret(data.clientSecret)
    }

    getClientSecret()

  }, [basket])

  console.log('Client Secret is >>>>', clientSecret)

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {
      // paymentIntent = paymentConfirmation
      
      db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        })

      setSucceeded(true);
      setError(null);
      setProcessing(false);

      dispatch({
        type: 'EMPTY_BASKET'
      })

      navigate('/orders', { replace: true })
    })
  } 

  const handleChange = event => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '')
  }

  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>
          Checkout (<Link to='/checkout'> {basket?.length} items </Link>)
        </h1>
        {/* Payment section - Delivery address  */}
          
          <div className='payment__section'>
            
            <div className='payment__title'>
              <h3>Delivery Address</h3>
            </div>

            <div className='payment__address'>
              <p> {user?.email} </p>
              <p> 123 React Lane </p>
              <p> Los Angeles, CA </p>
            </div>

          </div>

        {/* Payment section - Review Items */}

          <div className='payment__section'>

            <div className='payment__title'>
              <h3> Review items and delivery</h3>
            </div>

            <div className='payment__items'>
              {/* Products in checkout */}
              {basket?.map(product => 
                <CheckoutProduct {...product} />
              )}
            </div>


          </div>

        {/* Payment section - Payment Method */}

          <div className='payment__section'>
            
            <div className='payment__title'>
                <h3> Payment Method</h3>
            </div>

            <div className='payment__details'>
              {/* Stripe magic hehehe */}

              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />
                
                <div className='payment__priceContainer'>
                  <CurrencyFormat 
                    renderText={(value) => (
                      <h3> Order Total: {value} </h3>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                  />

                <button disabled={processing || disabled || succeeded}>
                  {processing ? <p>Processing</p> : 'Buy Now' }
                </button>

                </div>
                
                {error && <div> {error} </div>}

              </form>

            </div>

          </div>

      </div>
    </div>
  )
}

export default Payment