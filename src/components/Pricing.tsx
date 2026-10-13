import React from 'react';
import { Check, MessageCircle, Sparkles, HelpCircle } from 'lucide-react';
import { PRICING_PLANS } from '../data/studioData';
import { openWhatsAppChat, getTrialBookingMessage } from '../utils/whatsapp';

interface PricingProps {
  onOpenTrialModal: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenTrialModal }) => {
  const handleSelectPlan = (planName: string, price: number) => {
    const message = `Hi Rhythm Republic team! I am interested in enrolling in the *${planName}* (Sample fee: ₹${price.toLocaleString('en-IN')}) at your Baner studio. Could you share batch availability and admission steps?`;
    openWhatsAppChat(message);
  };

  return (
    <section id="pricing" className="py-24 bg-[#09090b] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase font-bold tracking-widest text-pink-400 mb-2">
            Transparent Memberships
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase leading-tight text-balance">
            Simple Pricing. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
              No Hidden Fees.
            </span>
          </h2>
          <p className="mt-4 text-neutral-300 text-base leading-relaxed">
            Choose between flexible drop-in class passes or immersive monthly batches. All memberships include full access to studio mirrors, amenities, and practice review.
          </p>
        </div>

        {/* Free Trial Highlight Card */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-amber-900/20 border border-pink-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-pink-950/20">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 text-white shrink-0 shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-pink-400">
                First Time Visiting Us?
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-0.5">
                Experience a Trial Dance Class
              </h3>
              <p className="text-sm text-neutral-300 mt-1 max-w-xl">
                Try out an open batch in Bollywood, Hip-Hop, or Contemporary before deciding on a monthly commitment. Meet our mentors and feel the studio energy.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenTrialModal}
            className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg active:scale-95 whitespace-nowrap shrink-0"
          >
            Book Your Trial Class
          </button>
        </div>

        {/* 3 Pricing Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`flex flex-col rounded-2xl p-8 justify-between transition-all duration-300 relative ${
                plan.isPopular
                  ? 'bg-neutral-900/90 border-2 border-pink-500 shadow-2xl shadow-pink-950/30 -translate-y-2'
                  : 'bg-neutral-900/60 border border-white/10 hover:border-white/20'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                  Most Popular Batch
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold font-display text-white">
                  {plan.name}
                </h3>
                <p className="text-xs text-neutral-400 mt-1 mb-6">
                  {plan.tagline}
                </p>

                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="text-4xl font-black font-display text-white tabular-nums">
                    ₹{plan.priceInr.toLocaleString('en-IN')}
                  </div>
                  <div className="text-xs text-neutral-400 mt-1">
                    {plan.billingPeriod}
                  </div>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-neutral-300 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <button
                  onClick={() => handleSelectPlan(plan.name, plan.priceInr)}
                  className={`w-full py-3 px-4 text-xs sm:text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-all active:scale-98 ${
                    plan.isPopular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500 shadow-lg shadow-pink-950/40'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{plan.ctaText}</span>
                </button>

                <div className="text-[11px] text-neutral-500 text-center mt-3 flex items-center justify-center gap-1">
                  <HelpCircle className="w-3 h-3" />
                  <span>{plan.note}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
