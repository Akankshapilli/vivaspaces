"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaStickyNote,
  FaUser,
} from "react-icons/fa";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function RoomsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <main className="text-emerald-900 min-h-screen px-6 py-10">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-[#f0e9dd] shadow-md z-50">
        <nav className="hidden md:flex fixed top-0 left-0 w-full bg-[#f0e9dd] shadow-md px-12 py-4 flex items-center justify-between z-50">
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="EasyStay Logo"
              width={120}
              height={120}
            />
          </div>
          <div className="flex space-x-6">
            <Link
              href="/#home"
              className="text-cyan-900 text-xl font-bold hover:text-primary hover:drop-shadow-glow transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="text-cyan-900 text-xl font-bold hover:text-primary hover:drop-shadow-glow transition duration-300"
            >
              About
            </Link>
            <Link
              href="/#rooms"
              className="text-cyan-900 text-xl font-bold hover:text-primary hover:drop-shadow-glow transition duration-300"
            >
              Rooms
            </Link>
            <Link
              href="/booking"
              className="text-cyan-900 text-xl font-bold hover:text-primary hover:drop-shadow-glow transition duration-300"
            >
              Booking
            </Link>
            <Link
              href="/contact"
              className="text-cyan-900 text-xl font-bold hover:text-primary hover:drop-shadow-glow transition duration-300"
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* Mobile Header */}
        <div className="md:hidden bg-[#f0e9dd] flex items-center justify-between px-6 py-4 shadow-md">
          <Image src="/logo.png" alt="EasyStay Logo" width={80} height={80} />
          <button onClick={toggleMenu} className="text-cyan-900">
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#f0e9dd] px-6 pb-4 space-y-3">
            {[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
              { name: "Rooms", href: "#rooms" },
              { name: "Booking", href: "/booking" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-cyan-900 text-lg font-semibold hover:text-primary hover:drop-shadow-glow transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="text-center pt-24 pb-12 px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-cyan-900 mb-4">
          Get in Touch with Us
        </h1>
        <p className="text-lg md:text-xl text-cyan-900 max-w-2xl mx-auto font-medium">
          Have a question or need help booking your stay? We’re just a message
          away!
        </p>
      </section>

      {/* Contact Info + Form */}
      <section className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-16">
        {/* Contact Info */}
        <div className="bg-[#f0e9dd] rounded-lg shadow-lg p-6 space-y-6">
          <div className="flex items-start space-x-4">
            <FaMapMarkerAlt className="text-xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold">Our Address</h3>
              <p>Baniyas Metro Area, Dubai, UAE</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FaPhone className="text-xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p>+971-56-6427797</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FaEnvelope className="text-xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p>contact@Vivaanhomes.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-[#f0e9dd] rounded-lg shadow-lg p-6 space-y-6">
          <div className="flex items-center space-x-3">
            <FaUser />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-cyan-900 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-900"
            />
          </div>

          <div className="flex items-center space-x-3">
            <FaEnvelope />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-cyan-900 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-900"
            />
          </div>

          <div className="flex items-start space-x-3">
            <FaStickyNote className="mt-2" />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-2 border border-cyan-900 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-900"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-900 text-white py-3 rounded-md font-semibold hover:bg-cyan-900 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-cyan-900 text-center py-6">
        <p>
          &copy; {new Date().getFullYear()} <b>Vivaan Homes</b> · All rights
          reserved
        </p>
      </footer>
    </main>
  );
}
