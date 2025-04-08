"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import {
  FaBed,
  FaLock,
  FaMapMarkerAlt,
  FaShower,
  FaTools,
  FaUtensils,
  FaWallet,
  FaWifi,
} from "react-icons/fa";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <main className="min-h-screen scroll-smooth bg-[#f0e9dd]">
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
              href="#home"
              className="text-cyan-900 text-xl font-bold hover:text-primary hover:drop-shadow-glow transition duration-300"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-cyan-900 text-xl font-bold hover:text-primary hover:drop-shadow-glow transition duration-300"
            >
              About
            </Link>
            <Link
              href="#rooms"
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

      {/* Home */}
      <section id="home" className="relative mt-6 h-[90vh] ...">
        {/* Hero Section */}
        <section className="relative h-[90vh] w-full pt-20">
          <img
            src="/view.jpg"
            alt="Dubai View"
            className="absolute inset-0 object-cover w-full h-full bg-white/60 pt-20 backdrop-blur-sm z-10"
          />
          <div className="relative z-20 flex items-center justify-center h-full w-full px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
              Affordable Living in Dubai
            </h1>
          </div>
        </section>
      </section>

      {/* About */}
      <section id="about" className="py-16">
        {/* Hero */}
        <section className="text-center py-12 px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-cyan-900 mb-4 leading-tight">
            <span className="text-5xl">About</span> Vivaan Homes
          </h1>
          <p className="text-lg md:text-xl text-cyan-900 max-w-2xl mx-auto font-medium">
            Comfort, Convenience, and Community – All in the Heart of Dubai.
          </p>
        </section>

        {/* Our Story */}
        <section className="py-16 px-4 sm:px-6 md:px-10">
          <div className="max-w-6xl mx-auto bg-cyan-900 text-[#f0e9dd] rounded-xl shadow-sm p-6 sm:p-10 flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="flex justify-center">
              <Image
                src="/images/about/vision.png"
                alt="Our Story"
                width={1000}
                height={1000}
                className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-5xl font-semibold mb-6">Our Story</h2>
              <p className="text-lg leading-relaxed">
                Vivaan Houses was created with a vision to offer affordable,
                hassle-free housing to students and working professionals in
                Dubai. We understand the struggle of finding a clean, cozy space
                with all the essentials — and that’s exactly what we provide.
                Located near Baniyas Metro, our accommodations are perfect for
                anyone who wants a safe, comfortable, and budget-friendly place
                to call home.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-6">
          <h2 className="text-3xl text-cyan-900 font-semibold text-center mb-10">
            Why Choose <b>Vivaan Spaces</b>?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center max-w-6xl mx-auto">
            {/* Prime Location */}
            <div className="bg-cyan-900 text-[#f0e9dd] p-6 rounded-lg shadow hover:shadow-xl transition">
              <div className="text-primary text-4xl mb-4 flex justify-center">
                <FaMapMarkerAlt />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Prime Location
              </h3>
              <p>2 minutes from Baniyas Metro. Walk everywhere with ease.</p>
            </div>

            {/* Fully Equipped */}
            <div className="bg-cyan-900 text-[#f0e9dd] p-6 rounded-lg shadow hover:shadow-xl transition">
              <div className="text-primary text-4xl mb-4 flex justify-center">
                <FaTools />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Fully Equipped
              </h3>
              <p>WiFi, kitchen, gas, cleaner, and essentials — all included.</p>
            </div>

            {/* Affordable Pricing */}
            <div className="bg-cyan-900 text-[#f0e9dd] p-6 rounded-lg shadow hover:shadow-xl transition">
              <div className="text-primary text-4xl mb-4 flex justify-center">
                <FaWallet />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Affordable Pricing
              </h3>
              <p>Designed to fit every budget without compromising comfort.</p>
            </div>
          </div>
        </section>
      </section>

      {/* Rooms */}
      <section id="rooms" className="">
        {/* Hero */}
        <section className="text-center pt-24 py-12 px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-cyan-900 mb-4 leading-tight">
            Explore Our Rooms
          </h1>
          <p className="text-lg md:text-xl text-cyan-900 max-w-2xl mx-auto font-medium">
            Affordable shared spaces with comfort and convenience at the heart
            of Dubai.
          </p>
        </section>

        {/* Room Overview */}
        <section className="py-16 px-4 sm:px-6 md:px-10">
          <div className="max-w-6xl mx-auto bg-cyan-900 text-[#f0e9dd] rounded-xl shadow-sm p-6 sm:p-10 flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="text-center md:text-left">
              <h2 className="text-5xl font-semibold mb-6">What We Offer</h2>
              <p className="text-lg leading-relaxed">
                Spacious shared rooms with individual beds and personal
                wardrobes. Designed to provide both comfort and privacy, each
                room ensures you feel at home while staying within your budget.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/beds.jpg"
                alt="Shared Room"
                width={1000}
                height={1000}
                className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
              />
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-10 flex flex-col md:flex-row gap-6">
            {/* Card 2 */}
            <div className="bg-cyan-900 text-[#f0e9dd] rounded-xl shadow-sm p-6 flex-1 flex flex-col items-center">
              <Image
                src="/images/kitchen.jpg"
                alt="Kitchen"
                width={500}
                height={300}
                className="rounded-xl shadow-lg mb-6 object-cover hover:scale-105 transition duration-300"
              />
              <h2 className="text-3xl font-semibold mb-4 text-center">
                Fully-Equipped Kitchen
              </h2>
              <p className="text-lg text-center leading-relaxed">
                Cook your favorite meals in a modern kitchen equipped with
                essential appliances like a gas stove, microwave, washing
                machine, and ample storage space. Clean, organized, and ready
                for daily use.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-cyan-900 text-[#f0e9dd] rounded-xl shadow-sm p-6 flex-1 flex flex-col items-center">
              <Image
                src="/images/bathroom.jpg"
                alt="Bathroom"
                width={500}
                height={300}
                className="rounded-xl shadow-lg mb-6 object-cover hover:scale-105 transition duration-300"
              />
              <h2 className="text-3xl font-semibold mb-4 text-center">
                Modern Bathrooms
              </h2>
              <p className="text-lg text-center leading-relaxed">
                Experience the comfort of clean, well-maintained bathrooms
                featuring modern fittings, a spacious shower area, and all the
                essentials to help you start and end your day fresh.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6">
          <h2 className="text-5xl text-cyan-900 font-semibold text-center mb-10">
            Room Amenities
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center max-w-6xl mx-auto">
            <Feature
              icon={<FaBed />}
              title="Shared Spacious Room"
              desc="Multiple beds per room, perfect for individuals."
            />
            <Feature
              icon={<FaLock />}
              title="Private Lockers"
              desc="Secure individual lockers for your belongings."
            />
            <Feature
              icon={<FaShower />}
              title="Common Bathroom"
              desc="Clean, regularly maintained shared bathroom."
            />
            <Feature
              icon={<FaWifi />}
              title="High-Speed WiFi"
              desc="Stay connected at all times with fast internet."
            />
            <Feature
              icon={<FaUtensils />}
              title="Equipped Kitchen"
              desc="Cook your meals with basic kitchen essentials."
            />
            <Feature
              icon={<FaMapMarkerAlt />}
              title="Prime Location"
              desc="Located near Baniyas Metro Station, Dubai."
            />
          </div>
        </section>
      </section>

      {/* Footer */}
      <footer className="bg-[#f0e9dd] text-cyan-900 text-center py-6">
        <p>
          &copy; {new Date().getFullYear()} <b>Vivaan Homes</b> · All rights
          reserved
        </p>
      </footer>
    </main>
  );
}
function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-cyan-900 text-[#f0e9dd] p-6 rounded-lg shadow hover:shadow-xl transition">
      <div className="text-primary text-4xl mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
