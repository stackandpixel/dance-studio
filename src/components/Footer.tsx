import React from 'react';
import { MessageCircle, Instagram, MapPin, Clock, Phone, Mail, Heart } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData';
import { openWhatsAppChat, getTrialBookingMessage } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const navLinks = [
    { label: 'About Studio', href: '#about' },
    { label: 'Dance Styles', href: '#styles' },
    { label: 'Batch Timetable', href: '#timetable' },
    { label: 'Wedding Choreography', href: '#wedding' },
    { label: 'Media Gallery', href: '#gallery' },
    { label: 'Mentors', href: '#instructors' },
    { label: 'Pricing Plans', href: '#pricing' },
    { label: 'Contact Baner', href: '#contact' },
  ];

  return (
    <footer className="bg-[#070709] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand & Mission (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="#"
              className="text-2xl font-black font-display tracking-tight text-white uppercase hover:text-pink-400 transition-colors inline-block"
            >
              {STUDIO_CONFIG.brandName}
            </a>
            
            <p className="text-sm font-medium text-pink-400">
              {STUDIO_CONFIG.tagline}
            </p>

            <p className="text-sm text-neutral-400 leading-relaxed max-w-md">
              {STUDIO_CONFIG.shortDescription}
            </p>

            {/* Social & Contact Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => openWhatsAppChat(getTrialBookingMessage())}
                aria-label="WhatsApp Studio Chat"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-emerald-500/20 text-neutral-300 hover:text-emerald-400 border border-white/10 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </button>

              <a
                href={STUDIO_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-pink-500/20 text-neutral-300 hover:text-pink-400 border border-white/10 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`tel:${STUDIO_CONFIG.contact.phoneNumberRaw}`}
                aria-label="Call studio"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-purple-500/20 text-neutral-300 hover:text-purple-400 border border-white/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (Col 6-8) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-pink-400">
              Explore Studio
            </div>
            <ul className="space-y-2 text-sm text-neutral-400">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Timings (Col 9-12) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-pink-400">
              Studio Location & Hours
            </div>

            <div className="space-y-2.5 text-xs text-neutral-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <span>{STUDIO_CONFIG.location.fullAddress}</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>{STUDIO_CONFIG.contact.openingHours}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: {STUDIO_CONFIG.contact.phoneDisplay}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Email: {STUDIO_CONFIG.contact.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal, Demo Notices, and Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} {STUDIO_CONFIG.brandName}. All rights reserved.
          </div>

          <div className="text-center md:text-right max-w-xl text-[11px] text-neutral-500">
            {STUDIO_CONFIG.disclaimer}
          </div>
        </div>

      </div>
    </footer>
  );
};
