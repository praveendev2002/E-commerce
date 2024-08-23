import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const[searchParams,setSearchParams]=useSearchParams()

  useEffect(()=>{
    fetch(process.env.REACT_APP_API_URL+'/products?'+searchParams)
    .then(res=>res.json())
    .then(res=> setProducts(res.products))
  },[searchParams])
  return (
    <>
    <h1 id="products_heading">Latest Products</h1>

    <section id="products" class="container mt-5">
      <div class="row">
      {products.map(product => <ProductCard product={product}/>)}

        
      

     
       
      </div>
    </section>

    
    </>
  );
};

export default Home;
