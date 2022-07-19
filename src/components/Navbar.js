import React from 'react';
import './Navbar.css';
import HeaderCardButton from './UI/HeaderCardButton';
import pizzaimage from '../assets/pizza.jpg'

function Navbar() {
    return (
        <>
            <header className='header'>
                <div className="header-container">
                    <h1>Pizza Project</h1>
                    <HeaderCardButton />
                </div>
            </header>
            <div className="main-image">
                <img src={pizzaimage} alt="Pizza main image" className="pizza-image" />
            </div>
        </>
    )
}

export default Navbar