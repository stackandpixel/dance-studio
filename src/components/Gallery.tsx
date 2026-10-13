import React, { useState, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/studioData';
import { DanceVisualArt, VisualType } from './DanceVisualArt';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [isPlayingMotion, setIsPlayingMotion] = useState(false);

  const categories = ['All', 'Batches', 'Street', 'Weddings', 'Contemporary', 'Kids', 'Classical'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemIndex === null) return;
      if (e.key === 'Escape') setSelectedItemIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedItemIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
      }
      if (e.key === 'ArrowLeft') {
        setSelectedItemIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItemIndex, filteredItems.length]);

  const getVisualType = (id: string): VisualType => {
    switch (id) {
      case 'gal-1': return 'bollywood';
      case 'gal-2': return 'hiphop';
      case 'gal-3': return 'wedding';
      case 'gal-4': return 'contemporary';
      case 'gal-5': return 'kids';
      case 'gal-6': return 'classical';
      default: return 'hero';
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#09090b] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase font-bold tracking-widest text-pink-400 mb-2">
              Studio Atmosphere & Showcase
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase leading-tight">
              Moments Caught <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
                In The Flow
              </span>
            </h2>
            <p className="mt-3 text-neutral-400 text-base leading-relaxed">
              Step inside our Baner studio: candid rehearsal laughter, synchronized formations, family Sangeet breakthroughs, and stage showcases.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/5 border border-white/10 rounded-xl shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Video Motion Feature Banner */}
        <div className="mb-12 rounded-3xl bg-neutral-900/40 border border-white/10 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-pink-400 mb-2">
              <span>Vertical Video & Reel Showcase</span>
            </div>
            <h3 className="text-2xl font-bold font-display text-white mb-2">
              Experience the Studio Beat in Motion
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Our Baner studio features a dedicated 4K filming setup for students to record and document their weekly progress. Watch our dancers in rhythm.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => setIsPlayingMotion(!isPlayingMotion)}
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-semibold flex items-center gap-2 transition-all"
            >
              {isPlayingMotion ? <Pause className="w-4 h-4 text-pink-400" /> : <Play className="w-4 h-4 text-emerald-400" />}
              <span>{isPlayingMotion ? 'Pause Studio Reel' : 'Preview Studio Motion'}</span>
            </button>
          </div>
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedItemIndex(index)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-pink-500/40 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <DanceVisualArt
                  type={getVisualType(item.id)}
                  alt={item.title}
                  aspectRatio="4:3"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Hover Overlay with Lightbox trigger */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5">
                <div className="flex items-center justify-between text-xs text-pink-400 font-semibold mb-1">
                  <span>{item.tag}</span>
                  <Maximize2 className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-base font-bold text-white font-display">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-300 mt-1 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Lightbox Modal */}
        {selectedItemIndex !== null && filteredItems[selectedItemIndex] && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Gallery Image Viewer"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItemIndex(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 focus-visible:outline-2 focus-visible:outline-white"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedItemIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedItemIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Card Content */}
            <div
              className="max-w-4xl w-full bg-neutral-900 rounded-2xl overflow-hidden border border-white/15 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-[16/9] w-full bg-black relative">
                <DanceVisualArt
                  type={getVisualType(filteredItems[selectedItemIndex].id)}
                  alt={filteredItems[selectedItemIndex].title}
                  aspectRatio="16:9"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 bg-neutral-900 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold text-pink-400 uppercase tracking-wider mb-1">
                    {filteredItems[selectedItemIndex].tag} · {filteredItems[selectedItemIndex].category}
                  </div>
                  <h3 className="text-xl font-bold font-display text-white">
                    {filteredItems[selectedItemIndex].title}
                  </h3>
                  <p className="text-sm text-neutral-300 mt-1 max-w-xl">
                    {filteredItems[selectedItemIndex].caption}
                  </p>
                </div>
                <div className="text-xs text-neutral-500 shrink-0 tabular-nums">
                  {selectedItemIndex + 1} of {filteredItems.length}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
