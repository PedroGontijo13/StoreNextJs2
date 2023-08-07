import React from "react";
import useStore from "../store/store";
import ProductCardCart from "./ProductCardCart";

function Modal({ isVisible }) {
    const setModalVisibleFalse = useStore((state) => state.setModalVisibleFalse);
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-end items-end">
            <div className="w-[600px] bg-white h-full flex flex-col">
                <div className="bg-white p-2 rounded flex justify-between">
                    Modal
                    <button onClick={setModalVisibleFalse} className="text-black text-xl ml-2 flex-end">
                        X
                    </button>
                </div>
                <div className="flex-1 p-4 overflow-y-auto">
                    {/* Add the ProductCard component here */}
                    <div className="flex justify-center items-center">
                        <ProductCardCart />
                    </div>
                    <div className="flex justify-center items-center">
                        <ProductCardCart />
                    </div>
                    <div className="flex justify-center items-center">
                        <ProductCardCart />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
