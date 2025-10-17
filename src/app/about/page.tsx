export default function AboutPage() {
  return (
    <section className="bg-gray-900 py-16 px-6 md:px-20 text-gray-100">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="flex justify-center">
          <img
            src="/images/4.png"
            alt="Yoga with Chhavi"
            className="rounded-2xl shadow-2xl w-full max-w-sm object-cover"
          />
        </div>

        {/* Right: Text Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-rose-400 mb-4">
            Meet Your Creator, Yoga with Chhavi
          </h1>

          <p className="text-emerald-200 font-medium mb-6 ">
            Yoga Teacher | Sound Healer
          </p>

          <p className="text-gray-200 mb-4">
            Chhavi is a certified yoga teacher and sleep coach who has been practicing yoga for the last
            15 years. She has trained under multiple experienced yoga teachers across India, with over
            10 years of teaching experience.
          </p>

          <p className="text-gray-200 mb-4">
            Her classes blend <strong>Vinyasa Yoga</strong>, <strong>Classical Hatha Yoga</strong>,{" "}
            <strong>Restorative Yoga</strong>, and <strong>mobility training</strong>. Each session is
            carefully designed to balance strength, flexibility, agility, and mindfulness — with
            personalized adjustments to suit every individual.
          </p>

          <p className="text-gray-200 mb-4">
            Currently, she leads <strong>online group classes on Zoom</strong>, helping students connect
            deeper with their bodies and minds from the comfort of their homes.
          </p>

          <p className="text-gray-200 mb-4">
            With a mission to enhance both physical and mental well-being, Chhavi developed an interest
            in the science of sleep. This led her to create <strong>sleep coaching programs</strong> that
            merge traditional Hatha Yoga with modern sleep science — guiding people toward restful nights
            and balanced days.
          </p>

          <p className="text-gray-200 mb-8">
            Her sleep plans are simple, practical, and easy to follow. She is deeply committed to the{" "}
            <strong>physical, mental, and spiritual growth</strong> of her students.
          </p>

<button className="inline-block px-8 py-3 bg-emerald-600 text-white rounded-full shadow-md 
  hover:bg-black-500 active:scale-95 active:shadow-inner transition-all duration-200">
            Join a Class
          </button>
        </div>
      </div>
    </section>
  );
}
