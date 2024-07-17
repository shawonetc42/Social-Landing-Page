"use client";
// components/Navbar.js

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/">MyLogo</Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`lg:flex lg:items-center lg:w-auto w-full ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-sm lg:flex-grow">
            <Link
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"
            >
              About
            </Link>
            <Link
              href="/services"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
