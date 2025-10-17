'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // 🔹 Replace this with your actual Formspree form ID
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORMSPREE_ID';

  // 🔹 Your exact location in India
  const defaultAddress = 'Western Express Highway, Dahisar, Mumbai, India';

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data?.error || 'Submission failed. Please try again.');
        setStatus('error');
      }
    } catch (err) {
      setErrorMsg((err as Error).message || 'Network error');
      setStatus('error');
    }
  }

  // 🔹 Generate Google Maps embed URL dynamically
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    defaultAddress
  )}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="container mx-auto px-6 py-12 max-w-3xl">
      <h2 className="text-3xl font-bold mb-4">Contact & Bookings</h2>
      <p className="text-gray-600 mb-6">
        Phone / WhatsApp: +852 84811834 • Email: hello@yogawithchavvi.com
      </p>

      {/* ✅ Working Contact Form */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your name"
          className="w-full p-3 border rounded"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded"
          required
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Message / Booking details"
          className="w-full p-3 border rounded"
          required
        />

        <div className="flex items-center gap-4">
          <button
            type="submit"
            className="px-5 py-3 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <span className="text-green-600">✅ Message sent successfully!</span>
          )}
          {status === 'error' && (
            <span className="text-red-600">❌ Error: {errorMsg}</span>
          )}
        </div>
      </form>

      {/* ✅ Location Section */}
      <div className="mt-8">
        <h4 className="font-semibold mb-2">Location</h4>
        <p className="text-sm text-gray-600">{defaultAddress}</p>
        <div className="mt-4">
          <iframe
            title="Location map"
            src={mapSrc}
            className="w-full h-64 rounded"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
