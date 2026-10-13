# Rhythm Republic Dance Studio (Baner, Pune, India)

A premium, production-ready marketing website for **Rhythm Republic Dance Studio**, a fictional high-energy dance academy based in Baner, Pune, Maharashtra, India. Designed specifically for the urban Indian market with instant WhatsApp click-to-chat conversion, localized dance disciplines (Bollywood, Hip-Hop, Semi-Classical Fusion, and Wedding Sangeet), transparent sample batch schedules, and an Instagram reels showcase.

---

## 1. Framework Selection & Architecture

- **Framework:** **React 19 + Vite 8 + TypeScript**
- **Styling:** **Tailwind CSS v4** with custom typography tokens
- **Typography:**
  - Display Font: **Outfit** (Geometric, energetic, bold modern headline presence)
  - Body Font: **Plus Jakarta Sans** (High legibility, balanced geometry)
- **Icons:** **Lucide React**
- **Visuals:** Custom cinematic vector art generator (`src/components/DanceVisualArt.tsx`) with zero-broken-image fallbacks and photo/video drop-in support via `public/images/`.

### Why React + Vite SPA?
1. **Zero Backend Dependency:** Static marketing website deployable to any CDN (GitHub Pages, Cloudflare Pages, Vercel) with no server hosting costs.
2. **Instant WhatsApp Integration:** Lead generation works seamlessly client-side via WhatsApp click-to-chat protocol (`https://wa.me/919876543210?text=...`) without requiring an expensive backend form service.
3. **Lightning-fast Page Speed:** Near-instant initial load and fluid transitions.

---

## 2. Key Features & Indian Market Localization

1. **Centralized Configuration (`src/data/studioData.ts`):**
   - Studio name, tagline, address in Baner (Pune), landmark, phone, WhatsApp number, Instagram handle, opening hours, facilities, and disclaimers all configurable from a single file.
2. **Strict Top Bar Contract:**
   - 3 clean zones: Brand Wordmark (`Rhythm Republic`), concise single-line nav links, and 1 primary CTA button ("Book a Free Trial").
3. **Dedicated Wedding & Sangeet Choreography Section:**
   - Tailored specifically for Indian weddings: Bride & Groom first dance, bridesmaids/groomsmen dhamaka medleys, parents' routines, and custom track editing.
4. **Interactive Timetable & Batch Filter:**
   - Filterable by dance style and skill level.
   - Shows timings in Indian 12-hour format (e.g. `06:00 PM – 07:15 PM`), duration, instructors, age groups, and illustrative sample fees in INR (`₹`).
   - Every batch card has an active "Book This Class via WhatsApp" button prefilling exact batch info.
5. **Interactive Media Gallery with Lightbox:**
   - Responsive grid with category filters (Batches, Street, Weddings, Contemporary, Kids, Classical).
   - Lightbox modal with next/prev controls, image counter, and keyboard <kbd>Esc</kbd> support.
6. **Instagram Reels Showcase:**
   - 6 sample 9:16 vertical cards with view counts, song names, and follow CTA.
7. **Validated Lead Capture Form:**
   - Validates name and 10-digit Indian phone numbers.
   - Immediately prepares a prefilled WhatsApp message and opens the chat in a new tab, explaining to the user to press Send. Provides clipboard copy fallback.
8. **Floating WhatsApp Action Button:**
   - Fixed bottom-right with dismissable tooltip and attention pulse ring. Sits above the fold and respects mobile navigation margins.

---

## 3. Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local dev server (default port: 3000)
npm run dev

# 3. Build production bundle
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 4. Deployment Guide

### A. Vercel
1. Push code to GitHub.
2. Import repository in [Vercel Dashboard](https://vercel.com).
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Click **Deploy**.

### B. Cloudflare Pages
1. Connect repository in Cloudflare Pages dashboard.
2. Build command: `npm run build`
3. Build output directory: `dist`
4. Root directory: `/`
5. Deploy site.

### C. GitHub Pages
1. In `vite.config.ts`, if deploying to `https://<username>.github.io/<repo-name>/`, set the base path:
   ```typescript
   export default defineConfig({
     base: '/<repo-name>/',
     // ...
   });
   ```
2. Build and push `dist` to the `gh-pages` branch using GitHub Actions or `gh-pages` npm package.

---

## 5. Fictional Demo Content Checklist (Replace Before Production)

| Item | Current Demo Value | Location in Code |
| :--- | :--- | :--- |
| **WhatsApp Number** | `919876543210` | `src/data/studioData.ts` -> `STUDIO_CONFIG.contact.whatsappNumber` |
| **Phone Display** | `+91 98765 43210` | `src/data/studioData.ts` -> `STUDIO_CONFIG.contact.phoneDisplay` |
| **Studio Address** | The Pavilion Hub, Baner, Pune 411045 | `src/data/studioData.ts` -> `STUDIO_CONFIG.location` |
| **Instagram Handle** | `@rhythmrepublic.dance` | `src/data/studioData.ts` -> `STUDIO_CONFIG.contact.instagramHandle` |
| **Email** | `hello@rhythmrepublic.example` | `src/data/studioData.ts` -> `STUDIO_CONFIG.contact.email` |
| **Google Maps Embed** | Baner sample coordinate embed | `src/data/studioData.ts` -> `STUDIO_CONFIG.location.googleMapsEmbedUrl` |
| **Instructor Profiles** | Rohan, Ananya, Kabir (Illustrative) | `src/data/studioData.ts` -> `INSTRUCTORS` |
| **Batch Timetable & Fees** | Sample batch timings & ₹ fees | `src/data/studioData.ts` -> `TIMETABLE_BATCHES` |
| **Student Testimonials** | 4 sample student reviews | `src/data/studioData.ts` -> `TESTIMONIALS` |

---

## 6. Final Testing Checklist

- [x] Sticky navigation stays visible and follows 3-zone top bar contract.
- [x] Mobile drawer opens smoothly, shows all links, and closes upon navigation.
- [x] Hero CTA opens WhatsApp with prefilled trial message.
- [x] All 8 dance styles display descriptions, level labels (unboxed text), and WhatsApp buttons.
- [x] Wedding Choreography section details couple entry, Sangeet squad, and sample packages.
- [x] Timetable filter works across styles and skill levels.
- [x] "Book This Class" buttons send exact batch name and instructor to WhatsApp.
- [x] Gallery lightbox opens on card click, supports next/prev and keyboard <kbd>Esc</kbd>.
- [x] Lead capture form validates name and 10-digit Indian phone number before launching WhatsApp.
- [x] Floating WhatsApp button operates without covering mobile navigation links.
- [x] Vector artwork renders seamlessly with zero broken image tags.
- [x] Zero TypeScript compilation errors (`tsc --noEmit` clean).
