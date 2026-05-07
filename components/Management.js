import Image from "next/image";

const team = [
  {
    name: "Sheeja Albert",
    role: "Principal",
    img: "/sheeja.jpg",
    message:
      "At Tiny Tots National School, we believe every child is unique and gifted. Our mission is to provide a nurturing space where young minds bloom into responsible, compassionate, and capable individuals ready for tomorrow's world.",
  },
  {
    name: "Vinaya Kumar Johnson",
    role: "Managing Director",
    img: "/vinayan.jpg",
    message:
      "Since our founding in 2006, the management has been committed to maintaining high standards of education, teacher excellence, and infrastructure that supports a vibrant learning community for all our students.",
  },
];

export default function Management() {
  return (
    <section id="management" className="py-20 md:py-28 bg-navy-50" style={{ background: "linear-gradient(135deg, #f0f4fb 0%, #fdfcf7 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-500 bg-gold-50 border border-gold-200 px-3 py-1 rounded-full mb-3">
            Leadership
          </span>
          <h2 className="section-title">
            Principal &amp;{" "}
            <span className="text-gold-500">Management</span>
          </h2>
          <div className="w-14 h-1 bg-gold-400 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {team.map((person, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col sm:flex-row hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative w-full sm:w-40 md:w-44 flex-shrink-0 aspect-[4/5] bg-navy-100">
                <Image
                  src={person.img}
                  alt={person.name}
                  fill
                  className="object-contain object-top"
                />
                {/* Overlay gradient on mobile */}
                <div className="sm:hidden absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-center">
                <div className="w-8 h-0.5 bg-gold-400 mb-3" />
                <blockquote className="text-navy-700/70 text-sm leading-relaxed italic mb-4">
                  "{person.message}"
                </blockquote>
                <div>
                  <p className="font-display font-bold text-navy-900 text-base">{person.name}</p>
                  <p className="text-gold-500 text-xs font-semibold tracking-wide uppercase">{person.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
