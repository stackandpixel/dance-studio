import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData';
import { openWhatsAppChat, getTrialBookingMessage } from '../utils/whatsapp';

interface NavbarProps {
  onOpenTrialModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrialModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Styles', href: '#styles' },
    { label: 'Timetable', href: '#timetable' },
    { label: 'Weddings', href: '#wedding' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Instructors', href: '#instructors' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleQuickWhatsApp = () => {
    openWhatsAppChat(getTrialBookingMessage());
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-xl shadow-black/40'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict Top Bar Contract: Zone 1 (Brand) - Zone 2 (Nav links) - Zone 3 (1 Primary Action) */}
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Single text element wordmark in display face */}
          <a
            href="#"
            className="text-xl sm:text-2xl font-black tracking-tight text-white font-display uppercase whitespace-nowrap shrink-0 hover:text-pink-400 transition-colors"
          >
            {STUDIO_CONFIG.brandName}
          </a>

          {/* Zone 2: 4–5 single-line clean nav links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors whitespace-nowrap shrink-0 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action + Quick phone/WhatsApp */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${STUDIO_CONFIG.contact.phoneNumberRaw}`}
              aria-label="Call studio"
              className="hidden sm:inline-flex items-center justify-center p-2 text-neutral-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              title={STUDIO_CONFIG.contact.phoneDisplay}
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenTrialModal}
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-500 hover:to-pink-500 shadow-lg shadow-pink-900/30 transition-all duration-200 active:scale-95 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-pink-500"
            >
              Book a Free Trial
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              className="lg:hidden p-2 text-neutral-300 hover:text-white rounded-lg hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-pink-500"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0d0d12]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 animate-fadeIn">
          <nav className="flex flex-col space-y-3 py-2 text-base font-medium text-neutral-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-pink-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenTrialModal();
              }}
              className="w-full py-2.5 px-4 text-sm font-semibold text-center text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-md active:scale-98"
            >
              Book a Free Trial Class
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleQuickWhatsApp();
              }}
              className="w-full py-2.5 px-4 text-sm font-semibold flex items-center justify-center gap-2 text-emerald-400 border border-emerald-500/30 rounded-lg hover:bg-emerald-500/10 active:scale-98"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Studio Chat
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
