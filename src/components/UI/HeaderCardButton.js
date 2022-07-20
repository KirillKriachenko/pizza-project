import './HeaderCardButton.css'

const HeaderCardButton = props => {
  return <button className="button" onClick={props.onClick}>
    <span><i class="icon fa-solid fa-cart-arrow-down"></i></span>
    <span>Your Cart</span>
    <span className="badge">3</span>
  </button>
};

export default HeaderCardButton