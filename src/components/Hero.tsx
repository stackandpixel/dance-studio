import React from 'react';
import { ArrowRight, MessageCircle, MapPin, Sparkles, ChevronDown } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData';
import { openWhatsAppChat, getTrialBookingMessage } from '../utils/whatsapp';
import { DanceVisualArt } from './DanceVisualArt';

interface HeroProps {
  onOpenTrialModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrialModal }) => {
  const handleWhatsAppTrial = () => {
    openWhatsAppChat(getTrialBookingMessage());
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#09090b]">
      {/* Visual Canvas / Background Media Layer */}
      <div className="absolute inset-0 z-0">
        <DanceVisualArt
          type="hero"
          alt="Rhythm Republic energetic dance crew performing in Baner, Pune studio"
          aspectRatio="16:9"
          className="w-full h-full object-cover"
          src="/images/hero_dance_crew.webp"
        />
        {/* Deep atmospheric gradient scrims ensuring WCAG AA legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-[#09090b]/85 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-[#09090b]/70 z-10" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Marquee Copy & Direct CTAs */}
          <div className="lg:col-span-8 flex flex-col items-start space-y-6">
            
            {/* Location & Trust Marker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-semibold uppercase tracking-widest text-neutral-300">
              <MapPin className="w-3.5 h-3.5 text-pink-400" />
              <span>BANER, PUNE · INDIA</span>
              <span className="text-neutral-500">·</span>
              <span className="text-pink-400">STACK & PIXEL STUDIO</span>
            </div>

            {/* Editorial Marquee Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-white uppercase leading-[0.95] text-balance">
              Move Different. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
                Live Loud.
              </span>
            </h1>

            {/* Subtitle / Value Proposition */}
            <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl font-normal leading-relaxed text-balance">
              Discover your style, build your confidence, and find your rhythm with Pune’s dance community. From beginner Bollywood and street hip-hop to bespoke wedding Sangeet choreography.
            </p>

            {/* Primary & Secondary Action Group */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              {/* Primary CTA: WhatsApp direct trial booking */}
              <button
                onClick={handleWhatsAppTrial}
                className="w-full sm:w-auto px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 rounded-lg shadow-xl shadow-pink-950/40 hover:from-purple-500 hover:to-pink-500 transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 group whitespace-nowrap focus-visible:outline-2 focus-visible:outline-pink-500"
              >
                <MessageCircle className="w-5 h-5 text-emerald-300 group-hover:scale-110 transition-transform" />
                <span>Book a Free Trial on WhatsApp</span>
              </button>

              {/* Secondary CTA: Explore Batches */}
              <a
                href="#timetable"
                className="w-full sm:w-auto px-6 py-3.5 text-sm sm:text-base font-semibold text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/15 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-white"
              >
                <span>Explore Classes</span>
                <ArrowRight className="w-4 h-4 text-neutral-400" />
              </a>
            </div>

            {/* Beginner Reassurance Kicker */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-400 pt-1">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Never danced before? Over 65% of our students started as complete beginners.</span>
            </div>

          </div>

          {/* Right Column: Quick Studio Feature Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="p-6 rounded-2xl bg-neutral-900/70 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="text-xs uppercase font-semibold tracking-wider text-pink-400 mb-2">
                Baner Studio Batches
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-display">
                Upcoming Open Admissions
              </h3>

              <div className="space-y-3.5 text-sm">
                <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white">Bollywood Fusion Batch</div>
                    <div className="text-xs text-neutral-400">Mon & Wed · 6:00 PM (Baner)</div>
                  </div>
                  <span className="text-xs font-medium text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/50 border border-emerald-500/20">
                    Open
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white">Urban Hip-Hop Grooves</div>
                    <div className="text-xs text-neutral-400">Tue & Thu · 7:00 PM</div>
                  </div>
                  <span className="text-xs font-medium text-amber-400 px-2 py-0.5 rounded bg-amber-950/50 border border-amber-500/20">
                    3 Slots Left
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white">Sangeet & Wedding Choreo</div>
                    <div className="text-xs text-neutral-400">Custom Timings & Private Slots</div>
                  </div>
                  <span className="text-xs font-medium text-pink-400 px-2 py-0.5 rounded bg-pink-950/50 border border-pink-500/20">
                    Available
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                <span>Timetable & Fees illustrative</span>
                <button
                  onClick={onOpenTrialModal}
                  className="text-pink-400 hover:text-pink-300 font-semibold"
                >
                  Reserve Spot &rarr;
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Studio Proof & Trust Strip below Hero */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-neutral-300">
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums">2,400<span className="text-pink-400 text-lg"> sq.ft</span></div>
            <div className="text-xs sm:text-sm text-neutral-400 mt-0.5">Sprung Wooden Studio in Baner</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums">8+<span className="text-purple-400 text-lg"> Styles</span></div>
            <div className="text-xs sm:text-sm text-neutral-400 mt-0.5">Bollywood, Hip-Hop, Classical & More</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums">100%<span className="text-amber-400 text-lg"> Welcoming</span></div>
            <div className="text-xs sm:text-sm text-neutral-400 mt-0.5">Beginner-Friendly Curriculum</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums">Instant<span className="text-emerald-400 text-lg"> Reply</span></div>
            <div className="text-xs sm:text-sm text-neutral-400 mt-0.5">WhatsApp Inquiry & Slot Confirmations</div>
          </div>
        </div>

      </div>

      {/* Subtle Bottom Scroll Cue */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-neutral-500 hover:text-white transition-colors"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};
