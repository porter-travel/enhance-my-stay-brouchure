"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronDown,
  Clock3,
  PlayCircle,
  Rocket,
  ThumbsUp,
  Wand2,
  MessageCircle,
  Users,
  Quote,
  Home,
  Hotel,
  Building2,
  Menu,
  X,
} from "lucide-react";

export default function EnhanceMyStayHotelLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <div className="bg-gradient-to-b from-[#F7F8C6] via-white to-pink-100 text-gray-900 font-sans">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur shadow-md py-6 px-6 md:px-12">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <a href="/">
            <img src="/images/logo.png" alt="Enhance My Stay logo" className="h-10" />
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
          {/* Left Column */}
          <div className="md:col-span-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-extrabold text-black mb-6"
            >
              Increase Guest Spend Before Check‑in
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-700 mb-10"
            >
              Automate upsells for your hotel with personalised, perfectly‑timed offers that drive revenue — without lifting a finger.
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
          {/* Right Column: Demo Image */}
          <div className="md:col-span-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative z-10"
            >
              <img
                src="/images/demo-preview.png"
                alt="Enhance My Stay demo preview"
                className="rounded-lg mx-auto"
              />
            </motion.div>
            <div className="absolute -top-10 -left-10 w-3/4 h-3/4 bg-teal-300/30 blur-3xl rounded-full"></div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="how-it-works" className="bg-[#FFEDF2] py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-pink-600 text-center mb-8"
          >
            How It Works
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-10">
            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <Rocket className="text-pink-500 mb-4 w-10 h-10 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Connect & Configure</h3>
                <p className="text-sm text-gray-600">
                  Sync your PMS or booking system and upload the upsells you want to offer.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <Clock3 className="text-pink-500 mb-4 w-10 h-10 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Automate & Optimise</h3>
                <p className="text-sm text-gray-600">
                  Guests receive tailored offers based on stay details and timing.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <ThumbsUp className="text-pink-500 mb-4 w-10 h-10 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Sit Back & Earn</h3>
                <p className="text-sm text-gray-600">
                  Watch the revenue roll in without any extra effort.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Pre-Arrival Upsells for Airbnb Owners */}
      <section className="py-20 bg-[#D0F0F4]">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-black mb-4"
            >
              Empower Your Airbnb Business
            </motion.h2>
            <p className="text-lg text-gray-700 mb-4">
              Our platform isn’t just built for hotels—Airbnb owners can also capture untapped revenue by offering exclusive pre‑arrival upsell opportunities.
            </p>
            <p className="text-lg text-gray-700">
              From breakfast hampers and cocktail kits to personalised local experiences, transform your guest journey from the moment they book.
            </p>
          </div>
          <div>
            <img
              src="/images/airbnb-upsell.png"
              alt="Airbnb Pre-Arrival Upsell"
              className="rounded-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* NEW SECTION: Digital Room Service Solutions */}
      <section className="py-20 bg-[#FFF0E5]">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="/images/digital-room-service.png"
              alt="Digital Room Service"
              className="rounded-lg mx-auto"
            />
          </div>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-orange-600 mb-4"
            >
              Revolutionise Your Room Service
            </motion.h2>
            <p className="text-lg text-gray-700 mb-4">
              Enhance your guest experience with our digital room service solution—delivering on‑demand dining, housekeeping, and concierge services straight to a guest’s device.
            </p>
            <p className="text-lg text-gray-700">
              Modernise operations and boost revenue by offering a seamless, contactless service that exceeds modern guest expectations.
            </p>
          </div>
        </div>
      </section>

      {/* TRUSTED BY TOP HOSPITALITY PLATFORMS */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-black mb-12"
          >
            Trusted by Top Hospitality Platforms
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="flex flex-col items-center">
              <img src="/images/logo-zonal.png" alt="Zonal Hotel Solutions" className="h-16" />
              <p className="mt-2 text-sm">Zonal Hotel Solutions</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/images/logo-guestline.png" alt="Guestline" className="h-16" />
              <p className="mt-2 text-sm">Guestline (Coming Soon)</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/images/resdiary-logo.png" alt="ResDiary" className="h-16" />
              <p className="mt-2 text-sm">ResDiary</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section id="benefits" className="bg-[#FFF0E5] py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-orange-600 mb-8"
          >
            Built for Modern Hospitality Teams
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-10">
            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <Wand2 className="text-orange-500 mb-4 w-10 h-10 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Effortless Setup</h3>
                <p className="text-sm text-gray-600">
                  Go live in a day with minimal technical lift.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <MessageCircle className="text-orange-500 mb-4 w-10 h-10 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Smart Suggestions</h3>
                <p className="text-sm text-gray-600">
                  Dynamic offers that adjust with the guest’s journey.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <Users className="text-orange-500 mb-4 w-10 h-10 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Loved by Staff</h3>
                <p className="text-sm text-gray-600">
                  Intuitive and easy to use — no training required.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-black mb-12"
          >
            What Our Customers Say
          </motion.h2>
          <Card className="shadow-lg mx-auto max-w-3xl">
            <CardContent className="p-6 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <Quote className="w-6 h-6 text-yellow-500 mb-4" />
                <p className="text-gray-700 italic">
                  “Enhance My Stay has been transformative for our hotel, integrating seamlessly with our systems and boosting revenue through pre‑arrival upsells.”
                </p>
                <p className="mt-4 font-semibold text-sm text-gray-600">
                  — The Heathcock
                </p>
              </div>
              <div className="flex-shrink-0">
                <img
                  src="/images/the-heathcock.jpg"
                  alt="The Heathcock Hotel"
                  className="w-40 h-40 object-cover rounded-lg"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section id="cta" className="bg-[#F7F8C6] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Ready to Transform Your Revenue?
          </motion.h2>
          <p className="text-lg mb-8">
            Discover how our tailored upsell solutions can revolutionise your hotel’s revenue.
          </p>
          <Button
            size="lg"
            className="bg-black text-white hover:bg-black rounded-lg px-6 py-3 font-semibold transition"
          >
            Request a Demo
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#F7F8C6]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="flex flex-row justify-between items-center border-b border-gray-400 pb-6">
            <div className="flex flex-row items-center gap-4">
              <img src="/images/logo.png" alt="Enhance My Stay logo" className="h-10" />
            </div>
            <div className="flex flex-row items-center gap-4">
              <img
                src="/images/mascot.png"
                alt="Enhance My Stay Mascot"
                className="h-16 w-auto object-contain"
              />
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
