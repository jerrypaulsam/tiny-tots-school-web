import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactItems = [
  {
    icon: MapPin,
    label: "Address",
    lines: [
      "Opp. CSI Church, Mangad,",
      "Thirumala PO, Trivandrum - 695 006",
      "Kerala, India",
    ],
  },
  {
    icon: Phone,
    label: "Phone",
    lines: ["+91 98951 08777", "+91 62351 69877", "0471 - 235 5877"],
    isPhone: true,
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["tinytotsns2006@gmail.com"],
    isEmail: true,
  },
  {
    icon: Clock,
    label: "School Hours",
    lines: ["Mon-Sat: 9.30 AM - 3.30 PM", "Office: 9 AM - 5 PM", "Caring available up to 6 PM"],
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-500 bg-gold-50 border border-gold-200 px-3 py-1 rounded-full mb-3">
            Contact Us
          </span>
          <h2 className="section-title">
            Get in <span className="text-gold-500">Touch</span>
          </h2>
          <div className="w-14 h-1 bg-gold-400 rounded-full mx-auto mt-4 mb-4" />
          <p className="text-navy-700/60 max-w-md mx-auto text-sm">
            We'd love to hear from you. Reach us directly or visit our campus.
          </p>
        </div>

        {/* Admission Banner */}
        <div className="bg-navy-gradient rounded-3xl p-7 md:p-10 mb-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-gold-300 font-display font-bold text-xl md:text-2xl mb-1">
              Admissions Open 2026-2027
            </p>
            <p className="text-white/60 text-sm">Play School to Grade X | CBSE Syllabus</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="tel:+919895108777"
              className="bg-gold-gradient text-navy-900 font-bold px-6 py-3 rounded-full text-sm text-center hover:scale-105 transition-transform"
            >
              Call Now
            </a>
            <a
              href="mailto:tinytotsns2006@gmail.com"
              className="bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 rounded-full text-sm text-center hover:bg-white/20 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact info cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {contactItems.map(({ icon: Icon, label, lines, isPhone, isEmail }, i) => (
              <div
                key={i}
                className="border border-gray-100 rounded-2xl p-5 hover:border-gold-200 hover:shadow-md transition-all duration-200 bg-white"
              >
                <div className="inline-flex p-2.5 bg-gold-50 border border-gold-100 rounded-xl text-gold-500 mb-3">
                  <Icon size={18} />
                </div>
                <p className="text-xs font-semibold tracking-widest uppercase text-navy-400 mb-2">{label}</p>
                {lines.map((line, j) =>
                  isPhone ? (
                    <a
                      key={j}
                      href={`tel:${line.replace(/\s/g, "")}`}
                      className="block text-navy-800 font-medium text-sm hover:text-gold-500 transition-colors"
                    >
                      {line}
                    </a>
                  ) : isEmail ? (
                    <a
                      key={j}
                      href={`mailto:${line}`}
                      className="block text-navy-800 font-medium text-sm hover:text-gold-500 transition-colors break-all"
                    >
                      {line}
                    </a>
                  ) : (
                    <p key={j} className="text-navy-700/70 text-sm leading-relaxed">
                      {line}
                    </p>
                  )
                )}
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 min-h-[320px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d493.2511353171031!2d76.99781891062634!3d8.498496698870163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb5218bc9c41%3A0xc45b3262f982a234!2sTiny%20Tots%20National%20School!5e0!3m2!1sen!2sus!4v1778058166528!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tiny Tots National School Location"
            >

            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
