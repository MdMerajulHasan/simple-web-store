"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";

const Items = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("Items.json")
      .then((res) => {
        setLoading(true);
        if (!res.ok) throw new Error("Failed to fetch items");
        return res.json();
      })
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to load items");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <p className="text-center mt-20 text-gray-600 dark:text-gray-400">
        Loading items...
      </p>
    );
  }

  if (error) {
    return <p className="text-center mt-20 text-red-600">{error}</p>;
  }
  return (
    <>
      <Navbar></Navbar>
      <main className="min-h-screen bg-gray-50 dark:bg-slate-950 px-6 py-16">
        <h1 className="text-3xl font-bold text-center mb-12">
          Available Items
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {items.map((item) => (
            <div
              key={item._id}
              className="bg-white dark:bg-slate-900 rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />

              <div className="p-5">
                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {item.description}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-red-600">
                    ${item.price}
                  </span>

                  <Link
                    href={`/items/${item._id}`}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Items;
