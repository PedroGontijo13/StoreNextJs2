"use client"
import React from "react";
import { useRouter } from "next/navigation"; // Import the router object
import useStore from "../store/store";
import ProductCardCart from "./ProductCardCart";

function Modal() {
    const setModalVisibleFalse = useStore((state) => state.setModalVisibleFalse);
    const cartItems = useStore((state) => state.cart);
    const router = useRouter(); // Initialize the router object

    const calculateTotalPrice = () => {
        let TotalPrice = 0
        cartItems.forEach(item => {
            TotalPrice += item.unit_amount * item.quantity
        })
        return TotalPrice / 100
    }

    console.log(cartItems)

    async function checkout() {
        const lineItems = cartItems.map((cartItem) => ({
            price: cartItem.id,
            quantity: cartItem.quantity, // Use the item's quantity from the cart
        }));

        const res = await fetch("/api/checkout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                line_items: lineItems,
            }),
        });

        const data = await res.json();
        router.push(data.session.url);
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-end items-end">
            <div className="w-[600px] bg-white border-gray-200 dark:bg-gray-900 h-full flex flex-col">
                <div className="bg-white p-2 dark:bg-gray-900 dark:text-white rounded flex justify-between">
                    Modal
                    <button onClick={setModalVisibleFalse} className="text-black dark:text-white text-xl ml-2 flex-end">
                        X
                    </button>
                </div>
                <div className="flex-1 p-4 overflow-y-auto">
                    {/* Render the ProductCardCart components for each item in the cart */}
                    {cartItems.length === 0 ? (
                        <div className="text-center text-gray-600 p-4 dark:text-white">
                            No items available in the cart.
                        </div>
                    ) : (
                        // Render the ProductCardCart components for each item in the cart
                        cartItems.map((item) => (
                            <div key={item.id} className="flex justify-center items-center">
                                <ProductCardCart item={item} />
                            </div>
                        ))
                    )}
                    <div className="text-center text-gray-600 p-4 dark:text-white">
                        ${calculateTotalPrice()}
                    </div>
                    <div
                        onClick={checkout}
                        className="border border-solid border-slate-700 dark:bg-gray-800 dark:text-white text-xl m-4 p-6 uppercase grid place-items-center hover:opacity-60 cursor-pointer"
                    >
                        Checkout
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
