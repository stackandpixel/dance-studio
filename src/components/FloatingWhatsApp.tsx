import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { openWhatsAppChat, getTrialBookingMessage } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    openWhatsAppChat(getTrialBookingMessage());
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Polite Floating Tooltip Bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-neutral-900 border border-white/15 text-xs text-neutral-200 shadow-2xl animate-fadeIn">
          <span>Need help? Chat with Baner Studio</span>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Dismiss tooltip"
            className="text-neutral-400 hover:text-white p-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={handleClick}
        aria-label="Chat with Rhythm Republic on WhatsApp"
        className="relative group p-3.5 sm:p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-950/60 transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center focus-visible:outline-2 focus-visible:outline-emerald-400"
      >
        {/* Subtle Pulse Animation Ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-30 group-hover:animate-ping pointer-events-none" />
        
        <MessageCircle className="w-6 h-6 fill-white" />
      </button>
    </div>
  );
};
