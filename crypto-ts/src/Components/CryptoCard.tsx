import { FC } from 'react'
import './CryptoCard.css'

type Props = {
  name?: string;
  symbol?: string;
  icon_url?: string;
  rate?: number;
}

const CryptoCard: FC<Props> = () => {
  return (
    <div className='cryptoCard'>

      <div className='cryptoCard__container'>
        <div className="cryptoCard__info">
          <img src='...' alt='...' />
          <h3> Nome da crypto </h3>
        </div>

        <h4> Símbolo </h4>

        <h4> Valor do trade </h4>
      </div>
      
    </div>
  )
}

export default CryptoCard