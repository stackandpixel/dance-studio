import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Instagram,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  ExternalLink
} from 'lucide-react';
import { STUDIO_CONFIG, DANCE_STYLES } from '../data/studioData';
import { openWhatsAppChat, getFormEnquiryMessage, buildWhatsAppUrl } from '../utils/whatsapp';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    danceStyle: 'Bollywood & Commercial Fusion',
    preferredTime: 'Evening Batch (6:00 PM - 8:00 PM)',
    experienceLevel: 'Complete Beginner (Never danced)',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name';
    }
    // Indian phone validation: 10 digits or with +91
    const cleanDigits = formData.phone.replace(/[^0-9]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your WhatsApp phone number';
    } else if (cleanDigits.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Construct formatted WhatsApp message
    const waMessage = getFormEnquiryMessage(formData);
    setSubmitted(true);

    // Open WhatsApp
    openWhatsAppChat(waMessage);
  };

  const handleCopyMessage = () => {
    const waMessage = getFormEnquiryMessage(formData);
    const waUrl = buildWhatsAppUrl(waMessage);
    navigator.clipboard.writeText(waUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0c0c11] text-white relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase font-bold tracking-widest text-pink-400 mb-2">
            Get In Touch · Visit Baner Studio
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase leading-tight">
            Ready to Dance? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
              Start The Conversation
            </span>
          </h2>
          <p className="mt-3 text-neutral-300 text-base leading-relaxed">
            Drop by our studio on Balewadi High Street Link Road, or send an enquiry directly via WhatsApp. We typically respond within 30 minutes during studio hours.
          </p>
        </div>

        {/* 2-Column Grid: Form on Left, Location & Details on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Interactive Enquiry Form */}
          <div className="lg:col-span-7 bg-neutral-900/60 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2">
              Book a Free Trial or Batch Consultation
            </h3>
            <p className="text-xs text-neutral-400 mb-6">
              Fill in your details below. Clicking "Send on WhatsApp" opens your chat with your preferences prefilled. Simply press <span className="text-pink-400 font-semibold">Send</span> in WhatsApp to deliver it!
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-950/50 border border-emerald-500/30 text-emerald-200 text-xs sm:text-sm space-y-2">
                <div className="flex items-center gap-2 font-semibold text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>WhatsApp Chat Window Opened!</span>
                </div>
                <p className="text-neutral-300 text-xs">
                  Please tap the "Send" button in WhatsApp to submit your request to our team. If WhatsApp didn't open automatically, use the button below:
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <button
                    onClick={() => openWhatsAppChat(getFormEnquiryMessage(formData))}
                    className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
                  >
                    Open WhatsApp Again
                  </button>
                  <button
                    onClick={handleCopyMessage}
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedLink ? 'Link Copied!' : 'Copy Direct Link'}</span>
                  </button>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Aarti Joshi"
                    className={`w-full px-4 py-2.5 rounded-xl bg-black/50 border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 ${
                      errors.name ? 'border-red-500 focus:ring-red-500' : 'border-white/15 focus:border-pink-500 focus:ring-pink-500'
                    }`}
                  />
                  {errors.name && <p className="text-red-400 text-[11px] mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 98765 43210"
                    className={`w-full px-4 py-2.5 rounded-xl bg-black/50 border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 ${
                      errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-white/15 focus:border-pink-500 focus:ring-pink-500'
                    }`}
                  />
                  {errors.phone && <p className="text-red-400 text-[11px] mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Dance Style & Experience */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Preferred Dance Style
                  </label>
                  <select
                    value={formData.danceStyle}
                    onChange={(e) => setFormData({ ...formData, danceStyle: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/15 text-sm text-white focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
                  >
                    {DANCE_STYLES.map((style) => (
                      <option key={style.id} value={style.name} className="bg-neutral-900 text-white">
                        {style.name}
                      </option>
                    ))}
                    <option value="Wedding / Sangeet Rehearsal" className="bg-neutral-900 text-white">
                      Wedding / Sangeet Rehearsal
                    </option>
                    <option value="Undecided / Need Guidance" className="bg-neutral-900 text-white">
                      Undecided (Need Guidance)
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Dance Experience Level
                  </label>
                  <select
                    value={formData.experienceLevel}
                    onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/15 text-sm text-white focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
                  >
                    <option value="Complete Beginner (Never danced)" className="bg-neutral-900 text-white">Complete Beginner (Never danced)</option>
                    <option value="Casual / Sangeet Danced Before" className="bg-neutral-900 text-white">Casual / Sangeet Danced Before</option>
                    <option value="Intermediate / Previous Training" className="bg-neutral-900 text-white">Intermediate / Previous Training</option>
                    <option value="Enquiring for Kids (Age 5-14)" className="bg-neutral-900 text-white">Enquiring for Kids (Age 5-14)</option>
                  </select>
                </div>
              </div>

              {/* Preferred Timing */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Preferred Batch Timing
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/15 text-sm text-white focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
                >
                  <option value="Weekday Evening (6:00 PM – 8:30 PM)" className="bg-neutral-900 text-white">Weekday Evening (6:00 PM – 8:30 PM)</option>
                  <option value="Weekend Morning (10:00 AM – 12:00 PM)" className="bg-neutral-900 text-white">Weekend Morning (10:00 AM – 12:00 PM)</option>
                  <option value="Weekend Evening (5:00 PM – 7:00 PM)" className="bg-neutral-900 text-white">Weekend Evening (5:00 PM – 7:00 PM)</option>
                  <option value="Morning Bolly-Fitness (7:15 AM – 8:15 AM)" className="bg-neutral-900 text-white">Morning Bolly-Fitness (7:15 AM – 8:15 AM)</option>
                  <option value="Flexible / Sangeet Private Slots" className="bg-neutral-900 text-white">Flexible / Sangeet Private Slots</option>
                </select>
              </div>

              {/* Optional Message */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Special Query or Note (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about songs you like, specific goals, or questions about trial classes..."
                  className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/15 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-500 text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-xl shadow-emerald-950/40 active:scale-98 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Enquiry on WhatsApp</span>
              </button>

              <div className="text-[11px] text-neutral-400 text-center flex items-center justify-center gap-1.5 pt-1">
                <AlertCircle className="w-3.5 h-3.5 text-neutral-500" />
                <span>Data is not stored on a remote server; your browser launches WhatsApp directly.</span>
              </div>
            </form>
          </div>

          {/* Right: Studio Location, Map & Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-white/10 space-y-4">
              <h4 className="text-lg font-bold font-display text-white">
                Studio Contact & Timings
              </h4>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-pink-500/10 text-pink-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Studio Address</div>
                    <div className="text-xs text-neutral-300 mt-0.5 leading-relaxed">
                      {STUDIO_CONFIG.location.fullAddress}
                    </div>
                    <div className="text-[11px] text-pink-400 mt-0.5">
                      Landmark: {STUDIO_CONFIG.location.landmark}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Studio Hours</div>
                    <div className="text-xs text-neutral-300 mt-0.5 leading-relaxed">
                      {STUDIO_CONFIG.contact.openingHours}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Call & WhatsApp</div>
                    <div className="text-xs text-neutral-300 mt-0.5">
                      {STUDIO_CONFIG.contact.phoneDisplay}
                    </div>
                    <div className="text-[11px] text-neutral-500">
                      *Fictional sample number for demonstration
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Official Instagram</div>
                    <a
                      href={STUDIO_CONFIG.contact.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-pink-400 hover:text-pink-300 flex items-center gap-1 mt-0.5"
                    >
                      <span>{STUDIO_CONFIG.contact.instagramHandle}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Maps Card with Baner, Pune location */}
            <div className="rounded-2xl bg-neutral-900/60 border border-white/10 overflow-hidden">
              <div className="p-4 bg-black/40 border-b border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-white">Baner Studio Location</div>
                  <div className="text-[11px] text-neutral-400">Pune, Maharashtra · 411045</div>
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(STUDIO_CONFIG.location.fullAddress)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-pink-400 hover:text-pink-300 flex items-center gap-1 transition-colors"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Container */}
              <div className="relative aspect-[16/10] w-full bg-neutral-950">
                <iframe
                  title="Rhythm Republic Baner Location Map"
                  src={STUDIO_CONFIG.location.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-3 text-[11px] text-neutral-500 text-center bg-black/50">
                *Demo location placeholder in Baner, Pune. Replace with client Google Business embed.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
