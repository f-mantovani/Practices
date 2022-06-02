
import { FC, useState } from 'react';
import './App.css';
import CryptoCard from './Components/CryptoCard';
import Header from './Components/Header';
import cryptoList from './data/list.json'
import { ICrypto } from './Interfaces';


const App: FC = () => {

  const [crypto, setCrypto] = useState(Object.values(cryptoList.crypto))

  console.log(crypto)

  return (
    <div className="App">
      <Header />
      {crypto.map((crypto, key: number) =>  { return <CryptoCard {...crypto} key={key} />}  ) }

    </div>  
  );
}

export default App;
