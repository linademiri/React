

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const updateCartCount = () => {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            setCartCount(cart.length);
        };

        updateCartCount();

        window.addEventListener("storage", updateCartCount);
        return () => window.removeEventListener("storage", updateCartCount);
    }, []);

    return (
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
            <NavLink to="/products" className="text-2xl font-bold">Lina</NavLink>

            <nav className="space-x-4 flex items-center">
                <NavLink to="/products" className="text-gray-600 hover:text-blue-500">Home</NavLink>

                <div className="relative">
                    <NavLink to="/checkout" className="text-gray-600 hover:text-blue-500">Checkout</NavLink>
                    {cartCount > 0 && (
                        <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                            {cartCount}
                        </span>
                    )}
                </div>

                <NavLink to="/login" className="text-gray-600 hover:text-blue-500">Login</NavLink>
            </nav>
        </header>
    );
}

export default Header;

