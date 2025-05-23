import React from 'react'

export default function Contact() {
    return (
        <>
            <div className="p-4 sm:ml-64 sm:mt-[150px] mt-[120px]">
                 <h3 className='sm:text-[17px] text-[15px] font-[700] text-[#2661f4] text-center'>Submit Your Query!</h3>
                <h1 className='text-center font-[700] sm:text-[45px] text-[35px] text-[#fff]'>Contact Us</h1> <br /> <br />
                <section className="text-gray-400 bg-gray-900 body-font relative">
                    <div className="absolute inset-0 bg-gray-900">
                        <iframe
                            title="map"
                            width="100%"
                            height="100%"
                            frameBorder={0}
                            marginHeight={0}
                            marginWidth={0}
                            scrolling="no"
                            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                            // style={{ filter: "grayscale(0.1) contrast(0.5) opacity(0.7)" }}
                        />
                    </div>
                    <div className="container px-5 py-24 mx-auto flex">
                        <div className="lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
                            <h2 className="text-white text-lg mb-1 font-medium title-font">
                                Feedback
                            </h2>
                            <p className="leading-relaxed mb-5">
                                Post-ironic portland shabby chic echo park, banjo fashion axe
                            </p>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-[#2661f4] focus:ring-2 focus:ring-[#2661f4] text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-400">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-[#2661f4] focus:ring-2 focus:ring-[#2661f4] h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    defaultValue={""}
                                />
                            </div>
                            <button className="text-white bg-[#2661f4] border-0 py-2 px-6 focus:outline-none rounded text-lg">
                                Button
                            </button>
                            <p className="text-xs text-gray-400 text-opacity-90 mt-3">
                                Chicharrones blog helvetica normcore iceland tousled brook viral
                                artisan.
                            </p>
                        </div>
                    </div>
                </section>
            </div> <br /><br /> <br />
        </>
    )
}
