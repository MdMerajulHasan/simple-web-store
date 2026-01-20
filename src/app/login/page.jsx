"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }
    if (email === "demo@gmail.com" && password === "Jim123!@") {
      document.cookie = "auth=true; path=/";
      router.push("/items");
    } else {
      alert("login failed!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-6 dark:text-white">
          Login
        </h2>
        <div className="mb-4">
          <label className="block mb-1 dark:text-gray-300">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 dark:text-gray-300">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
