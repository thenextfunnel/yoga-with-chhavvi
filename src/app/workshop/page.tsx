// src/app/workshop/page.tsx
"use client";

import Link from "next/link";

export default function WorkshopPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        {/* HERO */}
        <section className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            10-Day Core & Confidence Workshop
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-6 px-2">
            A focused workshop for women in their 30s & 40s — safer, sustainable strength, improved posture, and confidence in movement.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#register"
              className="w-full sm:w-auto text-center inline-block px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-full font-medium shadow-md transition transform active:scale-95"
            >
              Join the 10-Day Workshop
            </a>

            <Link
              href="#details"
              className="w-full sm:w-auto text-center inline-block px-6 py-3 border border-gray-700 rounded-full text-gray-200 hover:bg-gray-800 transition"
            >
              See details
            </Link>
          </div>
        </section>

        {/* DETAILS (stack on mobile, 2-col on md+) */}
        <section id="details" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/5 p-5 sm:p-6 rounded-xl border border-white/5">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">What you'll get</h3>
            <ul className="text-gray-300 list-disc pl-5 space-y-2 text-sm">
              <li>Daily 30–40 minute guided sessions (live + recorded)</li>
              <li>Progressive workouts focused on core, posture & mobility</li>
              <li>Simple, practical sleep & recovery tips</li>
              <li>Private WhatsApp support & community</li>
              <li>Bonus: short mobility flows for mornings</li>
            </ul>
          </div>

          <div className="bg-white/5 p-5 sm:p-6 rounded-xl border border-white/5">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Schedule & format</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Daily sessions for 10 consecutive days. Live sessions will be scheduled in the evening (HK time); recordings available for 48 hours.
            </p>

            <div className="grid gap-2 text-sm text-gray-300">
              <div className="flex justify-between">
                <span>Format</span>
                <span className="font-medium text-white">Live + recorded</span>
              </div>
              <div className="flex justify-between">
                <span>Duration</span>
                <span>30–40 min / session</span>
              </div>
              <div className="flex justify-between">
                <span>Group size</span>
                <span>Small groups (max 12)</span>
              </div>
              <div className="flex justify-between">
                <span>Price</span>
                <span className="font-semibold text-white">HK$ 680</span>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="mb-8">
          <h4 className="text-lg sm:text-xl font-semibold text-white mb-4">What participants say</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <blockquote className="bg-white/5 p-4 rounded-lg text-gray-200">
              <p className="text-sm">“I felt stronger after week 1 — gentle, effective coaching.”</p>
              <div className="mt-2 text-xs text-gray-400">— Asha</div>
            </blockquote>

            <blockquote className="bg-white/5 p-4 rounded-lg text-gray-200">
              <p className="text-sm">“Clear progress and lovely community.”</p>
              <div className="mt-2 text-xs text-gray-400">— Maria</div>
            </blockquote>

            <blockquote className="bg-white/5 p-4 rounded-lg text-gray-200">
              <p className="text-sm">“Great for beginners who want strength without injury.”</p>
              <div className="mt-2 text-xs text-gray-400">— Priya</div>
            </blockquote>
          </div>
        </section>

        {/* REGISTER FORM - centered and mobile-friendly */}
        <section id="register" className="bg-white rounded-xl p-5 sm:p-6 shadow-lg max-w-lg mx-auto">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Register for the 10-Day Workshop</h3>
          <p className="text-sm text-gray-600 mb-4">Fill the form below — after submit you'll be redirected to a confirmation page with payment instructions.</p>

          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="grid gap-3"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className="block">
                <span className="sr-only">Full name</span>
                <input
                  name="name"
                  required
                  placeholder="Full name"
                  className="w-full px-3 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                />
              </label>

              <label className="block">
                <span className="sr-only">Email</span>
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                />
              </label>
            </div>

            <label>
              <span className="sr-only">Phone / WhatsApp</span>
              <input
                name="phone"
                placeholder="Phone / WhatsApp"
                className="w-full px-3 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              />
            </label>

            <label>
              <span className="sr-only">Package</span>
              <select
                name="package"
                className="w-full px-3 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              >
                <option value="standard">Standard — $ 99</option>
                <option value="with-1-1">Standard + 1× 30min private session — $ 149</option>
              </select>
            </label>

            <label>
              <span className="sr-only">Notes</span>
              <textarea
                name="notes"
                rows={4}
                placeholder="Any relevant notes (injuries, preferences)"
                className="w-full px-3 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              />
            </label>

            <input type="hidden" name="_next" value="/workshop/thank-you" />

            <div className="flex flex-col sm:flex-row gap-3 items-center justify-between mt-2">
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2 bg-emerald-600 rounded-full text-white font-medium shadow-md hover:bg-emerald-700 transition transform active:scale-95"
              >
                Register & Pay
              </button>
              <div className="text-sm text-gray-600 text-center sm:text-right">
                Limited spots — secure your place now.
              </div>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
