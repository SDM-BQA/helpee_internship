"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import image from '../../public/error.svg'
import Image from "next/image";

export default function Custom404() {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <Image
        src={image}
          alt="404 Illustration"
          className="w-72 mx-auto mb-8 animate-float"
        />

        <h1 className="text-6xl font-extrabold mb-4 text-indigo-400">404</h1>
        <p className="text-2xl md:text-3xl font-semibold mb-6">
          Oops! Page not found.
        </p>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The page you &apos re looking for doesn’t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 text-sm font-semibold text-white bg-indigo-600 rounded hover:bg-indigo-700 transition"
        >
          Go Home
        </Link>
      </motion.div>
    </div>
  );
}
