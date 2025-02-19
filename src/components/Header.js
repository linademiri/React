import React from 'react'
import { NavLink } from 'react-router-dom'


function Header() {
    return (
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Lina</h1>
            <nav className="space-x-4">
                <NavLink to="/" className="text-gray-600 hover:text-blue-500">Home</NavLink>
                <NavLink to="/checkout" className="text-gray-600 hover:text-blue-500">Checkout</NavLink>
                <NavLink to="/login" className="text-gray-600 hover:text-blue-500">Login</NavLink>
            </nav>
        </header>
    );
}

export default Header