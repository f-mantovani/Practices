import { FC } from 'react'
import './CryptoCard.css'
import { ICrypto } from '../Interfaces'

type Props = {
  symbol: string
  name: string
  icon_url: string
}

const CryptoCard: FC<Props> = ({ symbol, name, icon_url }) => {
  return (
    <div className='cryptoCard'>

      <div className='cryptoCard__container'>
        <div className="cryptoCard__info">
          <img src={icon_url} alt='...' />
          <h3> {name} </h3>
        </div>

        <h4> {symbol} </h4>

        <h4> Valor do trade </h4>
      </div>
      
    </div>
  )
}

export default CryptoCard