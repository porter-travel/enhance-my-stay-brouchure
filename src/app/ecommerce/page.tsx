"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronDown,
  ShoppingCart,
  Box,
  Gift,
  TrendingUp,
  Menu,
  X,
} from "lucide-react";

// Define a hero object for the ecommerce page
const ecommerceHero = {
  title: "Unlock Ecommerce Upsell Potential",
  subtitle:
    "Increase cart value, boost conversion rates, and drive revenue with our smart upsell, cross‑sell, and bundling strategies.",
  image: "/images/industry-ecommerce.png", // update this with your preferred ecommerce hero image
};

export default function EnhanceMyStayEcommerceLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <div className="bg-gradient-to-b from-[#F7F8C6] via-white to-pink-100 text-gray-900 font-sans">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur shadow-md py-6 px-6 md:px-12">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <a href="/">
            <img
              src="/images/logo.png"
              alt="Enhance My Stay logo"
              className="h-10"
            />
          </a>
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
          <div className="md:hidden ml-auto">
            <button onClick={() => setMobileMenuOpen(true)}>
              <Menu className="w-8 h-8 text-gray-900" />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
                  {mobileMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
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
                        <a href="/venues" className="block hover:text-yellow-600">
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

      {/* HERO SECTION */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-3 items-center gap-8">
          {/* Hero Text */}
          <div className="md:col-span-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-extrabold text-black mb-6"
            >
              {ecommerceHero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-700 mb-10 max-w-lg"
            >
              {ecommerceHero.subtitle}
            </motion.p>
            <div className="flex space-x-4">
              <Button
                size="lg"
                className="rounded-lg bg-black hover:bg-black text-white px-6 py-3 font-semibold transition"
              >
                Get Started Free
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-lg border border-black px-6 py-3 text-black font-semibold hover:bg-gray-100 transition"
              >
                Request Demo
              </Button>
            </div>
          </div>
          {/* Hero Image */}
          <div className="md:col-span-1 relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={ecommerceHero.image}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8 }}
                src={ecommerceHero.image}
                alt="Ecommerce hero"
                className="rounded-lg mx-auto"
              />
            </AnimatePresence>
            <div className="absolute -top-10 -left-10 w-3/4 h-3/4 bg-teal-300/30 blur-3xl rounded-full"></div>
          </div>
        </div>
      </section>

      {/* PERSONALIZED UPSELL STRATEGIES SECTION */}
      <section className="bg-[#D0F0F4] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-black mb-10"
          >
            Personalised Upsell Strategies
          </motion.h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-12">
            Our system analyses customer behavior and shopping patterns to offer the perfect upsells, bundles, and add‑ons at the ideal moment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <ShoppingCart className="text-green-500 mb-4 mx-auto w-10 h-10" />
                <h3 className="text-lg font-semibold mb-2">
                  Dynamic Recommendations
                </h3>
                <p className="text-sm text-gray-600">
                  Provide personalised product suggestions based on real‑time behaviour.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <Box className="text-green-500 mb-4 mx-auto w-10 h-10" />
                <h3 className="text-lg font-semibold mb-2">
                  Bundled Offers
                </h3>
                <p className="text-sm text-gray-600">
                  Create attractive bundles that increase order values and customer satisfaction.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <Gift className="text-green-500 mb-4 mx-auto w-10 h-10" />
                <h3 className="text-lg font-semibold mb-2">
                  Checkout Add‑Ons
                </h3>
                <p className="text-sm text-gray-600">
                  Offer complementary add‑ons at checkout to maximise revenue.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* DYNAMIC PERSONALISATION & RECOMMENDATIONS SECTION */}
      <section className="bg-white py-20 px-6 md:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-black mb-8"
        >
          Dynamic Personalisation & Recommendations
        </motion.h2>
        <p className="max-w-4xl mx-auto text-lg text-gray-700 mb-12">
          Leverage advanced machine learning to tailor product recommendations in real-time, ensuring each customer receives offers that feel unique and compelling.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardContent className="p-6 text-center">
              <TrendingUp className="text-blue-500 mb-4 mx-auto w-10 h-10" />
              <h3 className="text-lg font-semibold mb-2">
                Behavioural Insights
              </h3>
              <p className="text-sm text-gray-600">
                Analyse purchase history and browsing habits to generate custom product suggestions.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardContent className="p-6 text-center">
              <Box className="text-blue-500 mb-4 mx-auto w-10 h-10" />
              <h3 className="text-lg font-semibold mb-2">
                Real‑Time Adaptation
              </h3>
              <p className="text-sm text-gray-600">
                Adjust recommendations as customers interact with your site, ensuring offers remain relevant.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* BUNDLING, ANALYTICS & ENHANCED CHECKOUT SECTION */}
      <section className="bg-[#FFF0E5] py-20 px-6 md:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-orange-600 mb-8"
        >
          Bundling, Advanced Analytics & Enhanced Checkout
        </motion.h2>
        <p className="max-w-4xl mx-auto text-lg text-gray-700 mb-12">
          Use data‑driven insights to create customised bundles and continuously refine the checkout experience for maximum conversion.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardContent className="p-6 text-center">
              <TrendingUp className="text-green-500 mb-4 mx-auto w-10 h-10" />
              <h3 className="text-lg font-semibold mb-2">
                Data‑Driven Bundling
              </h3>
              <p className="text-sm text-gray-600">
                Craft product bundles that drive customer value and boost order totals.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardContent className="p-6 text-center">
              <Gift className="text-green-500 mb-4 mx-auto w-10 h-10" />
              <h3 className="text-lg font-semibold mb-2">
                Seamless Checkout
              </h3>
              <p className="text-sm text-gray-600">
                Optimise the checkout process with intuitive design and cross‑sell opportunities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CUSTOMER SUCCESS STORY SECTION */}
      <section className="bg-white py-20 px-6 md:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-black mb-8"
        >
          What Our Clients Say
        </motion.h2>
        <p className="max-w-4xl mx-auto text-lg text-gray-700 mb-12">
          “Enhance My Stay’s ecommerce solutions transformed our online store. With smarter upsell and bundling tools, our average order value soared.”
        </p>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section id="cta" className="bg-[#F7F8C6] py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6 text-black"
        >
          Start Maximising Your Ecommerce Revenue Today!
        </motion.h2>
        <p className="text-lg mb-8 text-black">
          Leverage our cutting‑edge upsell, bundling, and personalisation tools to drive more sales and boost your bottom line.
        </p>
        <Button
          size="lg"
          className="bg-black text-white hover:bg-black rounded-lg px-6 py-3 font-semibold transition"
        >
          Request Demo
        </Button>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#F7F8C6]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="flex flex-row justify-between items-center border-b border-gray-400 pb-6">
            <div className="flex flex-row items-center gap-4">
              <img src="/images/logo.png" alt="Enhance My Stay logo" className="h-10" />
            </div>
            <div className="flex flex-row items-center gap-4">
              <img src="/images/mascot.png" alt="Enhance My Stay Mascot" className="h-16 w-auto object-contain" />
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/about" className="hover:text-yellow-600">About Us</a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-yellow-600">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Products</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/hotels" className="hover:text-yellow-600">Hotels</a>
                </li>
                <li>
                  <a href="/restaurants" className="hover:text-yellow-600">Restaurants</a>
                </li>
                <li>
                  <a href="/transport" className="hover:text-yellow-600">Transport</a>
                </li>
                <li>
                  <a href="/ecommerce" className="hover:text-yellow-600">E-commerce</a>
                </li>
                <li>
                  <a href="/venues" className="hover:text-yellow-600">Venues & Arenas</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/privacy" className="hover:text-yellow-600">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-yellow-600">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-left text-xs text-gray-500">
            © {new Date().getFullYear()} Travel Global Limited. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
