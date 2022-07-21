import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShawn, setCartIsShawn] = useState(false);

  const showCartHandler = () => {
    setCartIsShawn(true);
  }

  const hideCartHandler = () => {
    setCartIsShawn(false);
  }

  return (
    <CartProvider>
      {cartIsShawn && <Cart onClose={hideCartHandler} />}
      <Navbar onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
