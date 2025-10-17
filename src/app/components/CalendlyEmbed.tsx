// src/app/components/CalendlyEmbed.tsx
export default function CalendlyEmbed() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="rounded-lg overflow-hidden shadow">
        <iframe
          title="Booking"
          src="https://calendly.com/YOUR_CALENDLY_LINK/30min?embed_domain=yourdomain.com&embed_type=Inline"
          width="100%"
          height="700"
          frameBorder="0"
        />
      </div>
    </div>
  );
}
