"use client"
import React from "react"
import { BsCart } from 'react-icons/bs'
import useStore from "../store/store.js"
import { usePathname, useRouter } from "next/navigation.js"

export default function NavBar() {
    const setModalVisible = useStore((state) => state.setModalVisible);
    const pathname = usePathname()
    console.log(pathname)

    return (
        <header>
            <nav class="bg-white border-gray-200 dark:bg-gray-900">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" class="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MyStore</span>
                    </a>
                    <div class="flex md:order-2">
                        <BsCart className="h-10 justify-center text-black dark:text-gray-300" onClick={setModalVisible} />
                        <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul class="flex flex-col md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="/" className={`block py-2 pl-3 pr-4 ${pathname === '/' ? 'text-blue-700 md:text-blue-700 md:bg-transparent' : 'text-white md:text-white'} rounded md:p-0 mx-10`} aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="/about" className={`block py-2 pl-3 pr-4 ${pathname === '/about' ? 'text-blue-700 md:text-blue-700 md:bg-transparent' : 'text-white'} rounded md:p-0 mx-10`} >About</a>
                            </li>
                            <li>
                                <a href="/contact" class={`block py-2 pl-3 pr-4 ${pathname === '/contact' ? 'text-blue-700 md:text-blue-700 md:bg-transparent' : 'text-white'} rounded md:p-0 mx-10`}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}