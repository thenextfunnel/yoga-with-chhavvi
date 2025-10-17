import Link from "next/link";

export default function ServicesGrid() {
  const services = [
    {
      title: "About the Workshop",
      color: "bg-rose-50",
      accent: "text-rose-700",
      bullets: [
        "Build core strength and stability",
        "Improve posture and body awareness",
        "Boost energy and confidence",
        "Feel lighter, stronger, and more in control of your body",
      ],
    },
    {
      title: "What You’ll Get in 10 Days",
      color: "bg-amber-50",
      accent: "text-amber-700",
      bullets: [
        "Daily 1-Hour Live Yoga Sessions focused on core, posture, and functional strength",
        "Plank Progress Tracker to measure improvement",
        "Personal Wins: better posture, stronger core, more energy",
        "Community Support in a private group for motivation",
        "Confidence Boost by Day 10 to continue your strength journey",
      ],
    },
    {
      title: "Your 10-Day Promise",
      color: "bg-emerald-50",
      accent: "text-emerald-700",
      bullets: [
        "Stronger, more engaged core muscles",
        "Longer plank hold capacity (plus a fun reward!)",
        "Improved posture, balance, and energy",
        "Motivation and confidence to keep going",
      ],
    },
    {
      title: "Who is This For?",
      color: "bg-indigo-50",
      accent: "text-indigo-700",
      bullets: [
        "Women in their 30s & 40s",
        "Complete beginners welcome",
        "Beginner or intermediate yoga enthusiasts",
        "Anyone wanting core strength & confidence without gym workouts",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h3 className="text-5xl font-bold text-center mb-10 text-emerald-600">
        About The Workshop
      </h3>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        A 10-day online yoga-based program designed specifically for women who want to build strength,
        confidence, and control — from the inside out.
      </p>

      {/* Grid Cards */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {services.map((s) => (
          <div key={s.title} className={`${s.color} rounded-2xl p-6 shadow`}>
            <h4 className={`font-bold text-xl mb-3 ${s.accent}`}>{s.title}</h4>
            <ul className="text-gray-700 space-y-2">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-1 text-rose-600">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-12">
  <Link
    href="/workshop"
    className="inline-block px-8 py-3 bg-emerald-600 text-white rounded-full shadow-md 
    hover:text-white hover:shadow-lg active:scale-95 active:shadow-inner transition-transform duration-200 transform focus:outline-none"
  >
    Join the 10-Day Workshop
  </Link>
  <p className="text-gray-500 text-sm mt-3">
    Starts Soon • Limited Spots Available
  </p>
</div>
    </div>
  );
}
