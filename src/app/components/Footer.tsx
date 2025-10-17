"use client";

import { Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 py-8 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Studio Info */}
          <div>
            <div className="font-semibold text-gray-800">Yoga With Chhavvi</div>
            <div className="text-xs text-gray-500">
              Flat B, 13/F, Haven Commercial Building, Tin Hau, Hong Kong
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-emerald-600 transition"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-emerald-600 transition"
              aria-label="Facebook"
            >
              <Facebook size={22} />
            </a>
            <a
              href="mailto:info@yogawithchhavvi.com"
              className="text-gray-600 hover:text-emerald-600 transition"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-6 text-xs text-gray-400">
          © {new Date().getFullYear()} Be.you.tiful Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
