import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <h2 className="text-2xl text-center font-bold capitalize transition-all duration-300 ease-in-out hover:bg-clip-text hover:text-transparent hover:bg-linear-to-r hover:from-blue-500 hover:to-purple-500 cursor-pointer">
        Navbar Routing Practices
      </h2>
      <header className="flex items-center justify-between px-6 py-4 bg-slate-100 shadow-sm shadow-slate-200 cursor-pointer transition-all duration-300 ease-in-out hover:transform hover:translate-y-1.5">
        <a className="logo relative z-1">
          site{" "}
          <span className="block absolute -top-[10%] w-10 h-10 rounded-full bg-radial from-indigo-500 to-pink-500 -z-1 opacity-40 uppercase text-white hover:opacity-100">
            Th
          </span>
        </a>
        <nav>
          {/* routing */}
          <Link
            href="/"
            className="text-xl font-semibold capitalize cursor-pointer transition-all duration-300 ease-in-out hover:bg-clip-text hover:text-transparent hover:bg-linear-to-r from-gray-500 to-blue-500"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="text-xl font-semibold capitalize cursor-pointer transition-all duration-300 ease-in-out hover:bg-clip-text hover:text-transparent hover:bg-linear-to-r from-gray-500 to-blue-500"
          >
            Blog
          </Link>
        </nav>
      </header>
    </div>
  );
}
