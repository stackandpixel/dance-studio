import React, { useState } from 'react';

export type VisualType =
  | 'hero'
  | 'bollywood'
  | 'hiphop'
  | 'contemporary'
  | 'wedding'
  | 'classical'
  | 'kids'
  | 'freestyle'
  | 'fitness'
  | 'studio'
  | 'instructor-rohan'
  | 'instructor-ananya'
  | 'instructor-kabir'
  | 'gallery-1'
  | 'gallery-2'
  | 'gallery-3'
  | 'gallery-4'
  | 'gallery-5'
  | 'gallery-6'
  | 'reel-1'
  | 'reel-2'
  | 'reel-3'
  | 'reel-4'
  | 'reel-5'
  | 'reel-6';

interface DanceVisualArtProps {
  type: VisualType;
  alt: string;
  className?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1' | '9:16' | '3:4';
  src?: string;
}

export const DanceVisualArt: React.FC<DanceVisualArtProps> = ({
  type,
  alt,
  className = '',
  aspectRatio = '4:3',
  src
}) => {
  const [imgError, setImgError] = useState(false);

  // Aspect ratio classes
  const aspectClass =
    aspectRatio === '16:9' ? 'aspect-video' :
    aspectRatio === '9:16' ? 'aspect-[9/16]' :
    aspectRatio === '1:1' ? 'aspect-square' :
    aspectRatio === '3:4' ? 'aspect-[3/4]' :
    'aspect-[4/3]';

  // If a valid src is provided and hasn't errored, try rendering real img tag
  if (src && !imgError) {
    return (
      <div className={`relative overflow-hidden bg-neutral-900 ${aspectClass} ${className}`}>
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
      </div>
    );
  }

  // Fallback to custom crafted high-fidelity cinematic vector artwork
  return (
    <div
      className={`relative overflow-hidden select-none bg-[#0c0c11] ${aspectClass} ${className}`}
      role="img"
      aria-label={alt}
    >
      {renderArtworkContent(type)}
      {/* Cinematic subtle Vignette and Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 pointer-events-none" />
      <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none rounded-[inherit]" />
    </div>
  );
};

function renderArtworkContent(type: VisualType) {
  switch (type) {
    case 'hero':
      return (
        <svg className="w-full h-full" viewBox="0 0 1200 675" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="heroGlow1" cx="65%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#ec4899" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#0a0a0f" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="studioFloor" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e1b4b" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#050508" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="neonBeam" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <rect width="1200" height="675" fill="#09090d" />
          <rect width="1200" height="675" fill="url(#heroGlow1)" />
          {/* Studio Mirror Grid Lines */}
          <g stroke="rgba(255,255,255,0.06)" strokeWidth="1">
            <line x1="200" y1="0" x2="200" y2="480" />
            <line x1="400" y1="0" x2="400" y2="480" />
            <line x1="600" y1="0" x2="600" y2="480" />
            <line x1="800" y1="0" x2="800" y2="480" />
            <line x1="1000" y1="0" x2="1000" y2="480" />
          </g>
          {/* Reflective Studio Wooden Floor */}
          <path d="M0 460 L1200 460 L1200 675 L0 675 Z" fill="url(#studioFloor)" />
          <line x1="0" y1="460" x2="1200" y2="460" stroke="#a855f7" strokeWidth="1.5" strokeOpacity="0.4" />
          {/* Diagonal Rim Light Beams */}
          <polygon points="500,0 720,0 950,460 730,460" fill="url(#neonBeam)" opacity="0.12" />
          <polygon points="750,0 880,0 1150,460 1020,460" fill="#a855f7" opacity="0.08" />

          {/* Dancers Silhouettes (Indian Dance Crew in mid-choreography) */}
          {/* Center Lead Dancer */}
          <g transform="translate(640, 220)">
            <ellipse cx="60" cy="30" rx="16" ry="19" fill="#f5f3ff" opacity="0.9" />
            {/* Torso & dynamic arms */}
            <path d="M40 50 Q60 45 80 50 L95 120 Q60 130 25 120 Z" fill="#e0e7ff" opacity="0.85" />
            {/* Extended arm gesture */}
            <path d="M40 55 Q-10 40 -35 15 Q-20 8 30 45" fill="#c7d2fe" opacity="0.8" />
            <path d="M80 55 Q130 35 155 70 Q145 80 85 65" fill="#c7d2fe" opacity="0.8" />
            {/* Legs in wide groove stance */}
            <path d="M30 120 L-10 230 L20 235 L50 130 Z" fill="#312e81" />
            <path d="M90 120 L130 220 L160 215 L105 130 Z" fill="#312e81" />
            {/* Rim light highlight */}
            <circle cx="60" cy="30" r="22" stroke="#ec4899" strokeWidth="2.5" strokeDasharray="6 4" opacity="0.7" />
          </g>

          {/* Left Wing Dancer (Locking Freeze) */}
          <g transform="translate(430, 260) scale(0.85)">
            <ellipse cx="50" cy="25" rx="15" ry="18" fill="#e0e7ff" opacity="0.75" />
            <path d="M30 45 Q50 40 70 45 L80 115 Q50 125 20 115 Z" fill="#c7d2fe" opacity="0.7" />
            <path d="M25 50 Q-20 60 -40 100 Q-30 108 15 60" fill="#a5b4fc" opacity="0.65" />
            <path d="M70 50 Q110 30 125 0 Q135 10 75 58" fill="#a5b4fc" opacity="0.65" />
            <path d="M25 115 L5 220 L30 225 L45 120 Z" fill="#1e1b4b" />
            <path d="M75 115 L95 210 L125 210 L85 120 Z" fill="#1e1b4b" />
          </g>

          {/* Right Wing Dancer (Classical / Contemporary Fusion Extension) */}
          <g transform="translate(860, 240) scale(0.88)">
            <ellipse cx="50" cy="20" rx="15" ry="18" fill="#fdf2f8" opacity="0.8" />
            <path d="M30 40 Q50 36 70 40 L85 115 Q50 122 15 115 Z" fill="#fbcfe8" opacity="0.75" />
            <path d="M25 45 Q-15 10 -40 -20 Q-30 -25 20 38" fill="#f472b6" opacity="0.7" />
            <path d="M70 45 Q120 70 140 110 Q128 116 68 55" fill="#f472b6" opacity="0.7" />
            <path d="M20 115 L-15 225 L10 230 L40 120 Z" fill="#831843" />
            <path d="M80 115 L110 215 L135 210 L90 120 Z" fill="#831843" />
          </g>

          {/* Stage Mist & Ambient Particle Stars */}
          <circle cx="700" cy="200" r="2" fill="#fff" opacity="0.6" />
          <circle cx="820" cy="160" r="1.5" fill="#fff" opacity="0.8" />
          <circle cx="560" cy="280" r="2" fill="#ec4899" opacity="0.7" />
          <circle cx="920" cy="300" r="1.5" fill="#8b5cf6" opacity="0.9" />
          <circle cx="480" cy="180" r="2" fill="#fff" opacity="0.5" />
        </svg>
      );

    case 'bollywood':
      return (
        <svg className="w-full h-full" viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="bollyGlow" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#db2777" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#9333ea" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#09090b" stopOpacity="1" />
            </radialGradient>
          </defs>
          <rect width="600" height="450" fill="#09090b" />
          <rect width="600" height="450" fill="url(#bollyGlow)" />
          {/* Festive energetic motion swirls */}
          <path d="M100 380 Q300 120 500 360" stroke="#f43f5e" strokeWidth="3" strokeOpacity="0.4" fill="none" />
          <path d="M120 400 Q300 180 480 390" stroke="#f59e0b" strokeWidth="2" strokeOpacity="0.5" fill="none" />
          <path d="M180 350 Q300 240 420 350" stroke="#ec4899" strokeWidth="1.5" strokeOpacity="0.6" strokeDasharray="4 4" fill="none" />
          {/* Bollywood dancer silhouette in energetic thumka / hookstep */}
          <g transform="translate(250, 100)">
            <circle cx="50" cy="30" r="22" fill="#fdf2f8" opacity="0.9" />
            {/* Flowing Dupatta / Scarf Arc */}
            <path d="M-40 40 Q50 -30 140 30 Q160 80 130 140 Q100 80 50 20 Q-10 60 -40 40 Z" fill="#ec4899" opacity="0.45" />
            {/* Expressive Body Gesture */}
            <path d="M30 55 Q50 50 70 55 L85 140 Q50 150 15 140 Z" fill="#f472b6" opacity="0.85" />
            {/* Arms raised in celebratory Bollywood hookstep */}
            <path d="M25 60 Q-25 30 -40 -10 Q-20 -15 20 45" fill="#fbcfe8" opacity="0.9" />
            <path d="M75 60 Q125 30 140 -10 Q120 -15 80 45" fill="#fbcfe8" opacity="0.9" />
            {/* Ghungroo / Leg Movement */}
            <path d="M20 140 L0 260 L30 265 L45 145 Z" fill="#be185d" />
            <path d="M80 140 L115 250 L140 245 L95 145 Z" fill="#be185d" />
            {/* Saffron & Gold Sparkles */}
            <circle cx="-35" cy="-5" r="4" fill="#fbbf24" />
            <circle cx="135" cy="-5" r="4" fill="#fbbf24" />
            <circle cx="50" cy="18" r="3" fill="#f43f5e" />
          </g>
        </svg>
      );

    case 'hiphop':
      return (
        <svg className="w-full h-full" viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="hiphopGlow" cx="45%" cy="45%" r="65%">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.55" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#09090b" stopOpacity="1" />
            </radialGradient>
          </defs>
          <rect width="600" height="450" fill="#09090b" />
          <rect width="600" height="450" fill="url(#hiphopGlow)" />
          {/* Concrete urban geometric grid */}
          <line x1="0" y1="360" x2="600" y2="360" stroke="#8b5cf6" strokeWidth="2" strokeOpacity="0.4" />
          <line x1="0" y1="400" x2="600" y2="400" stroke="#6366f1" strokeWidth="1" strokeOpacity="0.25" />
          {/* Soundwave equalizer bars */}
          <g opacity="0.25">
            <rect x="80" y="280" width="8" height="70" fill="#a855f7" />
            <rect x="95" y="240" width="8" height="110" fill="#a855f7" />
            <rect x="110" y="200" width="8" height="150" fill="#a855f7" />
            <rect x="125" y="260" width="8" height="90" fill="#a855f7" />
            <rect x="470" y="270" width="8" height="80" fill="#3b82f6" />
            <rect x="485" y="220" width="8" height="130" fill="#3b82f6" />
            <rect x="500" y="250" width="8" height="100" fill="#3b82f6" />
          </g>
          {/* B-Boy / Street Dancer Popping Freeze Silhouette */}
          <g transform="translate(230, 110)">
            {/* Snapback Cap & Head */}
            <path d="M60 25 Q95 20 85 45 Q50 55 45 35 Z" fill="#c7d2fe" />
            <circle cx="55" cy="35" r="18" fill="#e0e7ff" opacity="0.9" />
            {/* Oversized Hoodie Torso */}
            <path d="M25 55 L90 55 L105 145 L15 145 Z" fill="#6366f1" opacity="0.8" />
            {/* Sharp Angle Street Arms (Locking) */}
            <path d="M25 60 L-35 85 L-15 140 L10 130 Z" fill="#818cf8" />
            <path d="M90 60 L145 30 L160 80 L115 85 Z" fill="#818cf8" />
            {/* Wide Baggy Cargo Pants Stance */}
            <path d="M25 145 L-10 250 L25 255 L50 155 Z" fill="#1e1b4b" />
            <path d="M95 145 L130 250 L165 250 L110 155 Z" fill="#1e1b4b" />
            {/* Sneaker Accent Glow */}
            <rect x="-15" y="248" width="45" height="12" rx="4" fill="#38bdf8" opacity="0.9" />
            <rect x="125" y="248" width="45" height="12" rx="4" fill="#38bdf8" opacity="0.9" />
          </g>
        </svg>
      );

    case 'contemporary':
      return (
        <svg className="w-full h-full" viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="contempGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#581c87" stopOpacity="0.6" />
              <stop offset="70%" stopColor="#1e1b4b" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#09090b" stopOpacity="1" />
            </radialGradient>
          </defs>
          <rect width="600" height="450" fill="#09090b" />
          <rect width="600" height="450" fill="url(#contempGlow)" />
          {/* Flowing Fabric Ribbons in Motion */}
          <path d="M80 400 C150 200 450 100 520 300 C550 380 400 420 300 390" stroke="#c084fc" strokeWidth="2.5" strokeOpacity="0.6" fill="none" />
          <path d="M120 420 C200 240 400 160 480 340" stroke="#f472b6" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
          {/* Dancer in Athletic Mid-Air Arch / Leap */}
          <g transform="translate(210, 80)">
            <ellipse cx="90" cy="45" rx="16" ry="19" fill="#f5f3ff" opacity="0.95" />
            {/* Arched Spine & Torso */}
            <path d="M80 65 C60 110 70 160 100 190 C120 160 115 110 100 65 Z" fill="#e9d5ff" opacity="0.85" />
            {/* Extended Lyrical Arms */}
            <path d="M80 70 C30 50 -30 90 -60 130 C-45 135 15 85 85 80" fill="#d8b4fe" opacity="0.8" />
            <path d="M100 70 C160 50 220 20 260 -10 C265 0 210 65 105 80" fill="#d8b4fe" opacity="0.8" />
            {/* Legs in split leap */}
            <path d="M90 185 C50 220 0 260 -50 280 C-40 290 35 240 100 195" fill="#c084fc" opacity="0.75" />
            <path d="M105 190 C150 220 210 240 270 250 C265 260 195 245 100 200" fill="#c084fc" opacity="0.75" />
          </g>
        </svg>
      );

    case 'wedding':
      return (
        <svg className="w-full h-full" viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="weddingGlow" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#b45309" stopOpacity="0.45" />
              <stop offset="40%" stopColor="#be185d" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#09090b" stopOpacity="1" />
            </radialGradient>
          </defs>
          <rect width="600" height="450" fill="#09090b" />
          <rect width="600" height="450" fill="url(#weddingGlow)" />
          {/* Festive Marigold / Fairy Lights Garland */}
          <g opacity="0.4">
            <path d="M0 60 Q150 120 300 60 Q450 120 600 60" stroke="#f59e0b" strokeWidth="2" strokeDasharray="8 8" fill="none" />
            <circle cx="150" cy="120" r="6" fill="#f59e0b" />
            <circle cx="300" cy="60" r="6" fill="#ec4899" />
            <circle cx="450" cy="120" r="6" fill="#f59e0b" />
          </g>
          {/* Couple Sangeet Rehearsal Silhouettes */}
          {/* Groom (Left) */}
          <g transform="translate(190, 120)">
            <ellipse cx="40" cy="30" rx="16" ry="18" fill="#fef3c7" opacity="0.9" />
            {/* Kurta & Pose */}
            <path d="M20 50 L60 50 L70 160 L10 160 Z" fill="#d97706" opacity="0.8" />
            {/* Hand extending towards Bride */}
            <path d="M60 55 L115 85 L105 100 L55 70 Z" fill="#fde68a" />
            {/* Churidar legs */}
            <path d="M15 160 L5 250 L25 250 L35 165 Z" fill="#78350f" />
            <path d="M65 160 L55 250 L75 250 L75 165 Z" fill="#78350f" />
          </g>
          {/* Bride (Right) in graceful twirl */}
          <g transform="translate(290, 110)">
            <ellipse cx="45" cy="30" rx="15" ry="18" fill="#fdf2f8" opacity="0.9" />
            {/* Choli & Lehenga Flare */}
            <path d="M30 50 L60 50 L70 100 L20 100 Z" fill="#db2777" opacity="0.9" />
            {/* Flared Lehenga Skirt */}
            <path d="M20 100 L70 100 L125 240 L-35 240 Z" fill="#9d174d" opacity="0.85" />
            {/* Gold Border Trims */}
            <path d="M-35 240 Q45 225 125 240" stroke="#f59e0b" strokeWidth="4" fill="none" />
            {/* Arms raised gracefully */}
            <path d="M30 55 L-5 75 L5 90 L35 65 Z" fill="#fbcfe8" />
            <path d="M60 55 L105 35 L115 50 L65 70 Z" fill="#fbcfe8" />
          </g>
          {/* Golden Confetti Shower */}
          <circle cx="280" cy="180" r="3" fill="#fbbf24" opacity="0.9" />
          <circle cx="340" cy="150" r="2.5" fill="#fbbf24" opacity="0.8" />
          <circle cx="230" cy="220" r="2" fill="#ec4899" opacity="0.9" />
          <circle cx="380" cy="200" r="3" fill="#f59e0b" opacity="0.7" />
        </svg>
      );

    case 'classical':
      return (
        <svg className="w-full h-full" viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="classicalGlow" cx="50%" cy="45%" r="60%">
              <stop offset="0%" stopColor="#9f1239" stopOpacity="0.55" />
              <stop offset="45%" stopColor="#854d0e" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#09090b" stopOpacity="1" />
            </radialGradient>
          </defs>
          <rect width="600" height="450" fill="#09090b" />
          <rect width="600" height="450" fill="url(#classicalGlow)" />
          {/* Classical Temple Architecture Halo */}
          <circle cx="300" cy="220" r="160" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="8 6" />
          <circle cx="300" cy="220" r="140" stroke="#e11d48" strokeWidth="1" strokeOpacity="0.2" />
          {/* Nataraja / Bharatanatyam Aramandi Posture */}
          <g transform="translate(230, 90)">
            {/* Crown / Kondai Bun & Head */}
            <circle cx="70" cy="25" r="14" fill="#fbbf24" opacity="0.8" />
            <circle cx="70" cy="40" r="16" fill="#ffe4e6" opacity="0.95" />
            {/* Torso & Silk Costume Pleats */}
            <path d="M50 60 L90 60 L100 130 L40 130 Z" fill="#be123c" opacity="0.9" />
            {/* Aramandi Fan Pleats (Golden) */}
            <path d="M40 130 L100 130 L140 220 L0 220 Z" fill="#e11d48" opacity="0.85" />
            <path d="M70 130 L10 220 M70 130 L40 220 M70 130 L70 220 M70 130 L100 220 M70 130 L130 220" stroke="#f59e0b" strokeWidth="2" strokeOpacity="0.7" />
            {/* Extended Arms in Pataka & Tripataka Mudras */}
            <path d="M50 65 L-15 90 L-10 105 L45 80 Z" fill="#fda4af" />
            <circle cx="-18" cy="98" r="7" fill="#fb7185" />
            <path d="M90 65 L155 90 L150 105 L85 80 Z" fill="#fda4af" />
            <circle cx="158" cy="98" r="7" fill="#fb7185" />
            {/* Ghungroo Anklet Bells */}
            <ellipse cx="20" cy="240" rx="14" ry="6" fill="#fbbf24" />
            <ellipse cx="120" cy="240" rx="14" ry="6" fill="#fbbf24" />
          </g>
        </svg>
      );

    case 'kids':
      return (
        <svg className="w-full h-full" viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="kidsGlow" cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor="#0891b2" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#09090b" stopOpacity="1" />
            </radialGradient>
          </defs>
          <rect width="600" height="450" fill="#09090b" />
          <rect width="600" height="450" fill="url(#kidsGlow)" />
          {/* Floating musical notes and stars */}
          <circle cx="120" cy="100" r="12" fill="#38bdf8" opacity="0.3" />
          <circle cx="480" cy="120" r="16" fill="#a855f7" opacity="0.3" />
          <circle cx="520" cy="280" r="10" fill="#f59e0b" opacity="0.3" />
          {/* Three Junior Dancers Jumping in Joy */}
          {/* Center Kid */}
          <g transform="translate(260, 140)">
            <circle cx="40" cy="30" r="18" fill="#e0f2fe" />
            <path d="M25 50 L55 50 L65 120 L15 120 Z" fill="#0284c7" />
            {/* Arms up cheering */}
            <path d="M25 55 L-5 25 L10 20 L35 50 Z" fill="#7dd3fc" />
            <path d="M55 55 L85 25 L70 20 L45 50 Z" fill="#7dd3fc" />
            {/* Jumping legs */}
            <path d="M20 120 L0 180 L20 185 L35 125 Z" fill="#1e3a8a" />
            <path d="M60 120 L80 180 L60 185 L45 125 Z" fill="#1e3a8a" />
          </g>
          {/* Left Kid */}
          <g transform="translate(150, 170) scale(0.85)">
            <circle cx="40" cy="30" r="18" fill="#ede9fe" />
            <path d="M25 50 L55 50 L65 115 L15 115 Z" fill="#7c3aed" />
            <path d="M25 55 L-10 65 L-5 80 L30 65 Z" fill="#c4b5fd" />
            <path d="M55 55 L90 65 L85 80 L50 65 Z" fill="#c4b5fd" />
            <path d="M20 115 L10 175 L30 175 L35 120 Z" fill="#312e81" />
            <path d="M60 115 L70 175 L50 175 L45 120 Z" fill="#312e81" />
          </g>
          {/* Right Kid */}
          <g transform="translate(370, 170) scale(0.85)">
            <circle cx="40" cy="30" r="18" fill="#ffedd5" />
            <path d="M25 50 L55 50 L65 115 L15 115 Z" fill="#ea580c" />
            <path d="M25 55 L-5 35 L5 25 L35 50 Z" fill="#fdba74" />
            <path d="M55 55 L85 45 L80 60 L50 60 Z" fill="#fdba74" />
            <path d="M20 115 L5 175 L25 175 L35 120 Z" fill="#7c2d12" />
            <path d="M60 115 L75 175 L55 175 L45 120 Z" fill="#7c2d12" />
          </g>
        </svg>
      );

    case 'freestyle':
    case 'fitness':
      return (
        <svg className="w-full h-full" viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="freeGlow" cx="50%" cy="45%" r="60%">
              <stop offset="0%" stopColor="#059669" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#0d9488" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#09090b" stopOpacity="1" />
            </radialGradient>
          </defs>
          <rect width="600" height="450" fill="#09090b" />
          <rect width="600" height="450" fill="url(#freeGlow)" />
          {/* Dynamic pulse heartrate wave */}
          <path d="M0 260 L180 260 L210 200 L240 320 L270 230 L300 280 L320 260 L600 260" stroke="#10b981" strokeWidth="2.5" strokeOpacity="0.4" fill="none" />
          {/* Fitness dancer in athletic high-energy jump */}
          <g transform="translate(250, 100)">
            <circle cx="50" cy="30" r="18" fill="#d1fae5" />
            <path d="M30 50 L70 50 L80 130 L20 130 Z" fill="#059669" opacity="0.9" />
            <path d="M30 55 L-15 35 L-5 20 L35 45 Z" fill="#6ee7b7" />
            <path d="M70 55 L115 35 L105 20 L65 45 Z" fill="#6ee7b7" />
            <path d="M25 130 L-5 230 L20 235 L45 135 Z" fill="#064e3b" />
            <path d="M75 130 L105 230 L80 235 L55 135 Z" fill="#064e3b" />
          </g>
        </svg>
      );

    case 'instructor-rohan':
      return (
        <svg className="w-full h-full" viewBox="0 0 400 480" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="rohanGlow" cx="50%" cy="35%" r="60%">
              <stop offset="0%" stopColor="#6d28d9" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#09090b" stopOpacity="1" />
            </radialGradient>
          </defs>
          <rect width="400" height="480" fill="#09090b" />
          <rect width="400" height="480" fill="url(#rohanGlow)" />
          {/* Portrait of Rohan Deshmukh (Editorial Silhouette) */}
          <g transform="translate(110, 80)">
            <ellipse cx="90" cy="85" rx="42" ry="52" fill="#c7d2fe" />
            {/* Streetwear cap & headphones */}
            <path d="M45 55 Q90 25 135 55 L145 75 Q90 60 35 75 Z" fill="#1e1b4b" />
            {/* Broad athletic shoulders in dark jacket */}
            <path d="M20 160 Q90 145 160 160 L200 380 L-20 380 Z" fill="#312e81" />
            <path d="M50 165 L90 230 L130 165" stroke="#a5b4fc" strokeWidth="3" fill="none" />
            {/* Violet rim light on shoulder */}
            <path d="M-15 360 L20 160 Q55 150 90 152" stroke="#ec4899" strokeWidth="3" fill="none" strokeOpacity="0.7" />
          </g>
        </svg>
      );

    case 'instructor-ananya':
      return (
        <svg className="w-full h-full" viewBox="0 0 400 480" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="ananyaGlow" cx="50%" cy="35%" r="60%">
              <stop offset="0%" stopColor="#be123c" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#09090b" stopOpacity="1" />
            </radialGradient>
          </defs>
          <rect width="400" height="480" fill="#09090b" />
          <rect width="400" height="480" fill="url(#ananyaGlow)" />
          {/* Portrait of Ananya Kulkarni */}
          <g transform="translate(110, 75)">
            {/* Hair bun with jasmine flower ring motif */}
            <circle cx="90" cy="50" r="32" fill="#4c0519" />
            <circle cx="90" cy="50" r="36" stroke="#fbbf24" strokeWidth="2" strokeDasharray="6 4" strokeOpacity="0.7" />
            <ellipse cx="90" cy="95" rx="38" ry="48" fill="#ffe4e6" />
            {/* Elegant neck and saree blouse posture */}
            <path d="M30 170 Q90 150 150 170 L195 380 L-15 380 Z" fill="#881337" />
            <path d="M40 180 Q90 240 140 180" stroke="#f59e0b" strokeWidth="2.5" fill="none" />
            {/* Jhumka earring accent */}
            <circle cx="50" cy="115" r="5" fill="#f59e0b" />
            <circle cx="130" cy="115" r="5" fill="#f59e0b" />
          </g>
        </svg>
      );

    case 'instructor-kabir':
      return (
        <svg className="w-full h-full" viewBox="0 0 400 480" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="kabirGlow" cx="50%" cy="35%" r="60%">
              <stop offset="0%" stopColor="#b45309" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#09090b" stopOpacity="1" />
            </radialGradient>
          </defs>
          <rect width="400" height="480" fill="#09090b" />
          <rect width="400" height="480" fill="url(#kabirGlow)" />
          {/* Portrait of Kabir Joshi */}
          <g transform="translate(110, 80)">
            <ellipse cx="90" cy="85" rx="40" ry="50" fill="#fef3c7" />
            {/* Modern styled hair & jawline */}
            <path d="M50 55 Q90 30 130 55 L125 75 Q90 65 55 75 Z" fill="#292524" />
            {/* Confident blazer shoulders */}
            <path d="M25 160 Q90 148 155 160 L195 380 L-15 380 Z" fill="#78350f" />
            <path d="M90 155 L90 300" stroke="#d97706" strokeWidth="3" fill="none" />
            {/* Warm amber rim light */}
            <path d="M155 160 L195 380" stroke="#f59e0b" strokeWidth="3" fill="none" strokeOpacity="0.7" />
          </g>
        </svg>
      );

    case 'studio':
      return (
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="studGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e1b4b" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#09090b" stopOpacity="1" />
            </linearGradient>
          </defs>
          <rect width="600" height="400" fill="#09090b" />
          <rect width="600" height="400" fill="url(#studGrad)" />
          {/* Mirror Perspective Lines */}
          <line x1="50" y1="50" x2="150" y2="300" stroke="rgba(255,255,255,0.1)" />
          <line x1="150" y1="50" x2="220" y2="300" stroke="rgba(255,255,255,0.1)" />
          <line x1="450" y1="50" x2="380" y2="300" stroke="rgba(255,255,255,0.1)" />
          <line x1="550" y1="50" x2="450" y2="300" stroke="rgba(255,255,255,0.1)" />
          {/* Polished Sprung Wooden Floor */}
          <path d="M0 280 L600 280 L600 400 L0 400 Z" fill="#18181b" />
          <line x1="0" y1="280" x2="600" y2="280" stroke="#a855f7" strokeWidth="2" strokeOpacity="0.5" />
          <text x="300" y="240" textAnchor="middle" fill="#a1a1aa" fontSize="14" letterSpacing="3" fontFamily="sans-serif">
            2,400 SQ.FT. BANER DANCE SUITE
          </text>
        </svg>
      );

    default:
      // Gallery & Reels general cards
      return (
        <svg className="w-full h-full" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="defGlow" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#701a75" stopOpacity="0.45" />
              <stop offset="70%" stopColor="#312e81" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#09090b" stopOpacity="1" />
            </radialGradient>
          </defs>
          <rect width="500" height="500" fill="#09090b" />
          <rect width="500" height="500" fill="url(#defGlow)" />
          {/* Geometric artistic dancer in motion */}
          <g transform="translate(180, 150)">
            <circle cx="70" cy="40" r="24" fill="#fdf4ff" opacity="0.9" />
            <path d="M40 70 L100 70 L115 170 L25 170 Z" fill="#a21caf" opacity="0.8" />
            <path d="M40 75 L-10 110 L5 125 L45 85 Z" fill="#d946ef" />
            <path d="M100 75 L150 40 L160 55 L105 85 Z" fill="#d946ef" />
            <path d="M30 170 L5 250 L35 250 L50 175 Z" fill="#4a044e" />
            <path d="M90 170 L125 240 L150 235 L105 175 Z" fill="#4a044e" />
          </g>
          <circle cx="250" cy="250" r="180" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
        </svg>
      );
  }
}
