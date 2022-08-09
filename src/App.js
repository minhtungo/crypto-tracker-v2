import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Account from './pages/Account';

import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [coins, setCoins] = useState([]);

  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=15&page=1&sparkline=true';

  useEffect(() => {
    const fetchCoins = async () => {
      const response = await axios.get(url);
      setCoins(response.data);
    };
    fetchCoins();
  }, []);

  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home coins={coins} />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
