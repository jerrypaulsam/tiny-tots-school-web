import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image
                src="/school-exterior.webp"
                alt="Tiny Tots National School Building"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-2 md:-right-6 bg-navy-gradient text-white px-6 py-4 rounded-2xl shadow-xl">
              <p className="font-display font-bold text-2xl text-gold-300">18+</p>
              <p className="text-xs text-white/70 mt-0.5">Years of Excellence</p>
            </div>
            {/* Gold accent bar */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-4 border-l-4 border-gold-400 rounded-tl-xl" />
          </div>

          {/* Text side */}
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-500 bg-gold-50 border border-gold-200 px-3 py-1 rounded-full mb-3">
              About Us
            </span>
            <h2 className="section-title mb-4">
              Nurturing Minds <br />
              <span className="text-gold-500">Since 2006</span>
            </h2>
            <div className="w-14 h-1 bg-gold-400 rounded-full mb-6" />
            <p className="text-navy-700/80 leading-relaxed mb-4">
              Tiny Tots National School was founded in 2006 with a singular vision to create a learning
              environment where every child feels valued, inspired, and prepared for the future. Located
              in the heart of Mangad, Thirumala, Trivandrum, we follow the CBSE syllabus and are
              committed to holistic growth.
            </p>
            <p className="text-navy-700/80 leading-relaxed mb-6">
              From Play School to Grade X, our dedicated faculty and modern curriculum, enriched with
              AI &amp; Robotics, ensure that students develop the skills, character, and confidence needed
              to thrive in a rapidly changing world.
            </p>
            {/* Info grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "UDISE No.", value: "32141102801" },
                { label: "Syllabus", value: "CBSE" },
                { label: "Founded", value: "Year 2006" },
                { label: "Reg No.", value: "T/721/11" },
              ].map((item) => (
                <div key={item.label} className="bg-gold-50 border border-gold-100 rounded-xl px-4 py-3">
                  <p className="text-gold-600 text-xs font-semibold tracking-wide uppercase">{item.label}</p>
                  <p className="text-navy-900 font-bold text-sm mt-0.5">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
