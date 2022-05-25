import React, { FC } from 'react'
import './Header.css'

type Props = {}

const Header: FC<Props> = () => {
  return (
    <div className='header'>
      <h1>This is the header for the crypto displayer app</h1>

      <h3>Here it'll be some info</h3>

      <div className='header__Buttons'>
        <div> Show me the value </div>

        <div> Refresh button </div>

      </div>
    </div>
  )
}

export default Header