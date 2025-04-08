"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaBed,
  FaCalendarAlt,
  FaEnvelope,
  FaPhone,
  FaStickyNote,
  FaUser,
  FaUsers,
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
          Book Your Stay with Vivaan Homes
        </h1>
        <p className="text-lg md:text-xl text-cyan-900 max-w-2xl mx-auto font-medium">
          Comfortable, affordable, and fully equipped living spaces near Baniyas
          Metro.
        </p>
      </section>

      {/* Booking Form */}
      <section className="max-w-3xl mx-auto bg-[#f0e9dd] shadow-lg rounded-lg p-8 mb-16 space-y-6">
        <form className="space-y-6">
          {/* Full Name */}
          <div className="flex items-center space-x-3">
            <FaUser />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-cyan-900 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-900"
            />
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3">
            <FaEnvelope />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border border-cyan-900 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-900"
            />
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-3">
            <FaPhone />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-2 border border-cyan-900 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-900"
            />
          </div>

          {/* Room Type */}
          <div className="flex items-center space-x-3">
            <FaBed />
            <select
              className="w-full px-4 py-2 border border-cyan-900 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-900"
              defaultValue=""
            >
              <option value="" disabled>
                Select Room Type
              </option>
              <option value="shared">Shared Room</option>
              <option value="private">Private Room</option>
            </select>
          </div>

          {/* Dates */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex items-center space-x-3 w-full">
              <FaCalendarAlt />
              <input
                type="date"
                className="w-full px-4 py-2 border border-cyan-900 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-900"
              />
            </div>
            <div className="flex items-center space-x-3 w-full">
              <FaCalendarAlt />
              <input
                type="date"
                className="w-full px-4 py-2 border border-cyan-900 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-900"
              />
            </div>
          </div>

          {/* Guests */}
          <div className="flex items-center space-x-3">
            <FaUsers />
            <input
              type="number"
              min="1"
              placeholder="Number of Guests"
              className="w-full px-4 py-2 border border-cyan-900 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-900"
            />
          </div>

          {/* Notes */}
          <div className="flex items-start space-x-3">
            <FaStickyNote className="mt-2" />
            <textarea
              placeholder="Additional Notes (Optional)"
              className="w-full px-4 py-2 border border-cyan-900 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-900"
              rows={3}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-cyan-900 text-white py-3 rounded-md font-semibold hover:bg-cyan-800 transition"
          >
            Book Now
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
