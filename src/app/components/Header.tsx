"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ✅ Header */}
      <header
        className="fixed top-0 left-0 w-full z-50 shadow-sm"
        style={{ backgroundColor: "#ffffffff" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-2 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <img
                src="/images/chavvi.png"
                alt="Yoga With Chhavvi Logo"
                className="w-24 h-24 object-contain scale-100 -mt-3"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-3 text-sm font-medium text-gray-900">
  {[
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Classes", href: "/classes" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ].map((item) => (
    <Link
      key={item.name}
      href={item.href}
      className="relative px-4 py-2 rounded-full text-gray-900 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-emerald-600 hover:after:w-full"
    >
      {item.name}
    </Link>
  ))}
</nav>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="p-2 rounded bg-white text-black font-medium flex items-center justify-center"
            >
              {/* Hamburger Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ✅ Backdrop Overlay */}
      <div
        aria-hidden={!open}
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ✅ Mobile Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        className={`fixed top-0 right-0 h-full w-72 max-w-full z-50 transform transition-transform duration-300 bg-white shadow-lg ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4 border-b">
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded bg-gray-100 text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="px-4 py-6 space-y-3 text-black font-medium">
          <Link href="/" onClick={() => setOpen(false)} className="block px-4 py-3 rounded-md hover:bg-gray-100">
            Home
          </Link>
          <Link href="/about" onClick={() => setOpen(false)} className="block px-4 py-3 rounded-md hover:bg-gray-100">
            About us
          </Link>
          <Link href="/workshop" onClick={() => setOpen(false)} className="block px-4 py-3 rounded-md hover:bg-gray-100">
            Workshop
          </Link>
          <Link href="/classes" onClick={() => setOpen(false)} className="block px-4 py-3 rounded-md hover:bg-gray-100">
            Classes
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="block px-4 py-3 rounded-md hover:bg-gray-100">
            Contact us
          </Link>
        </nav>

        {/* Drawer Footer */}
        <div className="mt-auto px-4 py-6 border-t text-sm text-gray-500">
          © {new Date().getFullYear()} Yoga With Chhavvi
        </div>
      </aside>
    </>
  );
}
