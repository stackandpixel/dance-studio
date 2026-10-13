import React from 'react';
import { Sparkles, MessageCircle, Music, Clock, Users, Check } from 'lucide-react';
import { WEDDING_PACKAGES } from '../data/studioData';
import { openWhatsAppChat, getWeddingChoreographyMessage } from '../utils/whatsapp';
import { DanceVisualArt } from './DanceVisualArt';

export const WeddingChoreography: React.FC = () => {
  const handleEnquirePackage = (packageTitle: string) => {
    openWhatsAppChat(getWeddingChoreographyMessage(packageTitle));
  };

  const handleGeneralEnquiry = () => {
    openWhatsAppChat(getWeddingChoreographyMessage());
  };

  return (
    <section id="wedding" className="py-24 bg-[#0c0c11] text-white relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-amber-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Wedding & Sangeet Choreography · Pune & Maharashtra</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase leading-tight">
              From Stage Fright to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-pink-500">
                Centre Stage Glory
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
              Your Sangeet night is once in a lifetime. We create signature performances that highlight your love story, celebrate family bonds, and get everyone cheering—with routines crafted specifically for non-dancers.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <button
              onClick={handleGeneralEnquiry}
              className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-pink-600 rounded-lg hover:from-amber-400 hover:to-pink-500 shadow-xl shadow-amber-950/30 transition-all flex items-center justify-center gap-2 group whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              <span>Plan Your Sangeet on WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Feature Spotlight: Rehearsal Visual + Why Us */}
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-neutral-900/40 rounded-3xl border border-white/10 p-6 sm:p-8">
          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-white/10 bg-black">
            <DanceVisualArt
              type="wedding"
              alt="Indian couple practicing wedding dance choreography in Pune studio"
              aspectRatio="4:3"
              className="w-full h-full object-cover"
              src="/images/style_wedding_sangeet.webp"
            />
          </div>

          <div className="lg:col-span-7 space-y-5">
            <div className="text-xs uppercase font-semibold tracking-wider text-pink-400">
              The Rhythm Republic Sangeet Method
            </div>
            <h3 className="text-2xl font-bold font-display text-white">
              No Stress. No Complicated Steps. Just Pure Celebration.
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              We understand that families are juggling outfit trials, guest management, and wedding prep. Our rehearsal sessions in Baner are flexible, joyful, and designed so that even grandparents and busy grooms learn effortlessly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
                  <Music className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Custom Audio Editing</div>
                  <div className="text-xs text-neutral-400">Seamless medley mashups tailored to your chosen tracks.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-400 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Flexible Rehearsal Slots</div>
                  <div className="text-xs text-neutral-400">Late evening & weekend slots suited to working families.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">All Age Groups Included</div>
                  <div className="text-xs text-neutral-400">Choreography matched to individual physical comfort.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Costume Weight Testing</div>
                  <div className="text-xs text-neutral-400">Rehearsals accounting for heavy lehengas & sherwanis.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Dedicated Wedding Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WEDDING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="flex flex-col rounded-2xl bg-neutral-900/60 border border-white/10 p-6 hover:border-amber-500/40 transition-all duration-300 justify-between"
            >
              <div>
                <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                  {pkg.duration}
                </div>
                <h3 className="text-xl font-bold font-display text-white mb-1">
                  {pkg.title}
                </h3>
                <p className="text-xs text-neutral-400 italic mb-4">
                  {pkg.subtitle}
                </p>

                <div className="text-xs text-neutral-300 font-medium pb-4 border-b border-white/10">
                  <span className="text-pink-400 font-semibold">Best for: </span>
                  {pkg.bestFor}
                </div>

                <div className="mt-4 mb-6">
                  <div className="text-2xl font-bold font-display text-white tabular-nums">
                    ₹{pkg.samplePriceStarting.toLocaleString('en-IN')}
                    <span className="text-xs text-neutral-400 font-normal ml-1">starting sample fee</span>
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">
                    *Illustrative pricing · Final quote based on total songs & dancers
                  </div>
                </div>

                <ul className="space-y-2 text-xs text-neutral-300 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleEnquirePackage(pkg.title)}
                className="w-full py-2.5 px-4 text-xs font-semibold rounded-lg bg-white/5 hover:bg-emerald-500/20 text-neutral-200 hover:text-emerald-300 border border-white/10 hover:border-emerald-500/30 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Enquire via WhatsApp</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
