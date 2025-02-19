// import React, { useEffect, useState } from "react";

// function Products() {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         fetch("/React/products-api/api/products.json")
//             .then((res) => res.json())
//             .then((res) => setProducts(res));
//     }, []);

//     return (
//         <div className="bg-gray-100 min-h-screen">
//             {/* Navbar */}
//             <nav className="bg-green-800 text-white p-4 flex justify-between items-center">
//                 <h1 className="text-2xl font-bold">Shopcart</h1>
//                 <input
//                     type="text"
//                     placeholder="Search Product"
//                     className="px-4 py-2 text-black rounded-lg"
//                 />
//                 <div>
//                     <button className="mx-2">Account</button>
//                     <button className="mx-2">Cart</button>
//                 </div>
//             </nav>

//             {/* Banner */}
//             <div className="bg-yellow-200 text-center py-10">
//                 <h2 className="text-3xl font-semibold">Grab Up to 50% Off On Selected Headphones</h2>
//                 <button className="mt-4 px-6 py-3 bg-green-700 text-white rounded-lg">Buy Now</button>
//             </div>

//             {/* Products Grid */}
//             <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {products.map((product) => (
//                     <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
//                         <img
//                             src={`/images/${product.imageUrl}`}
//                             alt={product.name}
//                             className="w-full h-40 object-cover"
//                         />
//                         <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
//                         <p className="text-gray-600">{product.description}</p>
//                         <p className="text-green-700 font-bold mt-2">${product.price}</p>
//                         <button className="w-full bg-green-600 text-white py-2 mt-4 rounded-lg hover:bg-green-700">
//                             Add to Cart
//                         </button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Products;
// products
import React from 'react';
import { NavLink } from 'react-router-dom';


function Products() {
    const [products, setProducts] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const pageSize = 6;

    React.useEffect(() => {
        fetch("/React/products-api/api/products.json")
            .then(res => res.json())
            .then(res => setProducts(res));
    }, []);

    const filteredProducts = React.useMemo(() => {
        return products.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    }, [currentPage, products]);

    const numberOfPages = Math.ceil(products.length / pageSize);

    return (
        <div className="max-w-7xl mx-auto py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                    <div key={product.id} className="border rounded-lg shadow-lg p-4">
                        <img src={`/React/products-api/images/${product.imageUrl}`} alt={product.name} className="w-full h-48 object-cover" />
                        <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
                        <p className="text-gray-600">${product.price}</p>
                        <div className="mt-4 flex justify-between items-center">
                            <NavLink to={`/products/${product.id}`} className="text-blue-500">Details</NavLink>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-6 space-x-2">
                {[...Array(numberOfPages)].map((_, i) => (
                    <button key={i} className={`px-4 py-2 rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => setCurrentPage(i + 1)}>
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Products;
