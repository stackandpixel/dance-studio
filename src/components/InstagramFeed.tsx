import React from 'react';
import { Instagram, Play, Eye, Heart, Music, ExternalLink } from 'lucide-react';
import { INSTAGRAM_POSTS, STUDIO_CONFIG } from '../data/studioData';
import { DanceVisualArt, VisualType } from './DanceVisualArt';

export const InstagramFeed: React.FC = () => {
  const getVisualType = (id: string): VisualType => {
    switch (id) {
      case 'post-1': return 'bollywood';
      case 'post-2': return 'hiphop';
      case 'post-3': return 'wedding';
      case 'post-4': return 'contemporary';
      case 'post-5': return 'kids';
      case 'post-6': return 'freestyle';
      default: return 'hero';
    }
  };

  return (
    <section className="py-24 bg-[#0c0c11] text-white relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-pink-400 mb-2">
              <Instagram className="w-3.5 h-3.5" />
              <span>Dance Reels & Cyphers</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase leading-tight">
              Catch The Rhythm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
                On Instagram
              </span>
            </h2>
            <p className="mt-3 text-neutral-400 text-base leading-relaxed">
              Daily studio snippets, choreography breakdowns, and backstage Sangeet celebrations. Follow our journey in Baner at <strong className="text-pink-400 font-semibold">{STUDIO_CONFIG.contact.instagramHandle}</strong>.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={STUDIO_CONFIG.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-xs sm:text-sm font-semibold rounded-lg bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 text-white hover:from-purple-500 hover:to-pink-500 transition-all flex items-center gap-2 shadow-lg shadow-pink-950/30 whitespace-nowrap"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow {STUDIO_CONFIG.contact.instagramHandle}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>
        </div>

        {/* 6 Reels Grid (9:16 vertical layout) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={STUDIO_CONFIG.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-pink-500/50 transition-all duration-300 flex flex-col justify-between aspect-[9/16]"
            >
              {/* Vertical Visual Art */}
              <div className="absolute inset-0">
                <DanceVisualArt
                  type={getVisualType(post.id)}
                  alt={post.title}
                  aspectRatio="9:16"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60 pointer-events-none" />

              {/* Top Reel Header */}
              <div className="relative z-10 p-3 flex items-center justify-between text-xs text-neutral-300">
                <span className="text-[11px] font-semibold text-pink-300 px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-sm">
                  {post.type}
                </span>
                <Play className="w-3.5 h-3.5 text-white/80 group-hover:text-pink-400 group-hover:scale-110 transition-transform" />
              </div>

              {/* Bottom Reel Caption & Metrics */}
              <div className="relative z-10 p-3 space-y-2">
                <div className="flex items-center gap-2 text-[10px] text-neutral-300 line-clamp-1">
                  <Music className="w-3 h-3 text-pink-400 shrink-0" />
                  <span className="truncate">{post.music}</span>
                </div>

                <div className="text-xs font-bold font-display text-white line-clamp-2 leading-tight">
                  {post.title}
                </div>

                <div className="pt-1 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-400">
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>{post.views}</span>
                  </div>
                  <div className="flex items-center gap-1 text-pink-400">
                    <Heart className="w-3 h-3" />
                    <span>{post.likes}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Note about static demo & feed integration */}
        <div className="mt-8 text-center text-xs text-neutral-500">
          *Sample demo reel cards · Real feed connects via official Instagram Basic Display API or Meta authorized embed.
        </div>

      </div>
    </section>
  );
};
