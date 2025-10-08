"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <div className="text-xl font-bold text-pink-600">Feedback</div>
                </Link>

                {/* Desktop Buttons */}
                <div className="hidden md:flex gap-3">
                    <Link href="/login">
                        <button className="border border-pink-600 text-pink-600 px-3 py-1 rounded-md hover:bg-pink-50 transition cursor-pointer">
                            Login
                        </button>
                    </Link>
                    <Link href="/signup">
                        <button className="bg-pink-600 text-white px-3 py-1 rounded-md hover:bg-pink-700 transition cursor-pointer">
                            Sign Up
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-pink-600 focus:outline-none"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden flex flex-col items-center gap-3 pb-4 bg-white border-t">
                    <button className="border border-pink-600 text-pink-600 px-3 py-1 rounded-md hover:bg-pink-50 transition w-[50%] cursor-pointer">
                        Login
                    </button>
                    <button className="bg-pink-600 text-white px-3 py-1 rounded-md hover:bg-pink-700 transition w-[50%] cursor-pointer">
                        Sign Up
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
