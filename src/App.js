import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { useState } from 'react';

function App() {
  const [cartIsShawn, setCartIsShawn] = useState(false);

  const showCardHandler = () => {
    setCartIsShawn(true);
  }

  const hideCardHandler = () => {
    setCartIsShawn(false);
  }

  return (
    <>
      {cartIsShawn && <Cart onClose={hideCardHandler} />}
      <Navbar onShowCart={showCardHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
