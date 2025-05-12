import React from 'react'

export default function Features() {
    return (
        <>
            <section className="text-gray-400 bg-gray-900 body-font mt-[30px]">
                <div className="container px-5 mx-auto flex flex-wrap">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="text-xs text-[#2661f4] tracking-widest font-medium title-font mb-1">
                            MEGA STORE COLLECTION
                        </h2>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
                            Premium Products for Every Style
                        </h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {/* Box 1 */}
                        <div className="sm:p-4 py-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#2661f4] text-white flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                        </svg>
                                    </div>
                                    <h2 className="text-white text-lg title-font font-medium">Trendy T-Shirts</h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base">Discover our wide range of stylish and comfortable T-shirts for men and women.</p>
                                    <a className="mt-3 text-[#2661f4] inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Box 2 */}
                        <div className="sm:p-4 py-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#2661f4] text-white flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                            <circle cx={12} cy={7} r={4} />
                                        </svg>
                                    </div>
                                    <h2 className="text-white text-lg title-font font-medium">Elegant Watches</h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base">Shop the latest collection of luxury and casual watches for every occasion.</p>
                                    <a className="mt-3 text-[#2661f4] inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Box 3 */}
                        <div className="sm:p-4 py-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#2661f4] text-white flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                            <circle cx={6} cy={6} r={3} />
                                            <circle cx={6} cy={18} r={3} />
                                            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                                        </svg>
                                    </div>
                                    <h2 className="text-white text-lg title-font font-medium">Stylish Dresses</h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base">Explore fashionable dresses for women that suit every personality and event.</p>
                                    <a className="mt-3 text-[#2661f4] inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Box 4 */}
                        <div className="sm:p-4 py-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#2661f4] text-white flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                            <path d="M2 17l10 5 10-5" />
                                            <path d="M2 12l10 5 10-5" />
                                        </svg>
                                    </div>
                                    <h2 className="text-white text-lg title-font font-medium">Footwear Collection</h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base">Step out in style with our range of premium shoes and sneakers for all ages.</p>
                                    <a className="mt-3 text-[#2661f4] inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Box 5 */}
                        <div className="sm:p-4 py-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#2661f4] text-white flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                            <circle cx={12} cy={12} r={10} />
                                            <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74 9.94" />
                                        </svg>
                                    </div>
                                    <h2 className="text-white text-lg title-font font-medium">Accessories & Bags</h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base">Complete your look with our stylish accessories, handbags, and backpacks collection.</p>
                                    <a className="mt-3 text-[#2661f4] inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Box 6 */}
                        <div className="sm:p-4 py-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#2661f4] text-white flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M3 3h18v4H3zM3 10h18v11H3z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-white text-lg title-font font-medium">Winter Collection</h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base">Stay warm and fashionable with our exclusive winter jackets, hoodies, and thermal wear.</p>
                                    <a className="mt-3 text-[#2661f4] inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> <br/>
        </>
    )
}
