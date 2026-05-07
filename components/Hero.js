export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/school-staff.jpg')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900/90 via-navy-900/75 to-navy-800/60" />

      {/* Decorative gold arc */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32"
        style={{
          background: "linear-gradient(to top, rgba(10,31,68,0.15), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gold-400/20 border border-gold-400/40 text-gold-300 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 animate-fade-up">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          Admissions Open 2026 – 2027
        </div>

        {/* School Name */}
        <h1
          className="font-display font-black text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-3 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          TINY TOTS
          <span className="block text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(90deg, #e8b84b, #c8992a, #e8b84b)", WebkitBackgroundClip: "text" }}
          >
            National School
          </span>
        </h1>

        {/* Motto */}
        <p
          className="text-white/70 text-base md:text-lg italic font-body mt-2 mb-8 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          "Place Your Child at the Right Place"
        </p>

        {/* Stats row */}
        <div
          className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          {[
            { val: "Since 2006", label: "Established" },
            { val: "CBSE", label: "Affiliated" },
            { val: "Play – X", label: "Classes" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display font-bold text-gold-300 text-xl md:text-2xl">{s.val}</p>
              <p className="text-white/50 text-xs tracking-widest uppercase">{s.label}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#contact"
            className="bg-gold-gradient text-navy-900 font-bold px-8 py-3.5 rounded-full shadow-2xl hover:scale-105 hover:shadow-gold-400/30 transition-all duration-200 text-sm md:text-base"
          >
            Apply for Admission
          </a>
          <a
            href="#about"
            className="bg-white/10 backdrop-blur border border-white/20 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/20 transition-all duration-200 text-sm md:text-base"
          >
            Explore School
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <span className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
