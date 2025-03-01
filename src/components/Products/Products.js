import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

function Products() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate();
    const pageSize = 6;

    useEffect(() => {
        fetch("/React/products-api/api/products.json")
            .then(res => res.json())
            .then(res => setProducts(res));
    }, []);

    const searchedProducts = useMemo(() => {
        return products.filter(product =>
            product.name.toLowerCase().includes(searchTerm)
        );
    }, [searchTerm, products]);

    const filteredProducts = useMemo(() => {
        return searchedProducts.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    }, [currentPage, searchedProducts]);

    const numberOfPages = Math.ceil(searchedProducts.length / pageSize);

    return (
        <div className="max-w-7xl mx-auto py-10">

            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search"
                    className="border p-2 rounded w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                    <div
                        key={product.id}
                        className="border rounded-lg shadow-lg p-4 cursor-pointer"
                        onClick={() => navigate(`/products/${product.id}`)}
                    >
                        <img
                            src={`/React/products-api/images/${product.imageUrl}`}
                            alt={product.name}
                            className="w-full h-48 object-contain max-w-[200px]"
                        />
                        <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
                        <p className="text-gray-600">${product.price}</p>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6 space-x-2">
                {[...Array(numberOfPages)].map((_, i) => (
                    <button
                        key={i}
                        className={`px-4 py-2 rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        onClick={() => setCurrentPage(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Products;

