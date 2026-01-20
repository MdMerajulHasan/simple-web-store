"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

// Server Component (best for App Router)
export default function ItemDetails({ params }) {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/Items.json")
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

  const item = items.find((i) => i._id === id);
  if (loading) {
    return (
      <p className="text-center mt-20 text-gray-600 dark:text-gray-400">
        Loading item details...
      </p>
    );
  }
  if (!item) {
    return <p className="text-center mt-20 text-red-600">Item not found</p>;
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 dark:bg-slate-950 px-6 py-16">
        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-lg shadow">
          <div className="relative w-full h-72 rounded-t-lg overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-[400px] h-full mx-auto object-cover"
            />
          </div>
          <div className="p-6 flex justify-center flex-col items-center">
            <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              {item.name}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {item.description}
            </p>
            <p className="text-2xl font-bold text-red-600 mb-6">
              ${item.price}
            </p>
            <button className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
