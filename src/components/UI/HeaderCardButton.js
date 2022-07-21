import './HeaderCardButton.css'
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const HeaderCardButton = props => {

  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return <button className="button" onClick={props.onClick}>
    <span><i class="icon fa-solid fa-cart-arrow-down"></i></span>
    <span>Your Cart</span>
    <span className="badge">{numberOfCartItems}</span>
  </button>
};

export default HeaderCardButton