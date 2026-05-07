const programmes = [
  { level: "Play School", age: "2-3 years", desc: "Foundational play-based learning to spark curiosity.", color: "from-pink-50 to-pink-100 border-pink-200" },
  { level: "Pre KG", age: "3-4 years", desc: "A gentle transition into structured early learning and social development.", color: "from-yellow-50 to-yellow-100 border-yellow-200" },
  { level: "LKG", age: "4-5 years", desc: "Early literacy, numeracy, and confidence-building with three languages, including Hindi.", color: "from-green-50 to-green-100 border-green-200" },
  { level: "UKG", age: "5-6 years", desc: "Strong kindergarten preparation with computer science introduced from UKG itself.", color: "from-blue-50 to-blue-100 border-blue-200" },
  { level: "Grade I-V", age: "6-10 years", desc: "Strong academic foundation with the CBSE syllabus and AI foundational training from Grade I.", color: "from-purple-50 to-purple-100 border-purple-200" },
  { level: "Grade VI-VIII", age: "11-13 years", desc: "Deep subject knowledge with AI & Robotics exposure.", color: "from-orange-50 to-orange-100 border-orange-200" },
  { level: "Grade IX-X", age: "14-15 years", desc: "Focused secondary learning with expert faculty guidance.", color: "from-rose-50 to-rose-100 border-rose-200" },
];

export default function Academics() {
  return (
    <section id="academics" className="py-20 md:py-28 bg-navy-900 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold-400/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-400 bg-gold-400/10 border border-gold-400/20 px-3 py-1 rounded-full mb-3">
            Academics
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            Classes &amp; Curriculum
          </h2>
          <div className="w-14 h-1 bg-gold-400 rounded-full mx-auto mt-4 mb-4" />
          <p className="text-white/60 max-w-xl mx-auto text-sm md:text-base">
            A structured learning journey from early childhood through secondary education,
            following the CBSE syllabus.
          </p>
        </div>

        {/* Curriculum Banner */}
        <div className="bg-gold-gradient rounded-2xl p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 mb-12 shadow-xl">
          <div>
            <p className="font-display font-bold text-navy-900 text-xl md:text-2xl">CBSE Syllabus</p>
            <p className="text-navy-800/70 text-sm mt-1">Updated curriculum with AI &amp; Robotics for future-ready students</p>
          </div>
          <div className="flex gap-4 text-center">
            <div className="bg-navy-900/10 rounded-xl px-5 py-3">
              <p className="font-display font-bold text-navy-900 text-2xl">Play School - Grade X</p>
              <p className="text-navy-800/70 text-xs">Grade Levels</p>
            </div>
            <div className="bg-navy-900/10 rounded-xl px-5 py-3">
              <p className="font-display font-bold text-navy-900 text-2xl">STEM</p>
              <p className="text-navy-800/70 text-xs">AI & Robotics</p>
            </div>
          </div>
        </div>

        {/* Programmes grid */}
        <div className="flex flex-wrap justify-center gap-5">
          {programmes.map((p, i) => (
            <div
              key={i}
              className={`w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc((100%-2.5rem)/3)] bg-gradient-to-br ${p.color} border rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-200`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display font-bold text-navy-900 text-lg">{p.level}</h3>
                <span className="text-xs font-semibold text-navy-600 bg-white/60 border border-navy-200/40 px-2 py-0.5 rounded-full">
                  {p.age}
                </span>
              </div>
              <p className="text-navy-700/80 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
