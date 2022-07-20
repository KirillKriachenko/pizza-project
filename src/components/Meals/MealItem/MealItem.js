import React from 'react'
import './MealItem.css'
import MenuItemForm from './MealItemForm'


function MealItem(props) {
    const price = `$${props.price.toFixed(2)}`;

    return (
        <li className='meal'>
            <div>
                <h3>{props.name}</h3>
                <div className='description'>{props.description}</div>
                <div className='price'>{price}</div>
            </div>
            <div>
                <MenuItemForm id={props.id} />
            </div>
        </li>
    )
}

export default MealItem