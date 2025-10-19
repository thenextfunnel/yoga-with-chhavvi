"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

type Post = {
  id: number;
  title: string;
  image: string;
  date: string;
  category: string;
  content: Array<{ type: "p" | "ul" | "h2"; value: string | string[] }>;
};

const posts: Post[] = [
  {
    id: 1,
    title: "5 Morning Yoga Poses to Boost Energy",
    image: "/images/1.jpg",
    date: "Oct 10, 2025",
    category: "Morning Flow",
    content: [
      {
        type: "p",
        value:
          "Mornings are a sacred time to connect your body and mind before the world demands your energy. Practicing yoga at sunrise helps awaken your muscles, improves blood flow, and creates a calm, centered focus for the day ahead.",
      },
      {
        type: "p",
        value: "Here are five simple yet powerful yoga poses to energize your mornings:",
      },
      {
        type: "ul",
        value: [
          "**Cat-Cow Stretch (Marjaryasana-Bitilasana)** — Loosens up the spine, releases stiffness from sleep, and connects breath to movement.",
          "**Downward-Facing Dog (Adho Mukha Svanasana)** — A total-body stretch that strengthens the arms, lengthens the spine, and wakes up your legs.",
          "**Warrior I (Virabhadrasana I)** — Builds strength and confidence while improving balance and grounding your energy.",
          "**Triangle Pose (Trikonasana)** — Opens the hips and chest, improves digestion, and builds inner stability.",
          "**Seated Twist (Ardha Matsyendrasana)** — Gently massages the internal organs, improving circulation and focus.",
        ],
      },
      {
        type: "p",
        value:
          "Pro Tip: Before your practice, drink a glass of warm water with lemon. Afterward, sit in stillness for a minute to express gratitude for the day ahead. Your morning yoga ritual will soon become your favorite part of the day.",
      },
    ],
  },
  {
    id: 2,
    title: "How to Build Core Strength with Yoga",
    image: "/images/2.jpg",
    date: "Oct 5, 2025",
    category: "Core Strength",
    content: [
      {
        type: "p",
        value:
          "Building core strength isn’t just about sculpted abs — it’s about stability, balance, and confidence in your body. Yoga trains your deep core muscles, helping you move with grace and protect your lower back.",
      },
      {
        type: "p",
        value: "Here’s how yoga helps you strengthen your core naturally:",
      },
      {
        type: "ul",
        value: [
          "**Plank Pose (Phalakasana)** — Builds endurance and full-body strength. Keep your hips aligned and engage your lower belly.",
          "**Boat Pose (Navasana)** — Strengthens your abs and hip flexors while improving balance.",
          "**Side Plank (Vasisthasana)** — Targets the obliques, creating symmetry and lateral stability.",
          "**Bridge Pose (Setu Bandhasana)** — Works your glutes and lower back — key components of a strong core.",
          "**Forearm Plank with Breath Focus** — Builds control and connection between your breath and core engagement.",
        ],
      },
      {
        type: "p",
        value:
          "Remember: Your “core” is more than your abs — it includes your pelvis, spine, and diaphragm. Practicing consistently for even 10 minutes a day will improve posture, balance, and confidence. When your core is strong, your movements feel lighter, your breath feels deeper, and your mind feels steadier.",
      },
    ],
  },
  {
    id: 3,
    title: "Evening Yoga for Deep Sleep",
    image: "/images/3.jpg",
    date: "Sep 28, 2025",
    category: "Relaxation",
    content: [
      {
        type: "p",
        value:
          "After a long day, your mind and body crave calm. Evening yoga is a gentle way to release tension, slow your thoughts, and prepare for a night of deep, restorative sleep.",
      },
      {
        type: "p",
        value: "Try this simple sequence before bed:",
      },
      {
        type: "ul",
        value: [
          "**Child’s Pose (Balasana)** — A comforting position that relaxes your spine and quiets the mind.",
          "**Legs Up the Wall (Viparita Karani)** — Reduces fatigue, improves circulation, and calms the nervous system.",
          "**Supine Twist (Supta Matsyendrasana)** — Gently stretches your back and aids digestion after dinner.",
          "**Supported Bridge Pose (Setu Bandhasana)** — Opens the chest and promotes a steady breath rhythm.",
          "**Corpse Pose with Deep Breathing (Savasana + Pranayama)** — Release all effort. Breathe in peace; exhale the day away.",
        ],
      },
      {
        type: "p",
        value:
          "Pro Tips for Better Sleep: Dim the lights 30 minutes before yoga. Keep your phone out of reach. Play soft, calming music or a guided relaxation. This gentle ritual helps your body shift from “doing” to “being.” Within weeks, you’ll notice you fall asleep faster and wake up more refreshed.",
      },
    ],
  },
  {
    id: 4,
    title: "Why Consistency Matters in Yoga",
    image: "/images/44.jpg",
    date: "Sep 22, 2025",
    category: "Mindfulness",
    content: [
      {
        type: "p",
        value:
          "The true transformation in yoga doesn’t come from complex poses — it comes from showing up. Even a few mindful minutes a day can strengthen not only your body but also your inner discipline and peace.",
      },
      {
        type: "ul",
        value: [
          "**Consistency Builds Awareness** — Each practice reconnects you with your breath, posture, and emotions — helping you understand your body better.",
          "**Small Steps Create Big Change** — You don’t need an hour-long session. Ten minutes of mindful movement or stillness can shift your energy completely.",
          "**Discipline Becomes Devotion** — When yoga becomes part of your routine, it turns from a habit into a heartfelt practice.",
          "**Your Mind Learns to Stay Present** — Daily practice trains your attention — you stop chasing distractions and start living in the moment.",
        ],
      },
      {
        type: "p",
        value:
          "Remember: You don’t have to be flexible to practice yoga — you practice yoga to become flexible in body, mind, and life. So roll out your mat, take a deep breath, and show up for yourself — even if it’s just for a few minutes. Consistency will take you further than intensity ever could.",
      },
    ],
  },
];

