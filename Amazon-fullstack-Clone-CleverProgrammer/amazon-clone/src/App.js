import './App.css'
import Header from './Components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Checkout from './Components/Checkout'
import Login from './Components/Login'
import { useEffect } from 'react'
import { auth } from './utils/firebase'
import { useStateValue } from './StateProvider'
import Payment from './Components/Payment'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from './Components/Orders'

const promise = loadStripe(
  'pk_test_51L0UeuDQVPBFF3vBsDj4zKUvBES6amSVFI00OrxCqio0a3kMsgMyeTtHNcjM17Dy5O8P7dCCnwo0dThc67k5xCS600JDz9hdXq'
)

function App() {
  const [{ basket, user }, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])

  return (
    // BEM convention
    <BrowserRouter>
      <div className='app'>
        <Header />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/payment' element={
            <Elements stripe={promise} >
              <Payment />
            </Elements> } />
            <Route path='/orders' element={<Orders />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
