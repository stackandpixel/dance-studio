import React, { useState } from 'react';
import { Calendar, Clock, User, Users, MessageCircle, AlertCircle, Filter } from 'lucide-react';
import { TIMETABLE_BATCHES, DanceClassBatch } from '../data/studioData';
import { openWhatsAppChat, getClassBookingMessage } from '../utils/whatsapp';

export const Timetable: React.FC = () => {
  const [selectedStyle, setSelectedStyle] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const styleOptions = [
    { value: 'all', label: 'All Styles' },
    { value: 'bollywood', label: 'Bollywood' },
    { value: 'hiphop', label: 'Hip-Hop' },
    { value: 'contemporary', label: 'Contemporary' },
    { value: 'kids', label: 'Kids Dance' },
    { value: 'classical', label: 'Classical Fusion' },
    { value: 'freestyle', label: 'Freestyle' },
    { value: 'fitness', label: 'Bolly-Fitness' },
  ];

  const levelOptions = [
    { value: 'all', label: 'All Levels' },
    { value: 'Beginner', label: 'Beginner' },
    { value: 'Open Level', label: 'Open Level' },
    { value: 'Intermediate', label: 'Intermediate' },
    { value: 'Kids', label: 'Kids Batch' },
  ];

  const filteredBatches = TIMETABLE_BATCHES.filter((batch) => {
    const matchesStyle = selectedStyle === 'all' || batch.styleId === selectedStyle;
    const matchesLevel = selectedLevel === 'all' || batch.level === selectedLevel;
    return matchesStyle && matchesLevel;
  });

  const handleBookClass = (batch: DanceClassBatch) => {
    openWhatsAppChat(
      getClassBookingMessage(batch.title, batch.instructor, batch.timing, batch.days)
    );
  };

  return (
    <section id="timetable" className="py-24 bg-[#09090b] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase font-bold tracking-widest text-pink-400 mb-2">
            Weekly Batch Schedule & Timings
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase leading-tight">
            Find Your Batch. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
              Step Onto The Floor.
            </span>
          </h2>
          <p className="mt-3 text-neutral-400 text-base leading-relaxed">
            All batches are structured with progressive weekly milestones. Small class sizes ensure personal corrections and injury prevention.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="p-4 rounded-2xl bg-neutral-900/70 border border-white/10 mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 shrink-0">
              <Filter className="w-3.5 h-3.5 text-pink-400" />
              <span>Filter Batches:</span>
            </div>

            {/* Style Selector */}
            <select
              value={selectedStyle}
              onChange={(e) => setSelectedStyle(e.target.value)}
              className="bg-black/60 border border-white/15 text-neutral-200 text-xs rounded-lg px-3 py-2 focus:ring-1 focus:ring-pink-500 focus:outline-none"
              aria-label="Filter by dance style"
            >
              {styleOptions.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-neutral-900 text-white">
                  {opt.label}
                </option>
              ))}
            </select>

            {/* Level Selector */}
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="bg-black/60 border border-white/15 text-neutral-200 text-xs rounded-lg px-3 py-2 focus:ring-1 focus:ring-pink-500 focus:outline-none"
              aria-label="Filter by skill level"
            >
              {levelOptions.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-neutral-900 text-white">
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div className="text-xs text-neutral-400 flex items-center gap-1.5">
            <span className="font-semibold text-white tabular-nums">{filteredBatches.length}</span>
            <span>batches available</span>
          </div>
        </div>

        {/* Timetable Batch Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBatches.map((batch) => (
            <div
              key={batch.id}
              className="flex flex-col justify-between rounded-2xl bg-neutral-900/60 border border-white/10 p-6 hover:border-pink-500/40 transition-all duration-300 relative group"
            >
              <div>
                {/* Top unboxed metadata strip */}
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-pink-400 font-semibold">{batch.styleName}</span>
                    <span className="text-neutral-600">·</span>
                    <span className="text-neutral-300">{batch.level}</span>
                  </div>
                  {batch.badge && (
                    <span className="text-[11px] font-medium text-amber-300">
                      ★ {batch.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold font-display text-white group-hover:text-pink-300 transition-colors mb-3">
                  {batch.title}
                </h3>

                {/* Batch Logistics with clear icons */}
                <div className="space-y-2 text-xs text-neutral-300 mb-5">
                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                    <span className="font-semibold text-white">Days:</span>
                    <span>{batch.days.join(', ')}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Clock className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span className="font-semibold text-white">Time:</span>
                    <span className="tabular-nums text-neutral-200">{batch.timing} ({batch.duration})</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <User className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="font-semibold text-white">Mentor:</span>
                    <span>{batch.instructor}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Users className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="font-semibold text-white">Audience:</span>
                    <span>{batch.ageGroup} · {batch.batchSize}</span>
                  </div>
                </div>

                {/* Sample Fee Breakdown */}
                <div className="p-3 rounded-lg bg-black/40 border border-white/5 mb-5 flex items-baseline justify-between">
                  <div>
                    <div className="text-[11px] text-neutral-400">Sample Monthly Fee</div>
                    <div className="text-lg font-bold font-display text-white tabular-nums">
                      ₹{batch.sampleFeeMonthly.toLocaleString('en-IN')}
                      <span className="text-xs text-neutral-400 font-normal ml-1">/ month</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] text-neutral-400">Single Drop-in</div>
                    <div className="text-xs font-semibold text-neutral-200 tabular-nums">
                      ₹{batch.sampleFeeDropIn}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button: Book via WhatsApp */}
              <button
                onClick={() => handleBookClass(batch)}
                className="w-full py-2.5 px-4 text-xs font-semibold rounded-lg bg-white/5 hover:bg-emerald-500/20 text-neutral-200 hover:text-emerald-300 border border-white/10 hover:border-emerald-500/30 transition-all flex items-center justify-center gap-2 active:scale-98"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Book This Class via WhatsApp</span>
              </button>
            </div>
          ))}
        </div>

        {/* Note on timings and fees */}
        <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3 text-xs text-neutral-400">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-neutral-200">Timetable & Fee Notice: </span>
            Fees shown above are illustrative sample prices in INR. Exact batch openings, slot vacancies, and trial confirmations are verified directly with the studio coordinator via WhatsApp.
          </div>
        </div>

      </div>
    </section>
  );
};
