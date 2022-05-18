import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { auth } from "../utils/firebase";

const Login = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const signIn = e => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        navigate('/')
      })
      .catch(error => alert(error.message))
      
    setEmail('')
    setPassword('')
  }

  const register = e => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate('/')
        }
      })
      .catch(error => alert (error.message))

    setEmail('')
    setPassword('')
  }

  return (
    <div className='login'>
      <Link to='/'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
          alt=''
          className='login__logo'
        />
      </Link>
      
      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          
          <h5>Password</h5>
          <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button type="submit" className="login__signInButton" onClick={ signIn }>Sign In</button>
        </form>

        <p>
         By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
         see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button type="submit" className="login__registerButton" onClick={ register } >Create your Amazon Account</button>

      </div>
    </div>
 
  )
}

export default Login