export default function BlogPost({ params }: { params: { id: string } }) {
  const idNum = Number(params.id);
  const post = posts.find((p) => p.id === idNum);

  if (!post) {
    return (
      <main className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center p-6">
        <div className="max-w-xl text-center">
          <h2 className="text-2xl font-semibold mb-4">Post not found</h2>
          <p className="text-gray-400 mb-6">We couldn't find the post you're looking for.</p>
          <Link
            href="/blog"
            className="inline-block px-6 py-2 bg-emerald-600 text-white rounded-full shadow hover:bg-emerald-700 transition"
          >
            ← Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <article className="max-w-5xl mx-auto">

        {/* Hero / Featured Image */}
        <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg mb-8">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent"></div>
        </div>

        {/* Meta & Title */}
        <header className="text-center mb-8">
          <p className="text-sm uppercase tracking-wide text-emerald-400 font-medium">
            {post.category} • {post.date}
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            {post.title}
          </h1>
        </header>

        {/* Content */}
        <div className="prose prose-invert max-w-none prose-a:text-emerald-400 prose-p:text-gray-200 lg:prose-lg">
          {post.content.map((block, idx) => {
            if (block.type === "p") {
              return (
                <p key={idx} className="mb-4">
                  {block.value}
                </p>
              );
            }

            if (block.type === "h2") {
              return (
                <h2 key={idx} className="text-2xl text-white font-semibold my-4">
                  {block.value}
                </h2>
              );
            }

            if (block.type === "ul") {
              return (
                <ul key={idx} className="list-disc pl-6 mb-4 space-y-2">
                  {(block.value as string[]).map((item, i) => (
                    <li key={i} className="text-gray-200">
                      {/* items contain markdown-like bold markers; we render them as plain text */}
                      <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
                    </li>
                  ))}
                </ul>
              );
            }

            return null;
          })}
        </div>

        {/* CTA & Navigation */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/blog"
            className="inline-block px-6 py-3 bg-emerald-600 text-white rounded-full shadow hover:bg-emerald-700 transition"
          >
            ← Back to Blog
          </Link>

          <div className="flex gap-3">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${typeof window !== "undefined" ? window.location.href : ""}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-200 rounded-full shadow hover:bg-gray-700 transition"
            >
              Share
            </a>
            <a
              href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(post.title + "\n\nRead here: " + (typeof window !== "undefined" ? window.location.href : ""))}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-200 rounded-full shadow hover:bg-gray-700 transition"
            >
              Email
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
