"use State"
import React from 'react'
import { Phone, Globe, MapPin, Printer } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
function Footer() {
    return (
        <footer className="bg-black text-white py-10 px-8 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
                {/*Logo*/}
                <div className="flex juistify-center md:justify-start">
                    <Link href="/">
                        <div className="text-xl font-bold text-white-600">Feedback</div>
                    </Link>
                </div>
                {/*Services*/}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Services</h2>
                    <ul className="space-y-2 text-gray-200">
                        <Link href="/CustomerService">
                            <li className='list-style-none cursor-pointer'>Customer Service</li>
                        </Link>
                        <br />
                        <Link href="/MobileBanking">
                            <li className='list-style-none cursor-pointer'>Mobile Banking</li>
                        </Link>
                        <br />
                        <Link href="/CardBanking">
                            <li className='list-style-none cursor-pointer'>Card Banking</li>
                        </Link>
                        <br />
                        <Link href="/others">
                            <li className='list-style-none cursor-pointer'>Others</li>
                        </Link>
                    </ul>
                </div>
                {/*Contact Us*/}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                    <div className="space-y-3 text-gray-200">
                        <div className="flex items-start gap-3">
                            <MapPin className='text-white w-10 h-10 mt-0 text-white' />
                            <p className='text-white font-sm'>Located on the way from the National Theater to the Federal
                                Police Headquarters, around Sengatera.</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className='text-white w-5 h-5 mt-0 text-white' />
                            <p className='text-white font-sm'>+251 (0)115 501 111</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Printer className="w-5 h-5 text-white" />
                            <p>011-5-54-00-51</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Globe className="w-5 h-5 text-white" />
                            <Link
                                href="https://www.zemenbank.com"
                                className="hover:underline"
                                target="_blank"
                            >
                                www.zemenbank.com
                            </Link>
                        </div>
                        <div className="flex gap-4 pt-3">
                            <Link href="#" aria-label="LinkedIn">
                                <i className="fab fa-linkedin text-xl"></i>
                            </Link>
                            <Link href="#" aria-label="Facebook">
                                <i className="fab fa-facebook text-xl"></i>
                            </Link>
                            <Link href="#" aria-label="Instagram">
                                <i className="fab fa-instagram text-xl"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                {/*Social Media Links*/}

            </div>
        </footer>
    )
}

export default Footer