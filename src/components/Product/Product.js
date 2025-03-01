

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Product() {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const [addedToCart, setAddedToCart] = useState(false);

    useEffect(() => {
        fetch(`/React/products-api/api/products/${id}.json`)
            .then(res => res.json())
            .then(res => setProduct(res));
    }, [id]);

    const addToCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const productExists = cart.some(item => item.id === product.id);

        if (!productExists) {
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
            setAddedToCart(true);
            window.dispatchEvent(new Event("storage"));
        }
    };

    if (!product) return <p>Loading...</p>;

    return (
        <div className='h-full '>
            <div className='flex items-center gap-7 mt-4'>
                <img className='max-w-xs' src={`/React/products-api/images/${product.imageUrl}`} alt={product.name} />
                <div>
                    <h2 className='font-bold'>{product.name}</h2>
                    <p className='mt-2'>{product.description}</p>
                    <p className='mt-2'>${product.price}</p>
                    <button
                        className={`mt-2 px-4 py-2 rounded ${addedToCart ? 'bg-gray-500' : 'bg-blue-500 text-white'}`}
                        onClick={addToCart}
                        disabled={addedToCart}
                    >
                        {addedToCart ? "Added" : "Add to Cart"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Product;

