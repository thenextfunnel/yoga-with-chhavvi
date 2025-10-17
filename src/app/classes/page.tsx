"use client";

import Link from "next/link";
import Image from "next/image";

export default function ClassesPage() {
  const classes = [
    {
      title: "Morning Flow Yoga",
      description:
        "Start your day with energy and balance. A mix of gentle vinyasa and deep stretches to awaken your body and mind.",
      image: "/images/1.jpg",
      duration: "60 min",
      level: "All Levels",
    },
    {
      title: "Core Strength & Stability",
      description:
        "Focus on strengthening your abs, lower back, and posture. Perfect for women building core confidence.",
      image: "/images/2.jpg",
      duration: "45 min",
      level: "Beginner to Intermediate",
    },
    {
      title: "Evening Relaxation Yoga",
      description:
        "Wind down your day with calming poses, mindful breathing, and full-body relaxation for better sleep.",
      image: "/images/3.jpg",
      duration: "50 min",
      level: "All Levels",
    },
    {
      title: "Balance & Flexibility",
      description:
        "Improve coordination, flexibility, and mindfulness through smooth sequences designed to challenge and restore.",
      image: "/images/44.jpg",
      duration: "60 min",
      level: "Intermediate",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-28 pb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-600 mb-4">
          Yoga Classes Designed for You
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto px-6">
          Strengthen your body, calm your mind, and find your balance through our curated yoga sessions — guided with care and intention.
        </p>
      </section>

      {/* Classes Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {classes.map((cls, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-emerald-50"
          >
            <div className="relative w-full h-52">
              <Image
                src={cls.image}
                alt={cls.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-emerald-700 mb-2">
                {cls.title}
              </h3>
              <p className="text-gray-700 text-sm mb-4">{cls.description}</p>

              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <span>🕒 {cls.duration}</span>
                <span>🎯 {cls.level}</span>
              </div>

              <Link
                href="/workshop"
                className="inline-block mt-2 px-5 py-2 bg-emerald-600 text-white rounded-full shadow hover:shadow-lg active:scale-95 transition-transform duration-200"
              >
                Join This Class
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Begin Your Yoga Journey?
        </h2>
        <p className="text-white/90 mb-6">
          Start with our <span className="font-semibold">10-Day Workshop</span> designed for strength, posture, and confidence.
        </p>
        <Link
          href="/workshop"
          className="inline-block px-8 py-3 bg-white text-emerald-700 font-semibold rounded-full shadow-md hover:shadow-lg active:scale-95 transition-transform duration-200"
        >
          Join the Workshop
        </Link>
      </section>
    </main>
  );
}
