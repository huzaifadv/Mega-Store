import React from 'react'
import Logo from '/src/assets/images/logo.png'

export default function Footer() {
    return (
        <>
              <div className="p-4 sm:ml-64 sm:mt-[20px] mt-[-50px]">
            <footer className="bg-white rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 sm:m-4">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a
                            href="https://flowbite.com/"
                            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                        >
                            <img
                                src={Logo}
                                className="h-8 logo"
                                alt="Flowbite Logo"
                            />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                Mega Store
                            </span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">
                                    Licensing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2025{" "}
                        <a href="https://flowbite.com/" className="hover:underline">
                            Mega Store™
                        </a>
                         | Designed By Huzaifa
                    </span>
                </div>
            </footer>
            </div>

        </>
    )
}
