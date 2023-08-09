'use client'
import React, { useEffect } from 'react';
import Modal from './components/Modal';
import useStore from './store/store';
import ProductCard from './components/ProductCard';
import GetStripeProducts from './utils/getStripeProducts';

export default function Home() {
  const modalVisible = useStore((state) => state.modalVisible);
  const addProducts = useStore((state) => state.addProducts);
  const products = useStore((state) => state.products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsStripe = await GetStripeProducts();

        // Add the quantity property to each product
        const productsWithQuantity = productsStripe.map(product => ({
          ...product,
          quantity: 1, // Initialize the quantity for each product
        }));

        addProducts(productsWithQuantity);
        console.log(products);
      } catch (error) {
        console.error('Error fetching Stripe products:', error);
      }
    };

    fetchProducts();
  }, [addProducts]);

  return (
    <main>
      <p>Hello</p>
      {modalVisible && (
        <Modal isVisible={modalVisible} />
      )}
      <div className='flex p-10 justify-between items-center'>
        {products && products.length > 0 ? (
          products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </main>
  );
}
