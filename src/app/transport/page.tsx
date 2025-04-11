"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronDown,
  PlayCircle,
  TrendingUp,
  QrCode,
  Cable,
  ClipboardCheck,
  DollarSign,
  Menu,
  X,
  Hotel,
  Building2,
  User,
  Gift,
} from "lucide-react";

const transportHero = {
  title: "Maximise Your Revenue as a Leading Transport Provider",
  subtitle:
    "Boost revenue and enhance passenger satisfaction with our automated upsell tools tailored for transport services.",
  image: "/images/industry-transport.png", // update the path as needed
};

export default function EnhanceMyStayTransportLandingPage() {
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
              {transportHero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-700 mb-10 max-w-lg"
            >
              {transportHero.subtitle}
            </motion.p>
            <div className="flex space-x-4">
              <Button
                size="lg"
                className="rounded-lg bg-black px-6 py-3 text-white font-semibold hover:scale-105 transition"
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
                key={transportHero.image}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8 }}
                src={transportHero.image}
                alt="Transport service hero"
                className="rounded-lg mx-auto"
              />
            </AnimatePresence>
            <div className="absolute -top-10 -left-10 w-3/4 h-3/4 bg-teal-300/30 blur-3xl rounded-full"></div>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION SECTION */}
      <section className="py-20 bg-[#D0F0F4]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-black mb-10"
          >
            Tailored Upsell Solutions for Transport
          </motion.h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-12">
            Our platform adapts seamlessly to your unique travel service needs—
            from pre-journey engagement to in-journey convenience. Experience real-time upsell opportunities designed to boost your revenue.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="shadow-lg p-6 bg-white rounded-lg">
              <TrendingUp className="text-[#0185B5] mb-4 mx-auto w-10 h-10" />
              <h3 className="text-lg font-semibold mb-2">Boost Revenue</h3>
              <p className="text-sm text-gray-600">
                Drive revenue from every passenger interaction.
              </p>
            </div>
            <div className="shadow-lg p-6 bg-white rounded-lg">
              <Cable className="text-[#0185B5] mb-4 mx-auto w-10 h-10" />
              <h3 className="text-lg font-semibold mb-2">Seamless Integration</h3>
              <p className="text-sm text-gray-600">
                Plug into existing travel management systems effortlessly.
              </p>
            </div>
            <div className="shadow-lg p-6 bg-white rounded-lg">
              <ClipboardCheck className="text-[#0185B5] mb-4 mx-auto w-10 h-10" />
              <h3 className="text-lg font-semibold mb-2">
                Automated Personalisation
              </h3>
              <p className="text-sm text-gray-600">
                AI-driven upsell offers tailored to every passenger.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRE-JOURNEY & IN-JOURNEY SECTIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Pre-Journey Engagement */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-black text-center mb-8"
          >
            Pre-Journey Engagement
          </motion.h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-12 text-center">
            Our automated outreach tools empower you to pre-sell premium upgrades – ensuring passengers begin their journey in utmost comfort.
          </p>
          {/* In-Journey Convenience */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold text-black text-center mb-8"
          >
            In-Journey Convenience
          </motion.h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-12 text-center">
            Enhance the onboard experience with QR code ordering, letting passengers quickly access refreshments and services right at their seat.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card className="shadow-md">
              <CardContent className="p-6 text-center">
                <QrCode className="text-blue-500 mb-4 mx-auto w-10 h-10" />
                <h3 className="text-lg font-semibold mb-2">
                  Quick Refreshment Orders
                </h3>
                <p className="text-sm text-gray-600">
                  Allow passengers to order drinks and snacks with a quick scan.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6 text-center">
                <QrCode className="text-blue-500 mb-4 mx-auto w-10 h-10" />
                <h3 className="text-lg font-semibold mb-2">
                  Seamless Service
                </h3>
                <p className="text-sm text-gray-600">
                  Streamline onboard services with direct QR code ordering.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* REAL-TIME BIDDING MECHANISM SECTION */}
      <section className="py-20 bg-[#FFEDF2]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-pink-600 mb-8"
          >
            Real-Time Bidding for Premium Upgrades
          </motion.h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-12">
            Introducing an innovative bidding mechanism that lets passengers compete for premium upgrades – such as first‑class seating – ensuring maximum revenue while keeping the process transparent and competitive.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="shadow-lg p-6 bg-white rounded-lg">
              <TrendingUp className="text-pink-600 mb-4 mx-auto w-10 h-10" />
              <h3 className="text-lg font-semibold mb-2">Competitive Bidding</h3>
              <p className="text-sm text-gray-600">
                Passengers submit bids for premium upgrades, creating a competitive marketplace.
              </p>
            </div>
            <div className="shadow-lg p-6 bg-white rounded-lg">
              <DollarSign className="text-pink-600 mb-4 mx-auto w-10 h-10" />
              <h3 className="text-lg font-semibold mb-2">Maximise Revenue</h3>
              <p className="text-sm text-gray-600">
                Dynamic bidding ensures you capture the optimal upgrade revenue.
              </p>
            </div>
            <div className="shadow-lg p-6 bg-white rounded-lg">
              <ClipboardCheck className="text-pink-600 mb-4 mx-auto w-10 h-10" />
              <h3 className="text-lg font-semibold mb-2">Transparent Process</h3>
              <p className="text-sm text-gray-600">
                A clear, automated bidding flow offers an equitable upgrade selection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE OUR TRANSPORT SOLUTIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-black mb-8"
          >
            Why Choose Our Transport Solutions
          </motion.h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-12">
            Our comprehensive approach ensures every stage of your service—from pre-journey to on-board—is optimised for enhanced revenue and customer satisfaction.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Card className="shadow-md">
              <CardContent className="p-6 text-center">
                <TrendingUp className="text-blue-500 mb-4 mx-auto w-10 h-10" />
                <h3 className="text-lg font-semibold mb-2">Increase Revenue</h3>
                <p className="text-sm text-gray-600">
                  Unlock incremental revenue through strategic premium offers.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6 text-center">
                <TrendingUp className="text-blue-500 mb-4 mx-auto w-10 h-10" />
                <h3 className="text-lg font-semibold mb-2">Enhanced Experience</h3>
                <p className="text-sm text-gray-600">
                  Deliver personalised services that delight passengers.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6 text-center">
                <ClipboardCheck className="text-blue-500 mb-4 mx-auto w-10 h-10" />
                <h3 className="text-lg font-semibold mb-2">Seamless Integration</h3>
                <p className="text-sm text-gray-600">
                  Easily integrate with your existing travel management systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CUSTOMER SUCCESS STORY */}
      <section className="py-20 bg-[#FFF0E5]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-orange-600 mb-8"
          >
            What Our Clients Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="shadow-lg p-6 bg-white rounded-lg">
              <Gift className="text-orange-600 mb-4 mx-auto w-6 h-6" />
              <p className="text-gray-700 italic">
                “Enhance My Stay’s transport solutions revolutionised our service. Passengers love the in-seat ordering system, and our revenue has seen a remarkable boost.”
              </p>
              <p className="mt-4 font-semibold text-sm text-gray-600">
                — Leading Transport Operator
              </p>
            </div>
            <div className="shadow-lg p-6 bg-white rounded-lg">
              <Gift className="text-orange-600 mb-4 mx-auto w-6 h-6" />
              <p className="text-gray-700 italic">
                “The real-time bidding feature for premium upgrades took our revenue to the next level. A game changer in the transport industry!”
              </p>
              <p className="mt-4 font-semibold text-sm text-gray-600">
                — Executive, Airline Services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-[#F7F8C6]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-black text-center mb-8"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">
                How does integration with travel systems work?
              </h3>
              <p className="text-gray-700">
                Our platform seamlessly integrates with your existing travel and booking systems with minimal setup required.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">
                How does the bidding mechanism work?
              </h3>
              <p className="text-gray-700">
                Passengers can place bids on premium upgrades. Our system automates the process to ensure a fair, transparent, and revenue-optimising experience.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">
                Can I see immediate results?
              </h3>
              <p className="text-gray-700">
                Many clients notice a positive impact on revenue within weeks of implementation.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">
                What support do you offer?
              </h3>
              <p className="text-gray-700">
                We provide 24/7 support, comprehensive onboarding, and training to ensure you get the most out of our system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL-TO-ACTION */}
      <section id="cta" className="bg-[#F7F8C6] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Ready to Transform Your Transport Revenue?
          </motion.h2>
          <p className="text-lg mb-8">
            Experience how our dynamic upsell and bidding solutions can revolutionise your travel services.
          </p>
          <Button size="lg" className="bg-black text-white hover:bg-black rounded-lg px-6 py-3 font-semibold transition">
            Request a Demo
          </Button>
        </div>
      </section>

      {/* FOOTER (Removed top margin to prevent separation) */}
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
                  <a href="/venues" className="hover:text-yellow-600">Venues & Arenas</a>
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
