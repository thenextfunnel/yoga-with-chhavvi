"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const images = ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      {/* Background images with fade */}
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Yoga background ${index + 1}`}
            fill
            style={{ objectFit: "cover" }}
            priority={index === 0}
          />
        </div>
      ))}

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-emerald-100/40"></div>

      {/* Hero content — moved slightly up */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6 -translate-y-10 md:-translate-y-16">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Helping women in their{" "}
            <span className="text-emerald-600">30s & 40s</span> build strength.
          </h1>

          <p className="text-lg text-gray-900 mb-10 max-w-2xl mx-auto">
            Gentle yoga practices that restore your Energy and Reconnect Body,
            Mind, and Breath designed to help you move with confidence.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
  href="https://wa.me/+919696456932?text=Hi%20Chhavi!%20I’d%20love%20to%20join%20the%2010-Day%20Workshop."
  target="_blank"
  rel="noopener noreferrer"
className="px-8 py-3 bg-emerald-600 text-white rounded-full shadow-md 
  hover:shadow-lg active:scale-95 active:shadow-inner 
  transition-transform duration-200 transform focus:outline-none">
  Book An Appointment
</a>
          </div>
        </div>
      </div>
    </section>
  );
}
