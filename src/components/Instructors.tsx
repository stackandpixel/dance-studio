import React from 'react';
import { Instagram, Sparkles } from 'lucide-react';
import { INSTRUCTORS } from '../data/studioData';
import { DanceVisualArt, VisualType } from './DanceVisualArt';

export const Instructors: React.FC = () => {
  const getVisualType = (id: string): VisualType => {
    switch (id) {
      case 'rohan': return 'instructor-rohan';
      case 'ananya': return 'instructor-ananya';
      case 'kabir': return 'instructor-kabir';
      default: return 'hero';
    }
  };

  return (
    <section id="instructors" className="py-24 bg-[#0c0c11] text-white relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase font-bold tracking-widest text-pink-400 mb-2">
            Artistic Mentorship
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase leading-tight">
            Learn From Pune’s <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
              Passionate Movement Directors
            </span>
          </h2>
          <p className="mt-4 text-neutral-300 text-base leading-relaxed">
            Our faculty combines classical rigor, street battle experience, and Bollywood stage direction. Each mentor is dedicated to breaking down movement with empathy, precision, and infectious energy.
          </p>
        </div>

        {/* 3 Instructor Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSTRUCTORS.map((instructor) => (
            <article
              key={instructor.id}
              className="flex flex-col rounded-2xl bg-neutral-900/60 border border-white/10 overflow-hidden hover:border-pink-500/40 transition-all duration-300 justify-between group"
            >
              <div>
                {/* Visual Portrait */}
                <div className="aspect-[4/5] overflow-hidden bg-neutral-950 relative">
                  <DanceVisualArt
                    type={getVisualType(instructor.id)}
                    alt={`${instructor.name} · Dance Instructor at Rhythm Republic Pune`}
                    aspectRatio="3:4"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={`/images/instructor_${instructor.id}.webp`}
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

                  {/* Instructor Name & Role on image base */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-xs font-semibold text-pink-400 uppercase tracking-wider mb-0.5">
                      {instructor.role}
                    </div>
                    <h3 className="text-xl font-bold font-display text-white">
                      {instructor.name}
                    </h3>
                  </div>
                </div>

                {/* Details Body */}
                <div className="p-6 space-y-4">
                  {/* Unboxed Specialization strip */}
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-neutral-300">
                    <span className="text-pink-300 font-medium">Focus:</span>
                    {instructor.specialization.map((spec, i) => (
                      <React.Fragment key={spec}>
                        <span>{spec}</span>
                        {i < instructor.specialization.length - 1 && (
                          <span className="text-neutral-600">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {instructor.bio}
                  </p>

                  {/* Quote */}
                  <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-xs text-amber-200/90 italic">
                    "{instructor.quote}"
                  </div>

                  {/* Sample Profile Disclaimer */}
                  <div className="text-[11px] text-neutral-500 flex items-center gap-1 pt-1">
                    <Sparkles className="w-3 h-3 text-pink-400 shrink-0" />
                    <span>{instructor.sampleExperience}</span>
                  </div>
                </div>
              </div>

              {/* Instagram handle link */}
              <div className="px-6 pb-6 pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-neutral-300 hover:text-pink-400 border border-white/10 transition-colors flex items-center justify-center gap-2"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-400" />
                  <span>{instructor.instagram}</span>
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
