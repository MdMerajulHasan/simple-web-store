"use client";
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white dark:bg-slate-900 shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-red-600">WebStore</h1>
        <div className="space-x-6">
          <Link href="/" className="hover:text-red-600">
            Home
          </Link>
          <Link href="/items" className="hover:text-red-600">
            Items
          </Link>
          <Link href="/login" className="hover:text-red-600">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
