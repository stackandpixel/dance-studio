import React, { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/studioData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : TESTIMONIALS.length - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < TESTIMONIALS.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-24 bg-[#09090b] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase font-bold tracking-widest text-pink-400 mb-2">
            Student Stories & Community
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase leading-tight">
            From First Step to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
              Own The Floor
            </span>
          </h2>
          <p className="mt-3 text-neutral-400 text-base leading-relaxed">
            Real stories from beginners, busy tech professionals from Hinjawadi, wedding couples, and young parents discovering joy through dance in Baner.
          </p>
        </div>

        {/* Carousel Showcase */}
        <div className="relative bg-neutral-900/60 border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="max-w-4xl mx-auto">
            
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>

              {/* Navigation arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  aria-label="Previous testimonial"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-white transition-colors border border-white/10 focus-visible:outline-2 focus-visible:outline-pink-500"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next testimonial"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-white transition-colors border border-white/10 focus-visible:outline-2 focus-visible:outline-pink-500"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="relative">
              <Quote className="w-12 h-12 text-pink-500/20 absolute -top-6 -left-6 pointer-events-none" />
              <blockquote className="text-lg sm:text-2xl text-neutral-100 font-normal leading-relaxed text-balance">
                "{TESTIMONIALS[currentIndex].quote}"
              </blockquote>
            </div>

            {/* Student Info */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-base font-bold font-display text-white">
                  {TESTIMONIALS[currentIndex].name}
                </div>
                <div className="text-xs text-pink-400 font-medium">
                  {TESTIMONIALS[currentIndex].batch}
                </div>
                <div className="text-xs text-neutral-400 mt-0.5">
                  {TESTIMONIALS[currentIndex].duration}
                </div>
              </div>

              {/* Slide Dots */}
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      currentIndex === i ? 'w-6 bg-pink-500' : 'w-2 bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Demo Disclaimer notice */}
        <div className="mt-6 text-center text-xs text-neutral-500 flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-pink-400/80" />
          <span>Note: Testimonials above are illustrative sample profiles for demonstration. Verified student feedback can be connected via Google Reviews.</span>
        </div>

      </div>
    </section>
  );
};
