import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "../../public/logo/logo.jpg";

export default function Navbar() {
  return (
    <div>
      <h2 className="text-2xl text-center font-bold capitalize transition-all duration-300 ease-in-out hover:bg-clip-text hover:text-transparent hover:bg-linear-to-r hover:from-blue-500 hover:to-purple-500 cursor-pointer">
        Navbar Routing Practices
      </h2>
      <header className="flex items-center justify-between px-6 py-4 bg-slate-100 shadow-sm shadow-slate-100 cursor-pointer transition-all duration-300 ease-in-out">
        <Link
          href="/"
          className="group text-2xl font-medium capitalize cursor-pointer transition-all duration-300 ease-in-out hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-blue-400 hover:to-pink-400"
        >
          Tan{" "}
          <span className="text-transparent normal-case tracking-[4px] pl-1 relative bg-clip-text bg-linear-to-r from-blue-400 to-pink-400">
            vir
            <Image
              src={Logo}
              alt="logo"
              className="w-5 h-5 rounded-full absolute top-1/2 left-0 transform -translate-y-1/2 scale-0 transition-all duration-300 ease-in-out group-hover:scale-100"
            />
          </span>
        </Link>
        <nav className="flex items-center gap-6">
          {/* routing */}
          <Link
            href="/"
            className="text-[20px] text-black/80 font-medium capitalize cursor-pointer transition-all duration-300 ease-in-out hover:bg-clip-text hover:text-transparent hover:bg-linear-to-r from-gray-500 to-blue-500"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="text-[20px] text-black/80 font-medium capitalize cursor-pointer transition-all duration-300 ease-in-out hover:bg-clip-text hover:text-transparent hover:bg-linear-to-r from-gray-500 to-blue-500"
          >
            Blog
          </Link>
        </nav>
      </header>
    </div>
  );
}
