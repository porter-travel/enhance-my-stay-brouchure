"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";

export default function TermsOfServicePage() {
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
          Terms of Service
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-700 mb-10"
        >
          Please read these terms carefully before using our services.
        </motion.p>
      </section>

      {/* TERMS OF SERVICE CONTENT */}
      <section className="bg-white py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">1. General Terms</h2>
            <p className="text-lg text-gray-700">
              By accessing or using our services, you agree to be bound by these Terms. If you do not agree, please do not use our services.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">2. Use of Service</h2>
            <p className="text-lg text-gray-700">
              You agree to use our service in accordance with all applicable laws and regulations. Misuse or illegal activities are strictly prohibited.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">3. Intellectual Property</h2>
            <p className="text-lg text-gray-700">
              All content, designs, and intellectual property on this site are the property of Travel Global Limited or its licensors.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">4. Data Processing and Privacy</h2>
            <p className="text-lg text-gray-700 mb-4">
              We process Personal Data in accordance with applicable data protection laws, including the GDPR. By using our services, you consent to such processing as described herein.
            </p>
            <h3 className="text-2xl font-semibold text-black mb-2">4.1 Definitions</h3>
            <ul className="list-disc ml-6 text-lg text-gray-700 mb-4">
              <li><strong>Personal Data:</strong> Any information relating to an identified or identifiable natural person.</li>
              <li><strong>Processing:</strong> Any operation performed on Personal Data.</li>
              <li><strong>Data Subject:</strong> A natural person whose Personal Data is processed.</li>
              <li><strong>Supervisory Authority:</strong> An independent public authority as defined in the GDPR.</li>
            </ul>
            <h3 className="text-2xl font-semibold text-black mb-2">4.2 Processing Details</h3>
            <p className="text-lg text-gray-700 mb-4">
              We process Personal Data provided by our clients for the purpose of delivering tailored pre-arrival email communications. The categories of data include guest names, email addresses, booking dates, and other relevant booking information.
            </p>
            <h3 className="text-2xl font-semibold text-black mb-2">4.3 Controller and Processor Obligations</h3>
            <p className="text-lg text-gray-700 mb-4">
              The Controller must obtain all necessary rights and consents before transferring data to us. We, as the Processor, agree to process data solely in accordance with documented instructions and implement appropriate technical and organisational measures to safeguard your Personal Data.
            </p>
            <h3 className="text-2xl font-semibold text-black mb-2">4.4 International Transfers and Audit Rights</h3>
            <p className="text-lg text-gray-700">
              Personal Data will not be transferred outside the European Economic Area (EEA) without adequate safeguards. We also facilitate audits and inspections to demonstrate our compliance with GDPR requirements.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">5. Limitation of Liability</h2>
            <p className="text-lg text-gray-700">
              To the fullest extent permitted by law, Travel Global Limited shall not be liable for any indirect or consequential damages arising from your use of our services.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">6. Governing Law</h2>
            <p className="text-lg text-gray-700">
              These Terms shall be governed by and construed in accordance with the laws of the applicable jurisdiction.
            </p>
          </div>
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
