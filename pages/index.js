import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import ProductItem from '../components/ProductItem';
import axios from 'axios';
//import data from '../utils/data';

export async function getStaticProps() {
  const data = await fetch('http://localhost:4000/api/products');

  const products = await data.json();

  return {
    props: { products },
  };
}

export default function Home({ products }) {
  return (
    <Layout title="Home Page">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductItem product={product} key={product.slug}></ProductItem>
        ))}
      </div>
    </Layout>
  );
}
