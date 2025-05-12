import React from 'react'
import icon1 from '/src/assets/images/icon1.png'
import icon2 from '/src/assets/images/icon2.png'
import icon3 from '/src/assets/images/icon3.png'
import icon4 from '/src/assets/images/icon4.png'

export default function CardClient() {
    return (
        <>
            <div className='grid lg:grid-cols-4 grid-cols-2 gap-4 lg:mx-[80px]'>

                <a
                    href="#"
                    className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                    <img className='sm:w-[70px] sm:h-[70px] w-[60px] h-[60px] sm:mx-[20px] mx-[7px] sm:[0px] mt-[5px]' src={icon1} />
                    <div className="flex flex-col justify-between py-4 leading-normal icon-text">
                        <h5 className="sm:text-[20px] text-[16px] font-bold tracking-tight text-gray-900 dark:text-white">Free Delivery</h5>
                        <p className="sm:mb-3 sm:text-[13px] text-[12px] pr-[10px] font-normal text-gray-700 dark:text-gray-400">
                            Free shipping on all order
                        </p>
                    </div>
                </a>

                <a
                    href="#"
                    className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                    <img className='sm:w-[70px] sm:h-[70px] w-[60px] h-[60px] sm:mx-[20px] mx-[7px] sm:[0px] mt-[5px]' src={icon2} />
                    <div className="flex flex-col justify-between py-3 leading-normal icon-text">
                        <h5 className="sm:text-[20px] text-[16px] font-bold tracking-tight text-gray-900 dark:text-white">Support 24/7</h5>
                        <p className="sm:mb-3 sm:text-[13px] text-[12px] pr-[10px] font-normal text-gray-700 dark:text-gray-400">Support online 24 hours a day</p>
                    </div>
                </a>

                <a
                    href="#"
                    className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                    <img className='sm:w-[70px] sm:h-[70px] w-[60px] h-[60px] sm:mx-[20px] mx-[7px] sm:[0px] mt-[5px]' src={icon3} />
                    <div className="flex flex-col justify-between py-3 leading-normal icon-text">
                        <h5 className="sm:text-[20px] text-[16px] font-bold tracking-tight text-gray-900 dark:text-white">Money Return</h5>
                        <p className="sm:mb-3 sm:text-[13px] text-[12px] pr-[10px] font-normal text-gray-700 dark:text-gray-400">Back guarantee under 7 days</p>
                    </div>
                </a>

                <a
                    href="#"
                    className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                    <img className='sm:w-[70px] sm:h-[70px] w-[60px] h-[60px] sm:mx-[20px] mx-[7px] sm:[0px] mt-[5px]' src={icon4} />
                    <div className="flex flex-col justify-between py-3 leading-normal icon-text">
                        <h5 className="sm:text-[20px] text-[16px] font-bold tracking-tight text-gray-900 dark:text-white">
                            Member Discount</h5>
                        <p className="sm:mb-3 sm:text-[13px] text-[12px] pr-[10px] font-normal text-gray-700 dark:text-gray-400">Onevery order over $120.00</p>
                    </div>
                </a>

            </div>

        </>
    )
}
