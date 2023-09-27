"use client"
import React from 'react'
import useStore from '../store/store'

export default function ProductPage() {
    const product = useStore((state) => state.product);
    const setModalVisible = useStore((state) => state.setModalVisible);
    const addItemToCart = useStore((state) => state.addItemToCart);
    
    // Check if product is null
    if (!product || !product.product || !product.product.product.name) {
        // You can handle the case when product is null here
        // For example, you can display an error message or redirect to another page
        return <p>Product not found</p>;
    }

    const handleAddToCart = () => {
        // Call the addItemToCart function with the product to be added to the cart
        setModalVisible();
        addItemToCart(product);
    };

    return (
        <div className="flex flex-col p-4">
            <div className="grid p-2 shadow-2xl grid-cols-1 md:grid-cols-2 w-full max-w-[1000px] mx-auto">
                <div className="">
                    <img src={product.product.product.images} alt={product.product.product.name} className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-2 p-4">
                    <div className="flex md:flex-col md:items-start text-xl items-center justify-between gap-2">
                        <h3>{product.product.product.name}</h3>
                        <p className="md:text-base">${product.product.product.cost / 100}</p>
                    </div>
                    <p className="text-sm flex-1">{product.product.product.description}</p>
                    <button
                        onClick={handleAddToCart}
                        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
