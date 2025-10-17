// src/app/workshop/page.tsx
import Link from "next/link";

export default function WorkshopPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <section className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            10-Day Core & Confidence Workshop
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto mb-6">
            A short, focused workshop designed for women in their 30s & 40s who want safer, sustainable strength, improved posture, and confidence in movement.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="#register"
              className="inline-block px-8 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-full font-medium shadow"
            >
              Join the 10-Day Workshop
            </a>
            <Link href="#details" className="inline-block px-6 py-3 border border-gray-700 rounded-full text-gray-200">
              See details
            </Link>
          </div>
        </section>

        {/* Workshop details */}
        <section id="details" className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-emerald-50/10 p-6 rounded-xl border border-emerald-100">
            <h3 className="text-xl font-semibold text-white mb-3">What you'll get</h3>
            <ul className="text-gray-300 list-disc pl-5 space-y-2">
              <li>Daily 30–40 minute guided sessions (recorded + live)</li>
              <li>Progressive workouts focused on core, posture & mobility</li>
              <li>Simple, practical sleep & recovery tips</li>
              <li>Private WhatsApp support & community</li>
              <li>Bonus: short mobility flows for mornings</li>
            </ul>
          </div>

          <div className="bg-emerald-50/8 p-6 rounded-xl border border-emerald-100">
            <h3 className="text-xl font-semibold text-white mb-3">Schedule & format</h3>
            <p className="text-gray-300 mb-4">Daily sessions for 10 consecutive days. Live sessions will be scheduled in the evening (HK time); recordings available for 48 hours.</p>
            <div className="grid gap-2">
              <div className="flex justify-between text-sm text-gray-300">
                <span>Format</span><span>Live + recorded</span>
              </div>
              <div className="flex justify-between text-sm text-gray-300">
                <span>Duration</span><span>30–40 min / session</span>
              </div>
              <div className="flex justify-between text-sm text-gray-300">
                <span>Group size</span><span>Small groups (max 12)</span>
              </div>
              <div className="flex justify-between text-sm text-gray-300">
                <span>Price</span><span className="font-semibold text-white">HK$ 680</span>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials (optional) */}
        <section className="mb-12">
          <h4 className="text-xl font-semibold text-white mb-4">What participants say</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <blockquote className="bg-white/5 p-4 rounded-lg text-gray-200">
              “I felt stronger after week 1 — gentle, effective coaching.” <div className="mt-2 text-sm text-gray-400">— Asha</div>
            </blockquote>
            <blockquote className="bg-white/5 p-4 rounded-lg text-gray-200">
              “Clear progress and lovely community.” <div className="mt-2 text-sm text-gray-400">— Maria</div>
            </blockquote>
            <blockquote className="bg-white/5 p-4 rounded-lg text-gray-200">
              “Great for beginners who want strength without injury.” <div className="mt-2 text-sm text-gray-400">— Priya</div>
            </blockquote>
          </div>
        </section>

        {/* Register Form */}
        <section id="register" className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Register for the 10-Day Workshop</h3>
          <p className="text-sm text-gray-600 mb-4">Fill the form below — after submitting you'll be redirected to a confirmation page with payment instructions.</p>

          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="grid gap-3"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input name="name" required placeholder="Full name" className="px-3 py-2 border rounded-md" />
              <input name="email" required type="email" placeholder="Email" className="px-3 py-2 border rounded-md" />
            </div>

            <input name="phone" placeholder="Phone / WhatsApp" className="px-3 py-2 border rounded-md" />

            <select name="package" className="px-3 py-2 border rounded-md">
              <option value="standard">Standard — HK$ 680</option>
              <option value="with-1-1">Standard + 1× 30min private session — HK$ 980</option>
            </select>

            <textarea name="notes" rows={4} placeholder="Any relevant notes (injuries, preferences)" className="px-3 py-2 border rounded-md" />

            {/* Redirect to thank-you after submission (Formspree supports redirect via _next param or use JS — here we add a hidden _next) */}
            <input type="hidden" name="_next" value="/workshop/thank-you" />

            <div className="flex flex-col sm:flex-row gap-3 items-center justify-between mt-2">
              <button type="submit" className="px-6 py-2 bg-emerald-600 rounded-full text-white font-medium shadow">Register & Pay</button>
              <div className="text-sm text-gray-600">Limited spots — secure your place now.</div>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
