import React from 'react'
import CartContext from './cart-context'
import { useState, useReducer } from 'react';

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updateItems = state.items.concat(action.item);
        const updatedTotalAmoutn = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updateItems,
            totalAmount: updatedTotalAmoutn
        };
    }
    return defaultCartState;
};

function CartProvider(props) {

    const [cartState, dishpatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dishpatchCartAction({ type: 'ADD', item: item });
    };
    const removeItemFromCartHandler = (id) => {
        dishpatchCartAction({ type: 'REMOVE', id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider