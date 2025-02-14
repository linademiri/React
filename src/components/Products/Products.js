import React from 'react'
import { useEffect, useState } from 'react'

function Products() {
    const [products, setProducts] = useState([]);
    const [sampleProduct, setSampleProduct] = useState(undefined);
    useEffect(() => {
        fetch("/React/products-api/api/products.json")
            .then(res => res.json())
            .then(res => setProducts(res))
    }, [])

    useEffect(() => {
        fetch("/React/products-api/api/products/1.json")
            .then(res => res.json())
            .then(res => setSampleProduct(res))
    }, [])
    return (
        <div>
            <h1>App</h1>
            {sampleProduct && <div>{sampleProduct.name}</div>}
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <figure>
                            <img src={`/images/${product.imageUrl}`} alt={product.name} width="200px" />




                            <figcaption>{product.name}-{product.description}</figcaption>
                        </figure>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Products
