import React from 'react'
import Modal from '../UI/Modal';
import './Cart.css'

function Cart(props) {

    const cartIems = <ul className='cart-items'>{[{ id: 'c1', name: 'Susho', amount: 2, price: 12.99 }].map((item) => <li key={item.id}>{item.name}</li>)}</ul>;

    return (
        <Modal onClose={props.onClose}>
            {cartIems}
            <div className='total'>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className='actions'>
                <button className='button-alt' onClick={props.onClose}>Close</button>
                <button className='button'>Order</button>
            </div>
        </Modal>
    )
}

export default Cart