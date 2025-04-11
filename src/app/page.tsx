"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  TrendingUp,
  Brain,
  Cable,
  ClipboardCheck,
  DollarSign,
  Hotel,
  Building2,
  Menu,
  X,
  User,
  Gift,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Helper function to choose proper article ("a" or "an") based on first letter.
const getArticle = (label: string): string => {
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(label.charAt(0).toLowerCase()) ? "an" : "a";
};

// Array for the rotating hero text and images.
const industries = [
  { label: "Hotel Owner", image: "/images/industry-hotel.png" },
  { label: "Restaurant Owner", image: "/images/industry-restaurant.png" },
  { label: "Transport Provider", image: "/images/industry-transport.png" },
  { label: "Airbnb Host", image: "/images/industry-airbnb.png" },
  { label: "Arena Operator", image: "/images/industry-arena.png" },
  { label: "Online Store Owner", image: "/images/industry-ecommerce.png" },
];

// Updated steps array with icons for "How It Works" section.
// The icon color now uses dark pink (text-pink-600) to match the header.
const steps = [
  {
    title: "Connect & Setup",
    description:
      "Easily integrate your booking systems with our platform — no technical expertise required.",
    icon: <Cable className="w-16 h-16 text-pink-600" />,
  },
  {
    title: "Customise & Optimise",
    description:
      "Tailor upsell offers using real-time data to match each guest’s unique preferences.",
    icon: <ClipboardCheck className="w-16 h-16 text-pink-600" />,
  },
  {
    title: "Automate & Grow",
    description:
      "Launch automated, targeted campaigns that drive revenue and enhance guest experiences.",
    icon: <DollarSign className="w-16 h-16 text-pink-600" />,
  },
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [currentIndustry, setCurrentIndustry] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  // Cycle through industry headlines every 3 seconds.
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndustry((prev) => (prev + 1) % industries.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#F7F8C6] via-white to-pink-100 text-gray-900 font-sans">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur shadow-md py-6 px-6 md:px-12">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Enhance My Stay logo"
              className="h-10"
            />
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
          {/* Dynamic Headline and Description */}
          <div className="md:col-span-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-extrabold text-black mb-6"
            >
              Maximise Your Revenue as{" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={industries[currentIndustry].label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.8 }}
                  className="text-[#D9B502]"
                >
                  {getArticle(industries[currentIndustry].label)}{" "}
                  {industries[currentIndustry].label}
                </motion.span>
              </AnimatePresence>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-700 mb-10 max-w-lg"
            >
              Our dynamic upsell technology transforms every interaction into a
              tailored revenue opportunity designed exclusively for your
              industry.
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
          {/* Cycling Hero Image */}
          <div className="md:col-span-1 relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={industries[currentIndustry].image}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8 }}
                src={industries[currentIndustry].image}
                alt={industries[currentIndustry].label}
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
            Tailored Upsell Solutions, No Matter the Challenge
          </motion.h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-12">
            Our platform adapts seamlessly to your unique business needs—whether
            you&rsquo;re in hospitality, retail, transport, or beyond. We deliver
            personalised, automated upsells that drive revenue and elevate
            customer experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="shadow-lg p-6 bg-white rounded-lg">
              <TrendingUp className="text-[#0185B5] mb-4 mx-auto w-10 h-10" />
              <h3 className="text-lg font-semibold mb-2">Boost Revenue</h3>
              <p className="text-sm text-gray-600">
                Drive revenue from every customer interaction.
              </p>
            </div>
            <div className="shadow-lg p-6 bg-white rounded-lg">
              <Cable className="text-[#0185B5] mb-4 mx-auto w-10 h-10" />
              <h3 className="text-lg font-semibold mb-2">Seamless Integration</h3>
              <p className="text-sm text-gray-600">
                Plug into your existing systems effortlessly.
              </p>
            </div>
            <div className="shadow-lg p-6 bg-white rounded-lg">
              <Brain className="text-[#0185B5] mb-4 mx-auto w-10 h-10" />
              <h3 className="text-lg font-semibold mb-2">
                Automated Personalisation
              </h3>
              <p className="text-sm text-gray-600">
                AI-driven upsell offers tailored to every guest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="bg-[#FFEDF2] py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-pink-600 text-center mb-8"
          >
            How It Works
          </motion.h2>
          {/* Step buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`px-4 py-2 rounded-lg border transition ${
                  activeStep === index
                    ? "bg-pink-600 text-white"
                    : "bg-transparent text-gray-700 border-black hover:bg-pink-50"
                }`}
              >
                {step.title}
              </button>
            ))}
          </div>
          {/* Centered Icon, Title & Description */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="mb-4 flex justify-center">
              {steps[activeStep].icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">
              {steps[activeStep].title}
            </h3>
            <p className="text-gray-600 text-lg">
              {steps[activeStep].description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURES & BENEFITS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-black mb-8"
          >
            Features & Benefits
          </motion.h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            Discover the key features that make our upsell solutions truly stand
            out.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="shadow-lg p-6 bg-gray-50 rounded-lg">
              <Brain className="w-12 h-12 mx-auto text-indigo-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Personalised Suggestions
              </h3>
              <p className="text-gray-600">
                Our AI-driven engine delivers bespoke upsell offers tailored to
                each customer.
              </p>
            </div>
            <div className="shadow-lg p-6 bg-gray-50 rounded-lg">
              <Cable className="w-12 h-12 mx-auto text-indigo-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Seamless Integration
              </h3>
              <p className="text-gray-600">
                Connect your existing systems for a smooth, integrated experience.
              </p>
            </div>
            <div className="shadow-lg p-6 bg-gray-50 rounded-lg">
              <DollarSign className="w-12 h-12 mx-auto text-indigo-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Automated Growth
              </h3>
              <p className="text-gray-600">
                Automate targeted campaigns that drive consistent revenue growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE SECTION */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-black mb-8"
          >
            Industries We Serve
          </motion.h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            From hotels and restaurants to transport, ecommerce, retail, and beyond—our flexible upsell platform adapts to any industry.
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

      {/* SUCCESS STORIES / TESTIMONIALS SECTION */}
      <section className="py-20 bg-[#FFF0E5]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-orange-600 mb-8"
          >
            Success Stories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="shadow-lg p-6 bg-white rounded-lg">
              <Gift className="text-orange-600 mb-4 mx-auto w-6 h-6" />
              <p className="text-gray-700 italic">
                “Our revenue skyrocketed after implementing tailored upsells.
                Enhance My Stay transformed our business.”
              </p>
              <p className="mt-4 font-semibold text-sm text-gray-600">
                — Independent Restaurant
              </p>
            </div>
            <div className="shadow-lg p-6 bg-white rounded-lg">
              <Gift className="text-orange-600 mb-4 mx-auto w-6 h-6" />
              <p className="text-gray-700 italic">
                “The platform’s flexibility allowed us to optimise upsells for
                every customer segment and boost our profitability.”
              </p>
              <p className="mt-4 font-semibold text-sm text-gray-600">
                — Boutique Hotel
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
                How does integration work?
              </h3>
              <p className="text-gray-700">
                Our platform seamlessly integrates with your existing booking and management systems with minimal setup required.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">
                What industries can benefit from tailored upsells?
              </h3>
              <p className="text-gray-700">
                Whether you are in hospitality, retail, transport, or ecommerce, our solution is built to boost revenue in any industry.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">
                How quickly can I see results?
              </h3>
              <p className="text-gray-700">
                Many of our clients begin to see enhanced revenue opportunities within weeks of implementation.
              </p>
            </div>
            {/* Additional FAQs */}
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">
                What kind of support do you offer?
              </h3>
              <p className="text-gray-700">
                We provide 24/7 support along with comprehensive onboarding and training to ensure you get the most from our platform.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">
                Is there a free trial available?
              </h3>
              <p className="text-gray-700">
                Yes – we offer a risk-free trial so you can experience firsthand how our upsell solution can boost your revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS & INTEGRATIONS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-black mb-8"
          >
            Integrated with Industry Leaders Including...
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="flex flex-col items-center">
              <Image src="/images/logo-zonal.png" alt="Zonal Hotel Solutions" className="h-16" />
              <p className="mt-2 text-sm">Zonal Hotel Solutions</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images/logo-guestline.png" alt="Guestline" className="h-16" />
              <p className="mt-2 text-sm">Guestline (Coming Soon)</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images/resdiary-logo.png" alt="ResDiary" className="h-16" />
              <p className="mt-2 text-sm">ResDiary</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL-TO-ACTION & FOOTER */}
      <section id="cta" className="bg-[#F7F8C6] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Ready to Transform Your Revenue?
          </motion.h2>
          <p className="text-lg mb-8">
            Discover how our industry-agnostic upsell solutions can revolutionise your business.
          </p>
          <Button size="lg" className="bg-black text-white hover:bg-black rounded-lg px-6 py-3 font-semibold transition">
            Request a Demo
          </Button>
        </div>
        <footer className="mt-16 bg-[#F7F8C6]">
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
      </section>
    </div>
  );
}
