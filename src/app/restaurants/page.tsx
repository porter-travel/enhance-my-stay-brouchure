"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronDown,
  PlayCircle,
  Coffee,
  ClipboardCheck,
  DollarSign,
  Menu,
  X,
  Quote,
  Layout,
  TrendingUp,
  FileText,
  CreditCard,
  BarChart2,
  Tickets,
  Wine,
} from "lucide-react";

export default function EnhanceMyStayRestaurantLandingPage() {
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
          {/* Hero Text */}
          <div className="md:col-span-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-extrabold text-black mb-6"
            >
              Enhance Your Restaurant’s Potential
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-700 mb-10 max-w-lg"
            >
              Seamlessly boost revenue, improve guest experiences, and unlock new opportunities with our tailored upsell solutions—designed exclusively for the food &amp; beverage industry.
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
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative z-10"
            >
              <img
                src="/images/restaurant-hero.png"
                alt="Restaurant Upsell Demo Preview"
                className="rounded-lg mx-auto"
              />
            </motion.div>
            <div className="absolute -top-10 -left-10 w-3/4 h-3/4 bg-teal-300/30 blur-3xl rounded-full"></div>
          </div>
        </div>
      </section>

      {/* DINER EXPERIENCE SECTION */}
      <section className="bg-white py-20 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-black mb-8"
          >
            Delight Diners Before They Arrive
          </motion.h2>
          <p className="max-w-4xl mx-auto text-lg text-gray-700 mb-12">
            Turn every reservation into an unforgettable experience. With our platform, pre-arrival upsells and personalised offers set the stage for a memorable dining journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            <Card className="shadow-md">
              <CardContent className="p-6 text-center">
                <Wine className="text-pink-500 mb-4 mx-auto w-8 h-8" />
                <h3 className="text-lg font-semibold mb-2">Pre-Arrival Welcome Drinks</h3>
                <p className="text-sm text-gray-600">
                  Impress diners with a cocktail or wine upgrade waiting at their table.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6 text-center">
                <ClipboardCheck className="text-pink-500 mb-4 mx-auto w-8 h-8" />
                <h3 className="text-lg font-semibold mb-2">Streamlined Pre-Orders</h3>
                <p className="text-sm text-gray-600">
                  Capture diners’ meal preferences to offer exclusive pre-arrival specials.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6 text-center">
                <DollarSign className="text-pink-500 mb-4 mx-auto w-8 h-8" />
                <h3 className="text-lg font-semibold mb-2">Exclusive Upsell Offers</h3>
                <p className="text-sm text-gray-600">
                  Offer limited-time chef specials or premium add-ons exclusively for pre-bookers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* DINING CONVERSION SECTION */}
      <section className="bg-[#FFF0E5] py-20 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-orange-600 mb-8"
          >
            Convert Reservations into Dining Experiences
          </motion.h2>
          <p className="max-w-4xl mx-auto text-lg text-gray-700 mb-12">
            Seamlessly transition every reservation into a revenue-generating opportunity by pre-selling dining experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <Card className="shadow-md">
              <CardContent className="p-6 text-center">
                <Tickets className="text-orange-500 mb-4 mx-auto w-8 h-8" />
                <h3 className="text-lg font-semibold mb-2">Pre-Paid Vouchers</h3>
                <p className="text-sm text-gray-600">
                  Offer “Dinner for Two” or all-inclusive meal packages that diners can pre-pay before arrival.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6 text-center">
                <ClipboardCheck className="text-orange-500 mb-4 mx-auto w-8 h-8" />
                <h3 className="text-lg font-semibold mb-2">Exclusive Pre-Arrival Offers</h3>
                <p className="text-sm text-gray-600">
                  Provide incentives like discounted set menus or premium wine pairings available only for pre-arrivals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Automated Pre-Arrival Upsell Outreach */}
      <section className="py-20 bg-[#D0F0F4]">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-black mb-4"
            >
              Automated Pre-Arrival Upsell Outreach
            </motion.h2>
            <p className="text-lg text-gray-700 mb-4">
              Use ResDiary’s integration to automatically send personalised pre-arrival messages. Upsell pre-orders, chef specials, or exclusive dishes before guests arrive.
            </p>
            <p className="text-lg text-gray-700">
              Engage diners early and spark anticipation for a premium dining experience.
            </p>
          </div>
          <div>
            <img
              src="/images/restaurant-prearrival.png"
              alt="Automated Pre-Arrival Outreach"
              className="rounded-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* NEW SECTION: Pre-Book Your Table with Ease */}
      <section className="py-20 bg-[#FFF0E5]">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-black mb-4"
            >
              Pre-Book Your Table with Ease
            </motion.h2>
            <p className="text-lg text-gray-700 mb-4">
              Hotels using ResDiary can automatically reserve tables in their onsite restaurant, ensuring a smooth, pre-booked dining experience.
            </p>
            <p className="text-lg text-gray-700">
              Seamlessly bridge hotel stays with exclusive in-house dining, boosting revenue on both fronts.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="/images/table-booking.png"
              alt="Pre-Book Tables"
              className="rounded-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* NEW SECTION: Bespoke At-Table Ordering Solutions */}
      <section className="py-20 bg-[#D0F0F4]">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-black mb-4"
            >
              Bespoke At-Table Ordering Solutions
            </motion.h2>
            <p className="text-lg text-gray-700 mb-4">
              Empower your staff and delight diners with our at-table ordering technology. Guests can view menus, place orders, and pay from their own devices.
            </p>
            <p className="text-lg text-gray-700">
              Experience a seamless, contactless dining service that drives efficiency and revenue.
            </p>
          </div>
          <div>
            <img
              src="/images/at-table-ordering.png"
              alt="At-Table Ordering Solutions"
              className="rounded-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* RESDIARY INTEGRATION SECTION */}
