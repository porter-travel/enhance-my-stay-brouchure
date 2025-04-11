"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
export default function PrivacyPolicyPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <div className="bg-gradient-to-b from-[#F7F8C6] via-white to-pink-100 text-gray-900 font-sans">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur shadow-md py-6 px-6 md:px-12">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link href="/">
            <Image src="/images/logo.png" alt="Enhance My Stay logo" className="h-10" />
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 ml-auto">
            <div className="relative">
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="flex items-center gap-1 hover:text-yellow-600 focus:outline-none"
              >
                Solutions <ChevronDown className="w-4 h-4" />
              </button>
              {solutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 rounded-md bg-white p-4 shadow-lg space-y-2">
                  <a href="/hotels" className="block hover:text-yellow-600">Hotels</a>
                  <a href="/restaurants" className="block hover:text-yellow-600">Restaurants</a>
                  <a href="/transport" className="block hover:text-yellow-600">Transport</a>
                  <a href="/ecommerce" className="block hover:text-yellow-600">E-commerce</a>
                  <a href="/venues" className="block hover:text-yellow-600">Venues & Arenas</a>
                </div>
              )}
            </div>
            <a href="/about" className="hover:text-yellow-600">About</a>
            <a href="/contact" className="hover:text-yellow-600">Contact</a>
            <Button variant="ghost">Log In</Button>
            <Button className="bg-black hover:bg-black text-white">Request Demo</Button>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto">
            <button onClick={() => setMobileMenuOpen(true)}>
              <Menu className="w-8 h-8 text-gray-900"/>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center"
          >
            <button onClick={() => setMobileMenuOpen(false)} className="absolute top-6 right-6">
              <X className="w-8 h-8 text-white"/>
            </button>
            <nav className="flex flex-col gap-6 text-xl text-white text-center">
              <a href="/hotels" className="hover:text-yellow-400">Hotels</a>
              <a href="/restaurants" className="hover:text-yellow-400">Restaurants</a>
              <a href="/transport" className="hover:text-yellow-400">Transport</a>
              <a href="/ecommerce" className="hover:text-yellow-400">E-commerce</a>
              <a href="/venues" className="hover:text-yellow-400">Venues & Arenas</a>
              <a href="/about" className="hover:text-yellow-400">About</a>
              <a href="/contact" className="hover:text-yellow-400">Contact</a>
              <Button variant="ghost" size="lg" className="text-xl py-3">Log In</Button>
              <Button className="bg-black hover:bg-black text-white text-xl py-3 px-4">Request Demo</Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section className="text-center px-6 md:px-12 py-20 max-w-5xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold text-black mb-6"
        >
          Privacy Policy
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-700 mb-10"
        >
          Your privacy is our priority. Learn how we collect, use, and safeguard your information.
        </motion.p>
      </section>

      {/* PRIVACY POLICY CONTENT */}
      <section className="bg-white py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">1. Introduction</h2>
            <p className="text-lg text-gray-700">
              At Travel Global Limited, trading as Enhance My Stay, we are committed to protecting your personal data and ensuring transparency in how we collect and process your information. This Privacy Policy outlines our practices in accordance with applicable laws.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">2. Information We Collect</h2>
            <p className="text-lg text-gray-700">
              We collect personal data such as your name, email address, and booking details. Additional information may be collected when you interact with our website or services.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">3. How We Use Your Information</h2>
            <p className="text-lg text-gray-700">
              Your data helps us to personalise your experience, improve our services, and communicate important updates. We process data solely for our business purposes and in accordance with your legal rights.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">4. Your Rights</h2>
            <p className="text-lg text-gray-700">
              You have the right to access, update, or delete your personal information. Please contact us if you have any questions regarding your data or wish to exercise your rights.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">5. Security & Data Protection</h2>
            <p className="text-lg text-gray-700">
              We employ industry-standard security measures to protect your data and ensure it is processed confidentially and securely.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">6. Changes to This Policy</h2>
            <p className="text-lg text-gray-700">
              Any changes to our Privacy Policy will be posted on this page. We encourage you to review this policy periodically.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">7. Contact Us</h2>
            <p className="text-lg text-gray-700">
              If you have any questions or concerns about this Privacy Policy, please contact us at hi@enhancemystay.com.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#F7F8C6]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="flex flex-row justify-between items-center border-b border-gray-400 pb-6">
            <div className="flex flex-row items-center gap-4">
              <Image src="/images/logo.png" alt="Enhance My Stay logo" className="h-10" />
            </div>
            <div className="flex flex-row items-center gap-4">
              <Image src="/images/mascot.png" alt="Enhance My Stay Mascot" className="h-16 w-auto object-contain" />
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="hover:text-yellow-600">About Us</a></li>
                <li><a href="/contact" className="hover:text-yellow-600">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Products</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/hotels" className="hover:text-yellow-600">Hotels</a></li>
                <li><a href="/restaurants" className="hover:text-yellow-600">Restaurants</a></li>
                <li><a href="/transport" className="hover:text-yellow-600">Transport</a></li>
                <li><a href="/ecommerce" className="hover:text-yellow-600">E-commerce</a></li>
                <li><a href="/venues" className="hover:text-yellow-600">Venues & Arenas</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/privacy" className="hover:text-yellow-600">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-yellow-600">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-left text-xs text-gray-600">
            © {new Date().getFullYear()} Travel Global Limited. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
