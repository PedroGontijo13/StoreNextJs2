'use client'
import React from "react";
import useStore from "../store/store";

function ProductCardCart({ item }) {
    const handleIncrease = useStore((state) => state.increaseCartItemQuantity)
    const handleDecrease = useStore((state) => state.decreaseCartItemQuantity)

    console.log(item)

    return (
        <div>
            <div className="group dark:bg-gray-800 dark:text-white dark:border-gray-800 my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                <a className="mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                    <img className="h-full w-full" src={item.product.images[0]} alt="product image" />
                </a>
                <div className="mt-4 px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl tracking-tight text-slate-900 dark:text-white dark:border-gray-800">{item.name}</h5>
                    </a>
                    <div className="mt-2 mb-5 flex items-center justify-between">
                        <p>
                            <span className="text-3xl font-bold text-slate-900 dark:text-white dark:border-gray-800">${item.unit_amount / 100}</span>
                        </p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                        <button
                            onClick={() => handleDecrease(item)}
                            className="px-3 py-1 rounded bg-slate-900 text-white"
                        >
                            -
                        </button>
                        <span className="text-lg font-medium">{item.quantity}</span>
                        <button
                            onClick={() => handleIncrease(item)}
                            className="px-3 py-1 rounded bg-slate-900 text-white"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCardCart;