<section className="bg-white py-20">
  <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl font-bold text-black mb-6"
    >
      Integrated with ResDiary
    </motion.h2>
    {/* ResDiary Logo moved directly under the header */}
    <img
      src="/images/resdiary-logo.png"
      alt="ResDiary"
      className="w-40 mx-auto mb-8"
    />
    <div className="space-y-4 mb-8">
      <p className="text-lg text-gray-700">
        ResDiary is an industry-leading online reservation and table management system built to help you attract diners, optimise operations, and grow your business.
      </p>
      <p className="text-lg text-gray-700">
        With features tailored by hospitality experts, ResDiary provides:
      </p>
    </div>
    <ul className="list-disc list-inside text-gray-700 space-y-3 max-w-xl mx-auto mb-8">
      <li className="flex items-center justify-center gap-2">
        <Layout className="w-6 h-6 text-[#00A1DF]" />
        White-label branded booking widgets
      </li>
      <li className="flex items-center justify-center gap-2">
        <TrendingUp className="w-6 h-6 text-[#00A1DF]" />
        Commission-free Google &amp; Meta bookings
      </li>
      <li className="flex items-center justify-center gap-2">
        <FileText className="w-6 h-6 text-[#00A1DF]" />
        Comprehensive customer insights
      </li>
      <li className="flex items-center justify-center gap-2">
        <CreditCard className="w-6 h-6 text-[#00A1DF]" />
        Secure payments and deposits
      </li>
      <li className="flex items-center justify-center gap-2">
        <BarChart2 className="w-6 h-6 text-[#00A1DF]" />
        Robust dashboard reporting
      </li>
    </ul>
    <p className="text-lg text-gray-700 mb-8">
      At Enhance My Stay, we integrate seamlessly with ResDiary to power our advanced upsell solutions and maximise your revenue.
    </p>

    <Card className="shadow-lg mx-auto max-w-3xl mb-8">
      <CardContent className="p-6 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <Quote className="w-6 h-6 text-[#E5173F] mb-4" />
          <p className="text-gray-700 italic">
            “With ResDiary, the best thing is that it is so user-friendly for customers. They have made it so simple for customers to book.”
          </p>
          <p className="mt-4 font-semibold text-sm text-gray-600">
            — Michael Pyrgos, Food and Beverage Director, The Imperial Hotel
          </p>
        </div>
        <div className="flex-shrink-0">
          <img
            src="/images/resdiary-testimonial.jpg"
            alt="ResDiary Testimonial"
            className="w-40 h-40 object-cover rounded-lg"
          />
        </div>
      </CardContent>
    </Card>

    <p className="mt-4 text-center text-xs text-gray-500">
      Trusted by 10,000+ hospitality venues worldwide •{" "}
      <a
        href="https://resdiary.com"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-yellow-600"
      >
        Learn more about ResDiary
      </a>
    </p>
  </div>
</section>


      {/* CALL TO ACTION SECTION */}
      <section id="cta" className="bg-[#F7F8C6] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Ready to Transform Your Revenue?
          </motion.h2>
          <p className="text-lg mb-8">
            Discover how our tailored upsell solutions can revolutionise your restaurant’s revenue.
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
          <div className="mt-8 text-left text-xs text-gray-600">
            © {new Date().getFullYear()} Travel Global Limited. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
