# Rhythm Republic Dance Studio — Visual Asset Manifest

This asset manifest documents the visual requirements, image dimensions, target file paths, aspect ratios, and AI prompt recipes for Rhythm Republic Dance Studio (Baner, Pune, India).

The website includes resilient, high-fidelity vector artwork that renders seamlessly right out of the box (`src/components/DanceVisualArt.tsx`). When production photography or AI-generated image files are added to `public/images/`, the components immediately display them.

---

## 1. Directory Structure

```
public/
  images/
    hero_dance_crew.webp          # 1920x1080 (16:9)
    style_bollywood.webp          # 1200x900  (4:3)
    style_hiphop.webp             # 1200x900  (4:3)
    style_contemporary.webp       # 1200x900  (4:3)
    style_wedding_sangeet.webp    # 1200x900  (4:3)
    style_classical.webp          # 1200x900  (4:3)
    style_kids.webp               # 1200x900  (4:3)
    style_freestyle.webp          # 1200x900  (4:3)
    style_fitness.webp            # 1200x900  (4:3)
    studio_interior.webp          # 1600x900  (16:9)
    instructor_rohan.webp         # 800x1000  (4:5)
    instructor_ananya.webp        # 800x1000  (4:5)
    instructor_kabir.webp         # 800x1000  (4:5)
    gallery_practice_1.webp       # 1080x1080 (1:1)
    gallery_crew_2.webp           # 1200x900  (4:3)
    gallery_sangeet_3.webp        # 1200x900  (4:3)
    gallery_floorwork_4.webp      # 1080x1080 (1:1)
    gallery_kids_5.webp           # 1200x900  (4:3)
    gallery_classical_6.webp      # 1080x1080 (1:1)
  videos/
    hero_loop_cinematic.mp4       # 1920x1080 (16:9, H.264, 8-12s loop, muted)
  posters/
    hero_video_poster.webp        # 1920x1080 (16:9 poster fallback)
```

---

## 2. Asset Specifications & Generation Prompts

### A. Hero Cinematic Visual
- **File:** `public/images/hero_dance_crew.webp`
- **Aspect Ratio:** 16:9 (`1920x1080`)
- **Generation Prompt:**
  > "Premium cinematic editorial photograph of a diverse urban Indian dance crew performing synchronized high-energy hip-hop and contemporary choreography inside a modern dark dance studio, dramatic violet and magenta rim lighting, deep charcoal background, expressive movement, authentic Indian dancers, premium commercial dance photography, wide 16:9 composition with negative space on the left, realistic anatomy, no text, no watermark."

### B. Bollywood Fusion Style Card
- **File:** `public/images/style_bollywood.webp`
- **Aspect Ratio:** 4:3 (`1200x900`)
- **Generation Prompt:**
  > "Dynamic editorial photograph of energetic young Indian dancers performing modern Bollywood fusion dance in a contemporary studio, expressive joyful facial expressions, vibrant modern Indian styling, theatrical stage lighting with warm accents, sharp focus, professional commercial photography, 4:3 aspect ratio, no text."

### C. Hip-Hop & Urban Street Style Card
- **File:** `public/images/style_hiphop.webp`
- **Aspect Ratio:** 4:3 (`1200x900`)
- **Generation Prompt:**
  > "Edgy urban street dance photography of young Indian dancers in stylish streetwear performing popping and locking choreography, moody studio with subtle violet haze, dynamic low-angle composition, athletic movement, 4:3 aspect ratio, no text."

### D. Contemporary Dance Style Card
- **File:** `public/images/style_contemporary.webp`
- **Aspect Ratio:** 4:3 (`1200x900`)
- **Generation Prompt:**
  > "Fine-art contemporary dance photograph of an Indian dancer in dramatic mid-air suspension with flowing dark violet fabric, dark minimalist studio background, soft volumetric rim lighting, graceful athletic posture, 4:3 aspect ratio, no text."

### E. Wedding & Sangeet Choreography
- **File:** `public/images/style_wedding_sangeet.webp`
- **Aspect Ratio:** 4:3 (`1200x900`)
- **Generation Prompt:**
  > "Cinematic rehearsal photograph of a young Indian couple and family members laughing and practicing an upbeat Sangeet wedding dance choreography in a spacious mirror-lined dance studio, festive modern Indo-western attire, joyful genuine smiles, warm ambient lighting, 4:3 aspect ratio, no text."

### F. Semi-Classical & Bharatanatyam Fusion
- **File:** `public/images/style_classical.webp`
- **Aspect Ratio:** 4:3 (`1200x900`)
- **Generation Prompt:**
  > "Refined Indian dancer performing Bharatanatyam classical pose with traditional mudras, temple jewelry, and silk borders inside a dark moody studio with warm amber spotlight and subtle smoke, elegant and dignified, 4:3 aspect ratio, no text."

### G. Kids & Junior Academy
- **File:** `public/images/style_kids.webp`
- **Aspect Ratio:** 4:3 (`1200x900`)
- **Generation Prompt:**
  > "Joyful group of young Indian children ages 6 to 10 practicing energetic dance moves with big genuine smiles in a bright mirror studio with wooden floors, natural lighting, cheerful atmosphere, 4:3 aspect ratio, no text."

### H. Studio Interior Facility
- **File:** `public/images/studio_interior.webp`
- **Aspect Ratio:** 16:9 (`1600x900`)
- **Generation Prompt:**
  > "Architectural interior photograph of a spacious 2400 sq.ft dance studio in Pune with polished shock-absorbing sprung wooden floors, full-length acoustic mirrors, warm modern LED lighting, minimalist dark walls, professional sound equipment, clean and airy, no people, wide angle."

### I. Instructor Profiles (3 Samples)
1. **Rohan Deshmukh (Founder / Hip-Hop)**
   - **File:** `public/images/instructor_rohan.webp` (3:4 or 4:5, `800x1000`)
   - **Prompt:** "Editorial studio portrait of a confident 28-year-old male Indian street dancer and choreographer, modern streetwear jacket, warm charcoal studio background with subtle magenta rim light, charismatic smile, authentic Indian facial features, 8k resolution."
2. **Ananya Kulkarni (Contemporary & Classical)**
   - **File:** `public/images/instructor_ananya.webp` (3:4 or 4:5, `800x1000`)
   - **Prompt:** "Graceful editorial portrait of a 27-year-old female Indian dancer and choreographer, poised posture, simple elegant black dance attire with subtle Indian silver earrings, soft studio lighting, focused artistic expression."
3. **Kabir Joshi (Bollywood & Wedding Choreo)**
   - **File:** `public/images/instructor_kabir.webp` (3:4 or 4:5, `800x1000`)
   - **Prompt:** "High-energy commercial portrait of a 30-year-old male Indian Bollywood choreographer smiling warmly, approachable and confident, stylish modern Indo-western kurta jacket, warm studio rim light."
