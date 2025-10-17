// src/app/components/ContactForm.tsx
export default function ContactForm() {
  return (
    <section id="contact" className="w-full py-16 bg-gray-900">
      <div className="mx-auto max-w-3xl px-6">
        <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="px-6 py-8 md:px-10 md:py-10">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Contact & Bookings
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              WhatsApp:{" "}
              <a
                className="font-medium text-gray-800 underline"
                href="https://wa.me/85284811834"
                target="_blank"
                rel="noreferrer"
              >
                +852 84811834
              </a>
              {" • "}
              Email:{" "}
              <a className="font-medium text-gray-800 underline" href="mailto:hello@beyoutifulstudio.com">
                hello@beyoutifulstudio.com
              </a>
            </p>

            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="grid grid-cols-1 gap-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="sr-only" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Name"
                  className="w-full px-4 py-2 text-sm border border-gray-200 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:border-emerald-300"
                />

                <label className="sr-only" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full px-4 py-2 text-sm border border-gray-200 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:border-emerald-300"
                />
              </div>

              <label className="sr-only" htmlFor="phone">Phone / WhatsApp</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone / WhatsApp"
                className="w-full px-4 py-2 text-sm border border-gray-200 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:border-emerald-300"
              />

              <label className="sr-only" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Message / Class you'd like to book"
                className="w-full px-4 py-3 text-sm border border-gray-200 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:border-emerald-300 resize-none"
              />

              <div className="mt-2 flex items-center justify-between gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-md shadow-sm transition"
                  aria-label="Send message"
                >
                  Send message
                </button>

                <div className="text-sm">
                  <a
                    href="https://calendly.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-600 hover:text-gray-800 underline"
                  >
                    Or book directly
                  </a>
                </div>
              </div>

              <p className="mt-3 text-xs text-gray-400">
                We respect your privacy. By contacting us you agree to receive replies regarding your request.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
