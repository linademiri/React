import React from 'react'
import { NavLink } from 'react-router-dom'


function Header() {
    return (
        <div className='header'>
            <h5>Ecommerce</h5>
            <div className="navbar">
                <NavLink to="./products">Home</NavLink>
                <NavLink to="/checkout">Checkout</NavLink>
                <NavLink to="./login">Login</NavLink>
            </div>

        </div>
    )
}

export default Header