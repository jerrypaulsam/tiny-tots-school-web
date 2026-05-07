import {
  Bot,
  UserCheck,
  Heart,
  Trophy,
  Sparkles,
  BadgeIndianRupee,
  GraduationCap,
  Bus,
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI & Robotics Curriculum",
    desc: "Regularly updated curriculum that introduces students to AI and Robotics, developing creativity and problem-solving skills for the future.",
    color: "bg-blue-50 text-blue-600 border-blue-100",
    accent: "text-blue-600",
  },
  {
    icon: UserCheck,
    title: "Individual Attention",
    desc: "Student-friendly approach with dedicated teachers. Every child receives personal attention to understand their strengths and guide improvement.",
    color: "bg-green-50 text-green-600 border-green-100",
    accent: "text-green-600",
  },
  {
    icon: Heart,
    title: "Homely & Caring Atmosphere",
    desc: "A safe, friendly, and homely environment where children feel comfortable and confident, supporting emotional and social development.",
    color: "bg-pink-50 text-pink-600 border-pink-100",
    accent: "text-pink-600",
  },
  {
    icon: Trophy,
    title: "Academics & Extra-Curricular",
    desc: "Equal importance to academics and co-curricular activities including music, sports, arts, and cultural programmes.",
    color: "bg-yellow-50 text-yellow-600 border-yellow-100",
    accent: "text-yellow-600",
  },
  {
    icon: Sparkles,
    title: "Holistic Development",
    desc: "Shaping confident, responsible, and talented individuals by focusing on intellectual, physical, and creative growth.",
    color: "bg-purple-50 text-purple-600 border-purple-100",
    accent: "text-purple-600",
  },
  {
    icon: BadgeIndianRupee,
    title: "Nominal Fees",
    desc: "Quality education made accessible with reasonable and transparent fee structures, ensuring no financial barrier to learning.",
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    accent: "text-emerald-600",
  },
  {
    icon: GraduationCap,
    title: "Expert Teachers",
    desc: "Highly qualified, experienced, and passionate educators dedicated to inspiring every student toward academic excellence.",
    color: "bg-indigo-50 text-indigo-600 border-indigo-100",
    accent: "text-indigo-600",
  },
  {
    icon: Bus,
    title: "Transportation Available",
    desc: "Safe and reliable school bus services covering key routes across Thirumala and surrounding areas for students' convenience.",
    color: "bg-orange-50 text-orange-600 border-orange-100",
    accent: "text-orange-600",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-500 bg-gold-50 border border-gold-200 px-3 py-1 rounded-full mb-3">
            Why Choose Us
          </span>
          <h2 className="section-title">
            Features &amp;{" "}
            <span className="text-gold-500">Facilities</span>
          </h2>
          <div className="w-14 h-1 bg-gold-400 rounded-full mx-auto mt-4 mb-4" />
          <p className="text-navy-700/60 max-w-xl mx-auto text-sm md:text-base">
            We offer everything a child needs to grow academically, socially, and creatively.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ icon: Icon, title, desc, color, accent }, i) => (
            <div
              key={i}
              className="group border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white"
            >
              <div className={`inline-flex p-3 rounded-xl border ${color} mb-4`}>
                <Icon size={22} />
              </div>
              <h3 className={`font-display font-bold text-navy-900 text-base mb-2 group-hover:${accent} transition-colors`}>
                {title}
              </h3>
              <p className="text-navy-700/60 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
