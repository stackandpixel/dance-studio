import React from 'react';
import { Smile, Award, Users, Trophy, Flame, HeartHandshake } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Smile,
      title: "Zero-Hesitation Beginners",
      description: "Never danced before? Start right here. More than half our students walk in feeling shy or uncoordinated. Our coaches break down music and counts without pressure.",
      color: "text-pink-400",
      bg: "bg-pink-500/10",
      border: "border-pink-500/20"
    },
    {
      icon: Award,
      title: "Dedicated Mentors",
      description: "Instructors with extensive national competition and commercial background who focus on anatomical safety, posture corrections, and genuine growth.",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20"
    },
    {
      icon: Users,
      title: "Small-Group Attention",
      description: "We cap batch sizes to 12–15 dancers max. No overcrowded halls where you are lost in the 4th row—our mentors see and guide every dancer personally.",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20"
    },
    {
      icon: Trophy,
      title: "Stage & Showcase Access",
      description: "From mid-year studio showcases to professionally shot 4K choreography videos in Baner, get genuine opportunities to own the spotlight.",
      color: "text-rose-400",
      bg: "bg-rose-500/10",
      border: "border-rose-500/20"
    },
    {
      icon: Flame,
      title: "High-Energy Fitness",
      description: "Burn between 400 to 600 calories in a single session while learning real choreographies instead of staring at a treadmill clock.",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
    {
      icon: HeartHandshake,
      title: "Warm Pune Community",
      description: "Dance circles, weekend cyphers, tea sessions post-class, and an ego-free circle of college students, working pros, and kids cheering each other on.",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20"
    }
  ];

  return (
    <section className="py-24 bg-[#0c0c11] text-white relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase font-bold tracking-widest text-pink-400 mb-2">
            Why Rhythm Republic Pune
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase leading-tight text-balance">
            Designed for Dancers. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
              Welcoming to Beginners.
            </span>
          </h2>
          <p className="mt-4 text-base text-neutral-300 leading-relaxed">
            We built our studio in Baner with the belief that dance should be an empowering sanctuary—not an intimidating test. Here is why dancers stay with us.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${pillar.bg} border ${pillar.border} flex items-center justify-center ${pillar.color} mb-6`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold font-display text-white mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
