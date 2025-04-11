"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Menu,
  X,
  Hotel,
  Building2,
  ClipboardCheck,
  TrendingUp,
  User,
  Brain,
  BookOpen,
  Target,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
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
                  <a href="/hotels" className="block hover:text-yellow-600">
                    Hotels
                  </a>
                  <a href="/restaurants" className="block hover:text-yellow-600">
                    Restaurants
                  </a>
                  <a href="/transport" className="block hover:text-yellow-600">
                    Transport
                  </a>
                  <a href="/ecommerce" className="block hover:text-yellow-600">
                    E-commerce
                  </a>
                  <a href="/venues" className="block hover:text-yellow-600">
                    Venues & Arenas
                  </a>
                </div>
              )}
            </div>
            <a href="/about" className="hover:text-yellow-600">
              About
            </a>
            <a href="/contact" className="hover:text-yellow-600">
              Contact
            </a>
            <Button variant="ghost">Log In</Button>
            <Button className="bg-black hover:bg-black text-white">
              Request Demo
            </Button>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto">
            <button onClick={() => setMobileMenuOpen(true)}>
              <Menu className="w-8 h-8 text-gray-900" />
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
              <X className="w-8 h-8 text-white" />
            </button>
            <nav className="flex flex-col gap-6 text-xl text-white text-center">
              <a href="/hotels" className="hover:text-yellow-400">
                Hotels
              </a>
              <a href="/restaurants" className="hover:text-yellow-400">
                Restaurants
              </a>
              <a href="/transport" className="hover:text-yellow-400">
                Transport
              </a>
              <a href="/ecommerce" className="hover:text-yellow-400">
                E-commerce
              </a>
              <a href="/venues" className="hover:text-yellow-400">
                Venues & Arenas
              </a>
              <a href="/about" className="hover:text-yellow-400">
                About
              </a>
              <a href="/contact" className="hover:text-yellow-400">
                Contact
              </a>
              <Button variant="ghost" size="lg" className="text-xl py-3">
                Log In
              </Button>
              <Button className="bg-black hover:bg-black text-white text-xl py-3 px-4">
                Request Demo
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION - Two Column Layout */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-3 items-center gap-8">
          {/* Text Column */}
          <div className="md:col-span-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-extrabold text-black mb-6"
            >
              About Enhance My Stay
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-700 mb-10 max-w-lg"
            >
              Where innovation meets tailored solutions. Since 2019, we&rsquo;ve been revolutionising customer engagement
              by delivering bespoke upsell strategies for any industry.
            </motion.p>
            <Button size="lg" className="bg-black text-white hover:bg-black rounded-lg px-6 py-3 font-semibold transition">
              Request a Demo
            </Button>
          </div>
          {/* Image Column */}
          <div className="md:col-span-1 relative">
            <AnimatePresence mode="wait">
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                src="/images/about-hero.png"  // Replace with your preferred image URL
                alt="About Enhance My Stay"
                className="rounded-lg mx-auto"
              />
            </AnimatePresence>
            <div className="absolute -top-10 -left-10 w-3/4 h-3/4 bg-teal-300/30 blur-3xl rounded-full"></div>
          </div>
        </div>
      </section>

      {/* OUR STORY SECTION */}
      <section className="bg-white py-20 px-6 md:px-12">
        <div className="flex items-center justify-center gap-2 mb-10">
          <BookOpen className="w-8 h-8 text-pink-600" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-black"
          >
            Our Story
          </motion.h2>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow">
            <p className="text-lg text-gray-700">
              Founded in 2019, Enhance My Stay began as a niche provider of advanced travel technology.
              With our deep expertise in data analytics and AI, we quickly evolved to create bespoke solutions
              that redefine customer engagement.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <p className="text-lg text-gray-700">
              By understanding guest behavior and market trends, we deliver personalised upsell strategies that
              not only meet but exceed expectations—ensuring every interaction is an opportunity for growth.
            </p>
          </div>
        </div>
      </section>

      {/* BESPOKE SOLUTIONS SECTION */}
      <section className="bg-[#FFF0E5] py-20 px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-pink-600 text-center mb-10"
        >
          Bespoke Solutions for Every Industry
        </motion.h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="shadow-lg p-6 bg-white rounded-lg">
            <User className="w-12 h-12 mx-auto text-pink-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-center">Industry Expertise</h3>
            <p className="text-gray-600 text-center">
              We understand the unique challenges of hospitality, retail, transport, and more – tailoring solutions to fit every need.
            </p>
          </div>
          <div className="shadow-lg p-6 bg-white rounded-lg">
            <Brain className="w-12 h-12 mx-auto text-pink-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-center">Data-Driven Innovation</h3>
            <p className="text-gray-600 text-center">
              Leveraging analytics and AI, our strategies provide personalised upsell recommendations that drive revenue.
            </p>
          </div>
          <div className="shadow-lg p-6 bg-white rounded-lg">
            <TrendingUp className="w-12 h-12 mx-auto text-pink-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-center">Scalable Growth</h3>
            <p className="text-gray-600 text-center">
              Our flexible platform evolves with your business, ensuring continuous and sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* OUR MISSION SECTION */}
      <section className="bg-white py-20 px-6 md:px-12">
        <div className="flex items-center justify-center gap-2 mb-10">
          <Target className="w-8 h-8 text-pink-600" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-black"
          >
            Our Mission
          </motion.h2>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow">
            <p className="text-lg text-gray-700">
              We are dedicated to democratising advanced upsell technology, making it accessible and effective for businesses of all sizes.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <p className="text-lg text-gray-700">
              Our mission is to transform every customer interaction into a tailored revenue opportunity—empowering our partners to achieve higher profitability and unforgettable customer experiences.
            </p>
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE SECTION */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-black mb-8"
          >
            Industries We Serve
          </motion.h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            From hotels and restaurants to transport and ecommerce, our platform adapts to the needs of any industry.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center text-gray-700">
              <Hotel className="w-10 h-10 text-orange-500 mb-2" />
              <p>Hospitality</p>
            </div>
            <div className="flex flex-col items-center text-gray-700">
              <Building2 className="w-10 h-10 text-indigo-500 mb-2" />
              <p>Retail & Ecommerce</p>
            </div>
            <div className="flex flex-col items-center text-gray-700">
              <ClipboardCheck className="w-10 h-10 text-green-500 mb-2" />
              <p>Restaurants</p>
            </div>
            <div className="flex flex-col items-center text-gray-700">
              <TrendingUp className="w-10 h-10 text-purple-500 mb-2" />
              <p>Transport</p>
            </div>
            <div className="flex flex-col items-center text-gray-700">
              <User className="w-10 h-10 text-pink-500 mb-2" />
              <p>Other</p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="bg-[#F7F8C6] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <p className="text-lg mb-8">
            Discover how our bespoke upsell solutions can drive revenue and deliver tailored experiences for any industry.
          </p>
          <Button size="lg" className="bg-black text-white hover:bg-black rounded-lg px-6 py-3 font-semibold transition">
            Request a Demo
          </Button>
        </div>
      </section>

      {/* FOOTER - Removed extra top margin for seamless transition */}
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
                <li>
                  <a href="/about" className="hover:text-yellow-600">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-yellow-600">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Products</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/hotels" className="hover:text-yellow-600">
                    Hotels
                  </a>
                </li>
                <li>
                  <a href="/restaurants" className="hover:text-yellow-600">
                    Restaurants
                  </a>
                </li>
                <li>
                  <a href="/transport" className="hover:text-yellow-600">
                    Transport
                  </a>
                </li>
                <li>
                  <a href="/ecommerce" className="hover:text-yellow-600">
                    E-commerce
                  </a>
                </li>
                <li>
                  <a href="/venues" className="hover:text-yellow-600">
                    Venues & Arenas
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/privacy" className="hover:text-yellow-600">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-yellow-600">
                    Terms of Service
                  </a>
                </li>
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
