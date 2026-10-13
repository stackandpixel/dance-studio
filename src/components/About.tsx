import React from 'react';
import { Heart, Sparkles, ShieldCheck, Video, Users, Building2 } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData';
import { DanceVisualArt } from './DanceVisualArt';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0c0c11] text-white relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase font-bold tracking-widest text-pink-400 mb-3">
            About Rhythm Republic · Baner, Pune
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase leading-tight text-balance">
            More Than Dance. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
              It’s Your Identity.
            </span>
          </h2>
          <p className="mt-5 text-lg text-neutral-300 leading-relaxed">
            Founded with a vision to redefine urban dance education in Maharashtra, Rhythm Republic is built on one simple belief: dance belongs to everyone. Whether you are stepping onto a dance floor for the very first time or training for competitive cyphers, we provide the space, the guidance, and the community to help you own your movement.
          </p>
        </div>

        {/* Editorial Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left: Atmospheric Studio Visual Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl relative">
              <DanceVisualArt
                type="studio"
                alt="Rhythm Republic Studio Interior in Baner, Pune"
                aspectRatio="4:3"
                className="w-full h-80 object-cover"
                src="/images/studio_interior.webp"
              />
              <div className="p-6 bg-neutral-900/90 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs font-semibold text-pink-400 uppercase tracking-wider mb-1">
                  <Building2 className="w-4 h-4" />
                  <span>The Baner Facility</span>
                </div>
                <h3 className="text-lg font-bold text-white font-display">
                  Engineered for Dancers, Built for Community
                </h3>
                <p className="text-sm text-neutral-400 mt-2">
                  Located in the vibrant Baner hub near Balewadi High Street, our studio features shock-absorbing sprung wooden floors designed to prevent knee and joint fatigue, ceiling-high acoustic mirrors, and stage-grade concert sound.
                </p>
              </div>
            </div>

            {/* Note on sample demo data */}
            <div className="mt-4 p-3 rounded-lg bg-white/5 border border-white/10 text-xs text-neutral-400">
              <span className="text-amber-400 font-semibold">Demo Notice: </span>
              {STUDIO_CONFIG.disclaimer}
            </div>
          </div>

          {/* Right: Core Values & What Makes Us Different */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-pink-500/30 transition-all">
              <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-4">
                <Heart className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white font-display mb-2">
                Zero-Hesitation Beginners
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Nervous about your first step? Our coaches break down eight-count rhythms into simple muscle memory without intimidation or complicated jargon.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-purple-500/30 transition-all">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white font-display mb-2">
                Indian & Global Fusion
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed">
                From high-energy Punjabi Bhangra and Bollywood thumkas to international urban popping and contemporary floorwork, celebrate diverse movement cultures.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-emerald-500/30 transition-all">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white font-display mb-2">
                Safe Anatomy & Warmups
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Every 75-minute class includes dynamic mobility warmups and post-dance stretches to prevent injuries, improve posture, and build long-term flexibility.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-amber-500/30 transition-all">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                <Video className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white font-display mb-2">
                Studio Video Projects
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Celebrate your progress! Every monthly batch wraps up with an optional high-definition group video shoot with cinematic studio lighting for your memories.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
