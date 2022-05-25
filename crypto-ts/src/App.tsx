
import { FC } from 'react';
import './App.css';
import CryptoCard from './Components/CryptoCard';
import Header from './Components/Header';

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <CryptoCard />
    </div>
  );
}

export default App;
