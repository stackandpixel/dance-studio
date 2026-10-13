import React, { useState } from 'react';
import { MessageCircle, Check, ArrowRight } from 'lucide-react';
import { DANCE_STYLES, DanceStyle } from '../data/studioData';
import { openWhatsAppChat, getDanceStyleEnquiryMessage } from '../utils/whatsapp';
import { DanceVisualArt, VisualType } from './DanceVisualArt';

type FilterCategory = 'all' | 'indian' | 'street' | 'contemporary' | 'events' | 'fitness';

export const DanceStyles: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const filterTabs: { id: FilterCategory; label: string }[] = [
    { id: 'all', label: 'All Styles' },
    { id: 'indian', label: 'Bollywood & Classical' },
    { id: 'street', label: 'Hip-Hop & Urban' },
    { id: 'contemporary', label: 'Contemporary' },
    { id: 'events', label: 'Wedding & Sangeet' },
    { id: 'fitness', label: 'Fitness & Bolly-Cardio' },
  ];

  const filteredStyles = activeFilter === 'all'
    ? DANCE_STYLES
    : DANCE_STYLES.filter((style) => style.category === activeFilter);

  const handleEnquireStyle = (styleName: string) => {
    openWhatsAppChat(getDanceStyleEnquiryMessage(styleName));
  };

  const getVisualType = (id: string): VisualType => {
    switch (id) {
      case 'bollywood': return 'bollywood';
      case 'hiphop': return 'hiphop';
      case 'contemporary': return 'contemporary';
      case 'wedding': return 'wedding';
      case 'classical': return 'classical';
      case 'kids': return 'kids';
      case 'freestyle': return 'freestyle';
      case 'fitness': return 'fitness';
      default: return 'hero';
    }
  };

  return (
    <section id="styles" className="py-24 bg-[#09090b] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase font-bold tracking-widest text-pink-400 mb-2">
              Our Movement Disciplines
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase leading-tight">
              Dance Styles Crafted For <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
                Every Stage & Pulse
              </span>
            </h2>
            <p className="mt-3 text-neutral-400 text-base leading-relaxed">
              Whether you want to nail viral Bollywood hooksteps, train in raw hip-hop foundations, or prepare for an unforgettable family Sangeet in Pune, our curated syllabus gets you moving with confidence.
            </p>
          </div>

          {/* Interactive Filter Tabs (Functional segmented buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/5 border border-white/10 rounded-xl shrink-0">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 ${
                  activeFilter === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Styles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStyles.map((style) => (
            <article
              key={style.id}
              className="group flex flex-col rounded-2xl bg-neutral-900/60 border border-white/10 overflow-hidden hover:border-pink-500/40 hover:shadow-2xl hover:shadow-pink-950/20 transition-all duration-300"
            >
              {/* Media Card with Visual Art / Photography */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black">
                <DanceVisualArt
                  type={getVisualType(style.id)}
                  alt={`${style.name} at Rhythm Republic Pune`}
                  aspectRatio="4:3"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={`/images/style_${style.id}.webp`}
                />

                {/* Subtle scrim gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />

                {/* Unboxed Metadata directly on card without pill enclosures */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-medium text-neutral-300">
                  <span className="text-pink-300">{style.level}</span>
                  <span className="text-neutral-500" aria-hidden="true">·</span>
                  <span className="text-neutral-400">{style.suitableFor.split(',')[0]}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-display text-white group-hover:text-pink-400 transition-colors">
                    {style.name}
                  </h3>
                  <div className="text-xs text-amber-300/90 font-medium italic mt-1">
                    "{style.tagline}"
                  </div>

                  <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                    {style.description}
                  </p>

                  {/* Highlights list with clean indicators */}
                  <ul className="mt-4 space-y-1.5 text-xs text-neutral-400">
                    {style.keyHighlights.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* WhatsApp Enquiry Button */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <button
                    onClick={() => handleEnquireStyle(style.name)}
                    className="w-full py-2.5 px-4 text-xs font-semibold rounded-lg bg-white/5 hover:bg-emerald-500/20 text-neutral-200 hover:text-emerald-300 border border-white/10 hover:border-emerald-500/30 transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400 group-hover/btn:scale-110 transition-transform" />
                    <span>Enquire on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-500 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Wedding Choreography Callout Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-purple-950/40 via-pink-950/40 to-amber-950/30 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs uppercase font-bold tracking-widest text-amber-400 mb-1">
              Planning an Indian Wedding in Pune?
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Make Your Sangeet Unforgettable with Custom Choreography
            </h3>
            <p className="text-sm text-neutral-300 mt-1 max-w-2xl">
              From romantic bride & groom entries to energetic family group medleys, our team choreographs routines that look spectacular even for complete non-dancers.
            </p>
          </div>
          <a
            href="#wedding"
            className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-pink-600 rounded-lg hover:from-amber-400 hover:to-pink-500 transition-all shadow-lg shadow-pink-950/30 whitespace-nowrap shrink-0"
          >
            Explore Wedding Packages &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};
