

import React, { useState, useEffect } from 'react';

function Checkout() {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);


    const removeFromCart = (id) => {
        const newCart = cart.filter(product => product.id !== id);
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
        window.dispatchEvent(new Event("storage"));
    };

    const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);

    const handleCheckout = () => {
        alert('Checkout successful!');
        setCart([]);
        localStorage.removeItem('cart');
        window.dispatchEvent(new Event("storage"));
    };

    return (
        <div className="max-w-4xl mx-auto py-10">
            <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>

            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <div className="space-y-4">
                        {cart.map(product => (
                            <div key={product.id} className="border p-4 flex justify-between items-center rounded shadow">
                                <img src={`/React/products-api/images/${product.imageUrl}`} alt={product.name} className="w-16 h-16 object-cover" />
                                <div>
                                    <h2 className="text-lg">{product.name}</h2>
                                    <p className="text-gray-600">${product.price}</p>
                                </div>
                                <button
                                    className="bg-red-500 text-white px-4 py-2 rounded"
                                    onClick={() => removeFromCart(product.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>


                    <div className="mt-6 flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow-md rounded-lg">
                        <h2 className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</h2>
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-lg shadow-md transition"
                            onClick={handleCheckout}
                        >
                            Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Checkout;

