import React, { useState } from 'react';
import Logo from '/src/assets/images/logo.png';
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Navbar() {
    const [openDropdown, setOpenDropdown] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleDropdown = () => setOpenDropdown(!openDropdown);
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    const closeSidebar = () => {
        if (window.innerWidth < 640) setSidebarOpen(false);
    };

    return (
        <>
            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-4 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <button
                                onClick={toggleSidebar}
                                type="button"
                                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            >
                                <span className="sr-only">Open sidebar</span>
                                <svg
                                    className="w-6 h-6"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                    />
                                </svg>
                            </button>
                            <a href="#" className="flex ms-2 md:me-24">
                                <img
                                    src={Logo}
                                    className="logo"
                                    alt="Mega Store"
                                />
                                <span className="self-center text-[30px] font-[700] sm:text-2xl whitespace-nowrap dark:text-white">
                                    Mega Store
                                </span>
                            </a>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center ms-3">
                                <div>
                                    <button
                                        type="button"
                                        className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                        aria-expanded="false"
                                        data-dropdown-toggle="dropdown-user"
                                    >
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                            className="w-8 h-8 rounded-full"
                                            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                            alt="user photo"
                                        />
                                    </button>
                                </div>
                                {/* User dropdown would go here if needed */}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <aside
                id="logo-sidebar"
                className={`fixed top-0 left-0 z-40 w-64 h-screen pt-30 transition-transform bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } sm:translate-x-0`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul className="space-y-2 font-medium text-[18px]">
                        <li>
                            <Link to="/home" onClick={closeSidebar} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span className="ms-3">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={closeSidebar} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span className="ms-3">About</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/shop" onClick={closeSidebar} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span className="ms-3">Shop</span>
                            </Link>
                        </li>

                        {/* Dropdown menu */}
                        <li>
                            <button
                                onClick={toggleDropdown}
                                className="flex items-center w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <span className="ms-3 flex-1 text-left">Categories</span>
                                <ChevronDownIcon
                                    className={`w-4 h-4 ml-auto transition-transform ${openDropdown ? "rotate-180" : ""}`}
                                />
                            </button>
                            {openDropdown && (
                                <ul className="ml-6 mt-1 space-y-1">
                                    {[
                                        { name: "Watches", path: "watches" },
                                        { name: "Bags", path: "bags" },
                                        { name: "Shoes", path: "shoes" },
                                        { name: "Skin Care", path: "skincare" },
                                        { name: "T-Shirts", path: "tshirts" },
                                        { name: "Women Dress", path: "women-dress" },
                                    ].map(({ name, path }) => (
                                        <li key={path}>
                                            <Link
                                                to={`/categories/${path}`}
                                                onClick={() => {
                                                    closeSidebar();
                                                    setOpenDropdown(false);
                                                }}
                                                className="block px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-white"
                                            >
                                                {name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>

                        <li>
                            <Link to="/contact" onClick={closeSidebar} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span className="ms-3">Contact</span>
                            </Link>
                        </li>
                    </ul>

                    <div id="dropdown-cta" class="p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900" role="alert">
                        <div class="flex items-center mb-3">
                            <span class="bg-orange-100 text-orange-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded-sm dark:bg-orange-200 dark:text-orange-900">20% Off</span>
                            <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-blue-50 inline-flex justify-center items-center w-6 h-6 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800" data-dismiss-target="#dropdown-cta" aria-label="Close">
                                <span class="sr-only">Close</span>
                                <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                            </button>
                        </div>
                        <p class="mb-3 text-sm text-blue-800 dark:text-blue-400">
                            Enjoy an exclusive discount on our premium collection—shop now to save big on stylish, high-quality items for a limited time!
                        </p>
                        <a class="text-sm text-blue-800 underline font-medium hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300" href="#">Shop Now</a>
                    </div>


                </div>
            </aside>
        </>
    );
}
