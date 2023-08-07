'use client'
import React, { useState } from "react";

function ProductCardCart() {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };
    return (
        <div>
            <div className="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                <a className="mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                    <img className="h-full w-full" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" />
                </a>
                <div className="mt-4 px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl tracking-tight text-slate-900">Nike Air MX Super 2500 - Red</h5>
                    </a>
                    <div className="mt-2 mb-5 flex items-center justify-between">
                        <p>
                            <span className="text-3xl font-bold text-slate-900">$449</span>
                            <span className="text-sm text-slate-900 line-through">$699</span>
                        </p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                        <button
                            onClick={handleDecrease}
                            className="px-3 py-1 rounded bg-slate-900 text-white"
                        >
                            -
                        </button>
                        <span className="text-lg font-medium">{quantity}</span>
                        <button
                            onClick={handleIncrease}
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
