import React from 'react'

export default function Products({ product,onAdd }) {
  return (
    <div className='products'>
    <img className='small'  src={`../assets/${product.image}`} />
    <h1>{product.name}</h1>
    <p><strong>Price</strong> ${product.price}</p>
    <button onClick={()=>onAdd(product)}>Add to Cart</button>
    </div>
  )
}
