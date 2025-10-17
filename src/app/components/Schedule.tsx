export default function Schedule() {
  const classes = [
    { name: "Vinyasa Flow", days: "Mon, Wed, Fri", time: "7:00 AM" },
    { name: "Hatha Slow", days: "Tue, Thu", time: "6:00 PM" },
    { name: "Small Group Private", days: "Sat", time: "10:00 AM" },
  ];

  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Heading */}
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Weekly Schedule
        </h3>
        <p className="text-gray-500 mb-12">
          Find the class that fits your energy, schedule, and intention.
        </p>

        {/* Schedule Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classes.map((c) => (
            <div
              key={c.name}
              className="group bg-gradient-to-b from-emerald-50 to-white border border-emerald-100 hover:border-emerald-300 transition-all duration-300 p-8 rounded-2xl shadow-sm hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {c.name}
                </h4>
                <p className="text-gray-600">{c.days}</p>
              </div>

              <div className="mt-6">
                <p className="text-lg font-semibold text-emerald-700">
                  {c.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
