import Link from 'next/link'
import React from 'react'
import style from '../styles/Home.module.css'

export default function Home({ products }) {
  console.log(products);
  const productList = products.map(product => {
    return (
      <div className={`card ${style.card}`} key={product._id}>
        <div className="card-image">
          <img src={product.mediaUrl} />
          <span className="card-title">{product.name}</span>
        </div>
        <div className="card-content">
          <p>Rs {product.price}</p>
        </div>
        <div className="card-action">
          <a className="waves-effect waves-light btn">Add to cart <i className="fa-solid fa-cart-shopping-fast"></i></a>
        </div>
      </div>
    )
  })
  return (
    <div className={style.container}>
      {productList}
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/products');
  const data = await response.json();
  return {
    props: {
      products: data
    }
  }
}