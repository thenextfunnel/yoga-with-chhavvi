"use client";

import Image from "next/image";
import Link from "next/link";

export default function GalleryPage() {
  const images = [
    { src: "/images/1.jpg", alt: "Morning Yoga Flow" },
    { src: "/images/2.jpg", alt: "Group Session Outdoors" },
    { src: "/images/33.jpg", alt: "Instructor Pose" },
    { src: "/images/44.jpg", alt: "Meditation Practice" },
    { src: "/images/5.jpg", alt: "Core Strength Routine" },
    { src: "/images/6.jpg", alt: "Balance and Focus" },
    { src: "/images/7.jpg", alt: "Sunset Yoga" },
    { src: "/images/8.jpg", alt: "Breathing Exercise" },
    { src: "/images/9.jpg", alt: "Posture Alignment" },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="text-center pt-28 pb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-600 mb-3">
          Yoga With Chhavvi Gallery
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto px-4">
          Explore moments from our workshops, classes, and community sessions.
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="w-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                <p className="text-white text-sm font-medium mb-3">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Back Home Button */}
      <div className="text-center pb-12">
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-emerald-600 text-white rounded-full shadow-md hover:shadow-lg active:scale-95 transition-transform duration-200 transform"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
