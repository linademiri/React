
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Product() {
    let params = useParams()
    let id = params.id

    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`/React/products-api/api/products/${id}.json`)
            .then(res => res.json())
            .then(res => setProduct(res))
    }, [id]);


    if (!product) return <p>Loading...</p>;

    return (
        <figure>

            <figcaption>{product.name} - {product.description}</figcaption>
        </figure>
    );
}

export default Product;
