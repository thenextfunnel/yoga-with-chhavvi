"use client";

import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "5 Morning Yoga Poses to Boost Energy 🌅",
      description:
        "Start your mornings feeling refreshed and strong with these easy, energizing yoga poses that activate your body and mind.",
      image: "/images/1.jpg",
      date: "Oct 10, 2025",
      category: "Morning Flow",
    },
    {
      id: 2,
      title: "How to Build Core Strength with Yoga 💪",
      description:
        "Learn how to develop a stable, powerful core through mindful yoga movements designed to engage deep abdominal muscles.",
      image: "/images/2.jpg",
      date: "Oct 5, 2025",
      category: "Core Strength",
    },
    {
      id: 3,
      title: "Evening Yoga for Deep Sleep 💤",
      description:
        "Discover relaxing yoga poses and breathing practices that help you unwind and prepare your body for restful sleep.",
      image: "/images/3.jpg",
      date: "Sep 28, 2025",
      category: "Relaxation",
    },
    {
      id: 4,
      title: "Why Consistency Matters in Yoga ✨",
      description:
        "Understand how showing up daily — even for 10 minutes — can transform your body, mind, and inner discipline.",
      image: "/images/44.jpg",
      date: "Sep 22, 2025",
      category: "Mindfulness",
    },
  ];

  const featured = posts[0];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="text-center pt-28 pb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-600 mb-3">
          Yoga With Chhavvi Blog
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto px-4">
          Tips, stories, and inspiration to help you deepen your yoga practice and build lasting balance.
        </p>
      </section>

      {/* Featured Post */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="relative w-full h-72 md:h-96">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm uppercase tracking-wider text-emerald-300 font-medium">
                {featured.category}
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                {featured.title}
              </h2>
              <p className="text-white/80 text-sm max-w-lg">{featured.description}</p>
              <Link
                href={`/blog/${featured.id}`}
                className="inline-block mt-3 px-5 py-2 bg-emerald-600 text-white rounded-full text-sm hover:shadow-lg active:scale-95 transition-transform duration-200"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {posts.slice(1).map((post) => (
          <div
            key={post.id}
            className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-emerald-50"
          >
            <div className="relative w-full h-52">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <p className="text-xs uppercase tracking-wider text-emerald-700 font-medium mb-2">
                {post.category} • {post.date}
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-700 text-sm mb-4">{post.description}</p>
              <Link
                href={`/blog/${post.id}`}
                className="inline-block px-4 py-2 bg-emerald-600 text-white rounded-full text-sm hover:shadow-md active:scale-95 transition-transform duration-200"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold mb-4">Stay Inspired with Yoga Tips</h2>
        <p className="text-white/90 mb-6 max-w-xl mx-auto px-4">
          Subscribe to get weekly updates on mindfulness, wellness, and new yoga sessions from Chhavvi.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-white text-emerald-700 font-semibold rounded-full shadow-md hover:shadow-lg active:scale-95 transition-transform duration-200"
        >
          Get in Touch
        </Link>
      </section>
    </main>
  );
}
