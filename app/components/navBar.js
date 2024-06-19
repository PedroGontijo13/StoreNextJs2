"use client";
import React, { useEffect } from "react";
import cartSvg from "../../public/cart.svg";
import useStore from "../store/store.js";
import Image from "next/image.js";

export default function NavBar() {
  const setModalVisible = useStore((state) => state.setModalVisible);
  const getTotalItems = useStore((state) => state.getTotalItems);
  const cart = useStore((state) => state.cart)
  useEffect(() => {
    console.log(getTotalItems());
  }, [getTotalItems, cart]);

  return (
    <header>
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" class="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
          </a>
          <div class="flex md:order-2 relative">
            <Image
              src={cartSvg}
              alt="cart-logo"
              className="h-10 justify-center text-black dark:text-gray-300"
              onClick={setModalVisible}
            />
            <span className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
              {getTotalItems()}
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}
