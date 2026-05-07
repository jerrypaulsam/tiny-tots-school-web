import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/classroom.jpg", caption: "Classroom Learning" },
  { src: "/robotics-ai-lab.jpeg", caption: "Science & Robotics Lab" },
  { src: "/sports-day.jpg", caption: "Annual Sports Day" },
  { src: "/cultural-programs.jpg", caption: "Cultural Programs" },
  { src: "/arts-day.jpg", caption: "Art & Creativity" },
  { src: "/campus-life.jpg", caption: "Campus Life" },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), []);
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), []);

  // Auto-advance
  useEffect(() => {
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-400 bg-gold-400/10 border border-gold-400/20 px-3 py-1 rounded-full mb-3">
            Gallery
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            Life at Tiny Tots
          </h2>
          <div className="w-14 h-1 bg-gold-400 rounded-full mx-auto mt-4" />
        </div>

        {/* Main slider */}
        <div className="relative rounded-3xl overflow-hidden aspect-[16/9] md:aspect-[21/9] shadow-2xl mb-6 group">
          {images.map((img, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
            >
              <Image
                src={img.src}
                alt={img.caption}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-6 text-white font-display font-bold text-lg md:text-2xl">
                {img.caption}
              </p>
            </div>
          ))}

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200"
            aria-label="Previous"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200"
            aria-label="Next"
          >
            <ChevronRight size={22} />
          </button>

          {/* Slide count */}
          <div className="absolute top-4 right-4 bg-black/40 text-white/70 text-xs px-2 py-1 rounded-full">
            {current + 1} / {images.length}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mb-8">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current ? "w-6 h-2 bg-gold-400" : "w-2 h-2 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 md:gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`relative aspect-square rounded-xl overflow-hidden transition-all duration-200 ${
                i === current ? "ring-2 ring-gold-400 scale-[1.04]" : "opacity-60 hover:opacity-100"
              }`}
            >
              <Image src={img.src} alt={img.caption} fill className="object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
