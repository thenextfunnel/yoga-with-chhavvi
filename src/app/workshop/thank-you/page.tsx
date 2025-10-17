// src/app/workshop/thank-you/page.tsx
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center py-20 px-6">
      <div className="max-w-xl text-center bg-white rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Thanks — you're registered!</h2>
        <p className="text-gray-700 mb-4">We've received your registration. Check your email for payment instructions and the workshop schedule.</p>

        <p className="text-sm text-gray-600 mb-6">If you don't see the email within 10 minutes, check spam or contact hello@beyoutifulstudio.com</p>

        <div className="flex justify-center gap-3">
          <Link href="/" className="px-4 py-2 border rounded-md text-gray-800">Return Home</Link>
          <a href="mailto:hello@beyoutifulstudio.com" className="px-4 py-2 bg-emerald-600 text-white rounded-md">Contact us</a>
        </div>
      </div>
    </main>
  );
}
