import React, { useState } from 'react';
import { X, MessageCircle, Sparkles } from 'lucide-react';
import { DANCE_STYLES } from '../data/studioData';
import { openWhatsAppChat, getTrialBookingMessage } from '../utils/whatsapp';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrialModal: React.FC<TrialModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('Bollywood & Commercial Fusion');

  if (!isOpen) return null;

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = getTrialBookingMessage(selectedStyle, name);
    openWhatsAppChat(msg);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Book a Free Trial Class"
    >
      <div
        className="max-w-md w-full bg-neutral-900 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/15 text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-pink-400 mb-2">
          <Sparkles className="w-4 h-4" />
          <span>Baner Studio · Pune</span>
        </div>

        <h3 className="text-2xl font-bold font-display text-white mb-2">
          Book a Free Trial Class
        </h3>

        <p className="text-xs text-neutral-300 leading-relaxed mb-6">
          Step into our studio, experience our instructors' teaching style, and feel the music. Zero pressure, beginner-friendly!
        </p>

        <form onSubmit={handleConfirm} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
              Your Name (Optional)
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Rahul Sharma"
              className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/15 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-pink-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
              Choose Dance Style for Trial
            </label>
            <select
              value={selectedStyle}
              onChange={(e) => setSelectedStyle(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/15 text-sm text-white focus:outline-none focus:border-pink-500"
            >
              {DANCE_STYLES.map((style) => (
                <option key={style.id} value={style.name} className="bg-neutral-900 text-white">
                  {style.name}
                </option>
              ))}
              <option value="Kids Dance Batch (Junior Academy)" className="bg-neutral-900 text-white">
                Kids Dance Batch (Junior Academy)
              </option>
              <option value="Wedding / Sangeet Rehearsal" className="bg-neutral-900 text-white">
                Wedding / Sangeet Rehearsal
              </option>
            </select>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-500 text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-xl shadow-emerald-950/40 active:scale-98 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp for Trial Slot</span>
            </button>
          </div>

          <div className="text-[11px] text-neutral-400 text-center">
            Opens WhatsApp with your prefilled trial request. Press Send in WhatsApp to confirm!
          </div>
        </form>
      </div>
    </div>
  );
};
