'use client';

export default function Hero() {
  return (
    <section className="relative text-white">
      <div className="max-w-6xl mx-auto px-6 py-32 text-center">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-md">
          AI-Driven Semantic Search <br /> for Global Academic Opportunities
        </h1>

        {/* Subline */}
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto drop-shadow-sm">
          Find your next PhD, Masters, or Postdoc faster. Powered by AI and real-time web crawling.
        </p>

        {/* CTA Button */}
        <a
          href="#search"
          className="mt-10 inline-block bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-xl shadow-lg backdrop-blur-md transition-all duration-300"
        >
          Start Your Career Journey
        </a>
      </div>

      {/* Optional decorative overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-900 opacity-40 pointer-events-none"></div> */}
    </section>
  );
}
