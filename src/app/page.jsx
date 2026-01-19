import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-gray-200">
      <Navbar />

      {/* Hero Section*/}
      <section className="py-24 text-center bg-white dark:bg-slate-900">
        <h2 className="text-4xl font-bold mb-4">
          Welcome to <span className="text-red-600">WebStore</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          A modern online store to browse, login, and shop your favorite items.
        </p>
      </section>

      {/* Featured Products Section*/}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-semibold mb-4">Featured Items</h3>
        <p className="text-gray-600 dark:text-gray-400">
          Popular products chosen by our customers.
        </p>
      </section>

      {/* Categories Section*/}
      <section className="py-20 bg-gray-100 dark:bg-slate-900 px-6">
        <h3 className="text-2xl font-semibold mb-4">Categories</h3>
        <p className="text-gray-600 dark:text-gray-400">
          Electronics, Fashion, Home, Accessories, and more.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-semibold mb-6">Why Choose Us</h3>
        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
          <li>✔ Affordable pricing</li>
          <li>✔ Fast delivery</li>
          <li>✔ Secure checkout</li>
        </ul>
      </section>

      {/* How It Works section */}
      <section className="py-20 bg-gray-100 dark:bg-slate-900 px-6">
        <h3 className="text-2xl font-semibold mb-4">How It Works</h3>
        <p className="text-gray-600 dark:text-gray-400">
          Browse → Select → Login → Place Order
        </p>
      </section>

      {/* Reviews Section */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-semibold mb-4">Customer Reviews</h3>
        <p className="text-gray-600 dark:text-gray-400 italic">
          “Smooth experience and great product quality.”
        </p>
      </section>

      {/* Call to Action Section*/}
      <section className="py-24 bg-red-600 dark:bg-red-500 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">Start Shopping Today</h3>
        <p className="mb-6">Login now and explore our latest items.</p>
        <a
          href="/login"
          className="inline-block bg-white text-red-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition"
        >
          Login
        </a>
      </section>

      <Footer />
    </main>
  );
}
