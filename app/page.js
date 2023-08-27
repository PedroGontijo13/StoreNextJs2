'use client'
import React, { useEffect } from 'react';
import Modal from './components/Modal';
import useStore from './store/store';
import ProductCard from './components/ProductCard';
import GetStripeProducts from './utils/getStripeProducts';
import Banner from './components/Banner';

export default function Home() {
  const modalVisible = useStore((state) => state.modalVisible);
  const addProducts = useStore((state) => state.addProducts);
  const products = useStore((state) => state.products);
  const cartItems = useStore((state) => state.cart); // Assuming you have a cartItems state in your store

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
      } catch (error) {
        console.error('Error fetching Stripe products:', error);
      }
    };

    // Fetch products only if the cart is empty and products haven't been fetched yet
    if (cartItems.length === 0 && products.length === 0) {
      fetchProducts();
    }
  }, [addProducts, cartItems, products]);

  return (
    <main>
      {modalVisible && (
        <Modal isVisible={modalVisible} />
      )}
      <div>
        <Banner />
      </div>
      <div className='flex flex-col md:flex-row p-10 justify-between items-center'>
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
