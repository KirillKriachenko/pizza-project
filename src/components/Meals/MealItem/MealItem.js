import React, { useContext } from 'react'
import CartContext from '../../../store/cart-context';
import './MealItem.css'
import MenuItemForm from './MealItemForm'


function MealItem(props) {
    const price = `$${props.price.toFixed(2)}`;

    const cartCtx = useContext(CartContext);

    const addItemToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };

    return (
        <li className='meal'>
            <div>
                <h3>{props.name}</h3>
                <div className='description'>{props.description}</div>
                <div className='price'>{price}</div>
            </div>
            <div>
                <MenuItemForm onAddToCart={addItemToCartHandler} id={props.id} />
            </div>
        </li>
    )
}

export default MealItem