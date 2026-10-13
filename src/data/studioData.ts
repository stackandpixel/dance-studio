/**
 * Central Configuration for Rhythm Republic Dance Studio
 * All business details, contact information, class batches, and pricing are configured here.
 * Note: Data below is illustrative sample data for demonstration and presentation purposes.
 */

export interface StudioConfig {
  brandName: string;
  tagline: string;
  shortDescription: string;
  location: {
    area: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    fullAddress: string;
    landmark: string;
    mapQuery: string;
    googleMapsEmbedUrl: string;
  };
  contact: {
    phoneDisplay: string;
    phoneNumberRaw: string;
    whatsappNumber: string; // digits only with country code
    instagramHandle: string;
    instagramUrl: string;
    email: string;
    openingHours: string;
    workingDays: string;
    facilities: string[];
  };
  disclaimer: string;
}

export interface DanceStyle {
  id: string;
  name: string;
  category: 'street' | 'indian' | 'contemporary' | 'events' | 'fitness';
  tagline: string;
  description: string;
  level: string;
  suitableFor: string;
  keyHighlights: string[];
  imagePrompt: string;
  gradient: string;
  accentColor: string;
}

export interface DanceClassBatch {
  id: string;
  title: string;
  styleId: string;
  styleName: string;
  instructor: string;
  days: string[];
  timing: string; // Indian 12-hour format
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Open Level' | 'Kids' | 'All Levels';
  ageGroup: string;
  sampleFeeMonthly: number; // in INR
  sampleFeeDropIn: number; // in INR
  batchSize: string;
  badge?: string;
}

export interface InstructorProfile {
  id: string;
  name: string;
  role: string;
  specialization: string[];
  bio: string;
  sampleExperience: string;
  instagram: string;
  quote: string;
}

export interface Testimonial {
  id: string;
  name: string;
  batch: string;
  duration: string;
  quote: string;
  rating: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceInr: number;
  billingPeriod: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
  note: string;
}

export interface InstagramPost {
  id: string;
  title: string;
  views: string;
  likes: string;
  type: 'Reel' | 'Choreography' | 'Behind The Scenes' | 'Workshop';
  music: string;
  aspect: string;
}

export interface WeddingPackage {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  bestFor: string;
  features: string[];
  samplePriceStarting: number;
}

export const STUDIO_CONFIG: StudioConfig = {
  brandName: "Rhythm Republic",
  tagline: "Find Your Rhythm. Own Your Stage.",
  shortDescription: "Pune's premier dance academy in Baner. High-energy Bollywood, Street Hip-Hop, Contemporary, Indian Classical, and bespoke Sangeet choreography.",
  location: {
    area: "Baner",
    city: "Pune",
    state: "Maharashtra",
    pincode: "411045",
    country: "India",
    fullAddress: "3rd Floor, The Pavilion Hub, Next to Balewadi High Street Link Road, Baner, Pune, Maharashtra 411045",
    landmark: "Near Balewadi High Street & Baner Hills",
    mapQuery: "Baner, Pune, Maharashtra, India",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.261226298886!2d73.78440027599026!3d18.562253382539958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828a43bf9d330349!2sBaner%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },
  contact: {
    phoneDisplay: "+91 98765 43210",
    phoneNumberRaw: "+919876543210",
    whatsappNumber: "919876543210", // purely digits with 91 country code
    instagramHandle: "@rhythmrepublic.dance",
    instagramUrl: "https://instagram.com",
    email: "hello@rhythmrepublic.example",
    openingHours: "Monday – Saturday: 7:00 AM – 9:00 PM · Sunday: Private Rehearsals & Sangeet Batches",
    workingDays: "Monday to Saturday (7 AM - 9 PM)",
    facilities: [
      "2,400 sq.ft. Shock-Absorbing Sprung Wooden Floors",
      "Full-Length Acoustic Mirror Walls & Professional PA Sound",
      "Air-Conditioned Dance Halls & Warm Ambience Lighting",
      "Separate Changing Lounges & Purified Water Stations",
      "Dedicated High-Speed 4K Content Creation Setup"
    ]
  },
  disclaimer: "Demo Note: Contact details, fee structures, timetable batches, instructor profiles, and student testimonials on this website are illustrative sample content created for presentation."
};

export const DANCE_STYLES: DanceStyle[] = [
  {
    id: "bollywood",
    name: "Bollywood & Commercial Fusion",
    category: "indian",
    tagline: "Desi Energy. Contemporary Attitude. Pure Celebration.",
    description: "Learn vibrant choreography blending classic Bollywood latke-jhatke with crisp hip-hop grooves, lyrical expressions, and high-energy hooksteps to the latest viral hits.",
    level: "All Levels (Beginner Friendly)",
    suitableFor: "College students, working professionals, party lovers",
    keyHighlights: ["Viral reel choreography", "Stage presence & expressions (Abhinaya)", "High calorie burn", "Beginner friendly step-by-step breakdowns"],
    imagePrompt: "Energetic young Indian dancers performing Bollywood fusion choreography in a dark modern studio with violet and magenta lighting.",
    gradient: "from-pink-600/30 via-purple-600/20 to-black",
    accentColor: "#ec4899"
  },
  {
    id: "hiphop",
    name: "Hip-Hop & Urban Street",
    category: "street",
    tagline: "Lock. Pop. Groove. Command the Cypher.",
    description: "Deep dive into foundational hip-hop techniques—isolations, bounce, waving, popping, footwork, and urban choreography set to hard-hitting beats.",
    level: "Beginner to Advanced",
    suitableFor: "Teens, youth, street dance enthusiasts",
    keyHighlights: ["Foundational grooves & body isolation", "Cypher confidence & freestyling", "Rhythm counting & musicality", "Urban dance crew routines"],
    imagePrompt: "Urban Indian street dancers in modern streetwear performing crisp hip-hop popping in a dimly lit studio with electric violet lighting.",
    gradient: "from-violet-600/30 via-indigo-600/20 to-black",
    accentColor: "#8b5cf6"
  },
  {
    id: "contemporary",
    name: "Contemporary & Floorwork",
    category: "contemporary",
    tagline: "Gravity. Emotion. Unfiltered Movement.",
    description: "Connect breath with motion. Master suspension, fluid floor transitions, release technique, and emotional storytelling through athletic movement.",
    level: "Beginner & Intermediate",
    suitableFor: "Anyone seeking grace, flexibility, and expressive release",
    keyHighlights: ["Spine articulation & core control", "Seamless floorwork & sweeps", "Improvisation & musical interpretation", "Flexibility and joint mobility"],
    imagePrompt: "Graceful contemporary Indian dancer in mid-motion suspension with atmospheric lighting in a minimalist charcoal studio.",
    gradient: "from-purple-900/40 via-violet-900/20 to-black",
    accentColor: "#c084fc"
  },
  {
    id: "wedding",
    name: "Wedding & Sangeet Choreography",
    category: "events",
    tagline: "Turn Your Family Sangeet Into a Bollywood Spectacle.",
    description: "Bespoke choreography tailored for couples, bride-groom squads, parents, and cousins. We make non-dancers look graceful, confident, and effortless on stage.",
    level: "No Dance Experience Needed",
    suitableFor: "Couples, brides, grooms, families, bridesmaids & groomsmen",
    keyHighlights: ["Custom music track mixing & mashups", "Flexible home or studio practice sessions", "Stress-free teaching for all age groups", "Concept-based romantic & dhamaka entries"],
    imagePrompt: "Indian couple and smiling family rehearsing a joyful Sangeet routine in modern festive outfits inside a mirror studio.",
    gradient: "from-amber-600/30 via-rose-600/20 to-black",
    accentColor: "#f59e0b"
  },
  {
    id: "classical",
    name: "Semi-Classical & Bharatanatyam",
    category: "indian",
    tagline: "Centuries of Heritage. Reimagined for the Modern Stage.",
    description: "Explore the grace of Indian classical dance. Learn precise hand gestures (mudras), rhythmic footwork (tattadavu), eye expressions, and graceful fusion choreographies.",
    level: "Foundational & Graded",
    suitableFor: "Kids, teenagers, and adults seeking classical rigor",
    keyHighlights: ["Pure rhythmic footwork & posture alignment", "Hastamudras & expressive storytelling", "Fusion with contemporary soul tracks", "Cultural grounding & discipline"],
    imagePrompt: "Indian dancer in refined classical fusion pose with traditional mudras and elegant jewelry under dramatic warm studio lighting.",
    gradient: "from-rose-700/30 via-amber-700/20 to-black",
    accentColor: "#f43f5e"
  },
  {
    id: "kids",
    name: "Kids & Teens Junior Academy",
    category: "street",
    tagline: "Build Rhythm, Confidence & Teamwork Early.",
    description: "Fun, vibrant batches designed for ages 5–14. Children learn rhythm fundamentals, coordination, stage courage, and fitness while having a blast with peers.",
    level: "Junior Batches (Ages 5–14)",
    suitableFor: "School kids, beginners, young aspiring performers",
    keyHighlights: ["Posture, agility & body coordination", "Safe, supportive & joyful environment", "Annual showcase stage performance", "Weekend parent-convenient batches"],
    imagePrompt: "Joyful group of young Indian children practicing energetic dance moves with big smiles in a bright wooden dance studio.",
    gradient: "from-cyan-600/30 via-blue-600/20 to-black",
    accentColor: "#06b6d4"
  },
  {
    id: "freestyle",
    name: "Freestyle & Open Floor",
    category: "contemporary",
    tagline: "Never Feel Hesitant at Any Celebration Again.",
    description: "Learn how to catch any rhythm spontaneously. Perfect for wedding afterparties, club dancefloors, and social gatherings without learning rigid steps.",
    level: "Beginner Friendly",
    suitableFor: "Adults, working professionals, shy beginners",
    keyHighlights: ["Overcome self-consciousness & stage fear", "Universal party moves & natural bounce", "Partner interaction on the floor", "Zero pressure, high enjoyment"],
    imagePrompt: "Confident group of young adults laughing and dancing freely under moody ambient neon lights in Pune dance studio.",
    gradient: "from-fuchsia-600/30 via-pink-600/20 to-black",
    accentColor: "#d946ef"
  },
  {
    id: "fitness",
    name: "Bolly-Cardio & Dance Fitness",
    category: "fitness",
    tagline: "Burn Up to 500 Calories to Desi Beats.",
    description: "Swap boring gym workouts for high-tempo dance routines. A sweat-inducing blend of Bhangra, Bollywood jumps, and functional conditioning.",
    level: "All Fitness Levels",
    suitableFor: "Fitness enthusiasts, weight loss, cardio seekers",
    keyHighlights: ["Non-stop 55-minute heart pumping cardio", "Core toning & stamina building", "Upbeat Bollywood, Bhangra & Pop tracks", "Morning & evening weekday batches"],
    imagePrompt: "Athletic Indian woman and group smiling in activewear doing energetic dance fitness workout in a bright studio.",
    gradient: "from-emerald-600/30 via-teal-600/20 to-black",
    accentColor: "#10b981"
  }
];

export const TIMETABLE_BATCHES: DanceClassBatch[] = [
  {
    id: "batch-1",
    title: "Beginner Bollywood Fusion",
    styleId: "bollywood",
    styleName: "Bollywood",
    instructor: "Kabir Joshi",
    days: ["Mon", "Wed"],
    timing: "06:00 PM – 07:15 PM",
    duration: "75 mins",
    level: "Beginner",
    ageGroup: "Teens & Adults (14+)",
    sampleFeeMonthly: 2800,
    sampleFeeDropIn: 600,
    batchSize: "15 Students Max",
    badge: "Most Popular"
  },
  {
    id: "batch-2",
    title: "Urban Hip-Hop Grooves",
    styleId: "hiphop",
    styleName: "Hip-Hop",
    instructor: "Rohan Deshmukh",
    days: ["Tue", "Thu"],
    timing: "07:00 PM – 08:15 PM",
    duration: "75 mins",
    level: "Beginner",
    ageGroup: "Teens & Adults (14+)",
    sampleFeeMonthly: 2800,
    sampleFeeDropIn: 600,
    batchSize: "14 Students Max",
    badge: "Fast Filling"
  },
  {
    id: "batch-3",
    title: "Contemporary & Floor Technique",
    styleId: "contemporary",
    styleName: "Contemporary",
    instructor: "Ananya Kulkarni",
    days: ["Wed", "Fri"],
    timing: "05:00 PM – 06:15 PM",
    duration: "75 mins",
    level: "Open Level",
    ageGroup: "Age 15+",
    sampleFeeMonthly: 3000,
    sampleFeeDropIn: 650,
    batchSize: "12 Students Max"
  },
  {
    id: "batch-4",
    title: "Junior Street & Bollywood (Kids)",
    styleId: "kids",
    styleName: "Kids Dance",
    instructor: "Kabir & Assistant",
    days: ["Sat", "Sun"],
    timing: "10:00 AM – 11:15 AM",
    duration: "75 mins",
    level: "Kids",
    ageGroup: "Ages 6 to 12",
    sampleFeeMonthly: 2600,
    sampleFeeDropIn: 550,
    batchSize: "12 Kids Max",
    badge: "Weekend Batch"
  },
  {
    id: "batch-5",
    title: "Semi-Classical Fusion & Mudras",
    styleId: "classical",
    styleName: "Classical",
    instructor: "Ananya Kulkarni",
    days: ["Tue", "Thu"],
    timing: "05:30 PM – 06:45 PM",
    duration: "75 mins",
    level: "Open Level",
    ageGroup: "All Ages (12+)",
    sampleFeeMonthly: 2900,
    sampleFeeDropIn: 600,
    batchSize: "12 Students Max"
  },
  {
    id: "batch-6",
    title: "Weekend Freestyle & Commercial Party Dance",
    styleId: "freestyle",
    styleName: "Freestyle",
    instructor: "Rohan Deshmukh",
    days: ["Sat", "Sun"],
    timing: "05:00 PM – 06:15 PM",
    duration: "75 mins",
    level: "Beginner",
    ageGroup: "Adults (18+)",
    sampleFeeMonthly: 2800,
    sampleFeeDropIn: 600,
    batchSize: "15 Students Max",
    badge: "Social Friendly"
  },
  {
    id: "batch-7",
    title: "Morning Bolly-Cardio Burn",
    styleId: "fitness",
    styleName: "Fitness",
    instructor: "Guest Trainer",
    days: ["Mon", "Wed", "Fri"],
    timing: "07:15 AM – 08:15 AM",
    duration: "60 mins",
    level: "All Levels",
    ageGroup: "Adults (18+)",
    sampleFeeMonthly: 3200,
    sampleFeeDropIn: 500,
    batchSize: "16 Students Max",
    badge: "Early Birds"
  },
  {
    id: "batch-8",
    title: "Advanced Hip-Hop Choreo & Cypher Lab",
    styleId: "hiphop",
    styleName: "Hip-Hop",
    instructor: "Rohan Deshmukh",
    days: ["Fri", "Sat"],
    timing: "07:30 PM – 09:00 PM",
    duration: "90 mins",
    level: "Intermediate",
    ageGroup: "Teens & Adults",
    sampleFeeMonthly: 3400,
    sampleFeeDropIn: 700,
    batchSize: "10 Dancers Max",
    badge: "Audition / Prerequisite"
  }
];

export const INSTRUCTORS: InstructorProfile[] = [
  {
    id: "rohan",
    name: "Rohan Deshmukh",
    role: "Founder & Artistic Director",
    specialization: ["Urban Hip-Hop", "Freestyle Cyphers", "Commercial Street"],
    bio: "With over 9 years of teaching and competing across national dance championships in Mumbai, Pune, and Bengaluru, Rohan founded Rhythm Republic to build an inclusive street dance community where dancers grow from zero rhythm to stage dominance.",
    sampleExperience: "Illustrative profile · 9+ yrs teaching experience · Choreographer for university fests & music videos",
    instagram: "@rohan.moves",
    quote: "Dance isn't about looking perfect in the mirror on day one. It's about letting the beat rewire your pulse until moving is as natural as breathing."
  },
  {
    id: "ananya",
    name: "Ananya Kulkarni",
    role: "Head of Classical Fusion & Contemporary",
    specialization: ["Semi-Classical", "Contemporary Floorwork", "Lyrical Abhinaya"],
    bio: "Trained in classical Bharatanatyam with rigorous contemporary dance training, Ananya brings profound discipline, graceful geometry, and fluid floor transitions into every class. Her batches are celebrated for emotional depth and injury-safe anatomy.",
    sampleExperience: "Illustrative profile · Trained Visharad in Bharatanatyam · 7+ yrs mentoring youth & adult batches",
    instagram: "@ananya.choreo",
    quote: "Our ancient Indian postures possess immense strength. When fused with modern contemporary flow, every student finds their authentic voice."
  },
  {
    id: "kabir",
    name: "Kabir Joshi",
    role: "Director of Bollywood & Wedding Choreography",
    specialization: ["Bollywood Commercial", "Sangeet Direction", "Kids Academy"],
    bio: "The powerhouse behind Pune's most joyful Sangeet stages and packed Bollywood evening batches. Kabir specializes in breaking down complex beats into effortless, memorable steps that non-dancers and extended families can master in just 3 rehearsals.",
    sampleExperience: "Illustrative profile · Directed 80+ wedding choreographies · 6+ yrs leading high-energy batches",
    instagram: "@kabir.beats",
    quote: "If you can walk and clap in rhythm, I can get you owning the Sangeet stage with confidence. No hesitation allowed!"
  }
];

export const WEDDING_PACKAGES: WeddingPackage[] = [
  {
    id: "couple",
    title: "The Royal Couple Entry & First Dance",
    subtitle: "Magical, memorable romance designed for the bride & groom",
    duration: "4 to 6 Studio Sessions (1 Hour Each)",
    bestFor: "Bride & Groom who want an elegant, effortless first dance",
    samplePriceStarting: 12000,
    features: [
      "Custom audio mix of your chosen romantic tracks",
      "Tailored to your outfits (lehenga & sherwani weight testing)",
      "Entry choreography with dry run rehearsal",
      "Private studio sessions with complete privacy",
      "HD practice video recordings for home revision"
    ]
  },
  {
    id: "squad",
    title: "The Sangeet Squad & Friends Medley",
    subtitle: "High-octane dhamaka performance for bridesmaids & groomsmen",
    duration: "6 Studio Sessions + 1 Final Polishing Run",
    bestFor: "Cousins, college friends, bridesmaids & groomsmen (4–12 people)",
    samplePriceStarting: 18000,
    features: [
      "Energetic 4–6 minute multi-track blockbuster medley",
      "Formation shifts that look massive on banquet stages",
      "Step-by-step video tutorials sent via WhatsApp",
      "Props and entry choreography synchronization",
      "Fun, stress-free rehearsal environment in Baner"
    ]
  },
  {
    id: "grand",
    title: "The Grand Sangeet All-Inclusive",
    subtitle: "Complete wedding dance direction for the whole family",
    duration: "10 to 14 Flexible Sessions across 2–3 weeks",
    bestFor: "Full family celebrations (Couple, Parents, Grandparents & Squads)",
    samplePriceStarting: 32000,
    features: [
      "Entire event flow planning (5 to 7 separate song performances)",
      "Senior citizen & parents-friendly easy graceful choreography",
      "Grand finale family song where everyone dances together",
      "Dedicated choreographer on the day for backstage cueing",
      "Custom studio booking slots including late evenings & Sundays"
    ]
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "dropin",
    name: "Single Drop-in Class",
    tagline: "Experience the vibe before committing",
    priceInr: 600,
    billingPeriod: "per 75-min class",
    features: [
      "Access to any scheduled open batch",
      "Warmup, foundation & choreography breakdown",
      "Direct instructor feedback",
      "Full access to studio amenities & mirrors"
    ],
    ctaText: "Book Single Drop-in",
    note: "Sample demo price · Advance reservation recommended due to batch limits."
  },
  {
    id: "monthly",
    name: "Monthly Core Batch",
    tagline: "Build real rhythm, technique and stamina",
    priceInr: 2800,
    billingPeriod: "per month (8 classes)",
    isPopular: true,
    features: [
      "2 classes per week in your chosen dance style",
      "Progressive syllabus with full routine completion",
      "Dedicated video review of your performance",
      "1 Complimentary makeup class per month",
      "Priority registration for visiting masterclasses"
    ],
    ctaText: "Join Monthly Batch",
    note: "Sample demo price · Batch timings confirmed upon WhatsApp enquiry."
  },
  {
    id: "unlimited",
    name: "Unlimited Dance Pass",
    tagline: "For true enthusiasts & aspiring performers",
    priceInr: 5400,
    billingPeriod: "per month (unlimited open classes)",
    features: [
      "Access all open batches across Bollywood, Hip-Hop & Contemporary",
      "Attend up to 6 classes per week across styles",
      "Free access to weekend Cyphers & Freestyle labs",
      "Studio practice mirror slots during off-peak hours",
      "Exclusive Rhythm Republic community tee"
    ],
    ctaText: "Get Unlimited Pass",
    note: "Sample demo price · Ideal for college students and serious dancers."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Pooja Deshpande",
    batch: "Beginner Bollywood Fusion",
    duration: "Student for 6 Months · Baner Resident",
    quote: "I was convinced I had two left feet and felt so nervous walking into my first class. Kabir Sir broke down the steps with so much patience and joy. Six months later, I'm the first one on the dance floor at every family function!",
    rating: 5
  },
  {
    id: "t2",
    name: "Aditya Nair",
    batch: "Urban Hip-Hop Batches",
    duration: "Student for 1 Year · IT Professional, Hinjawadi",
    quote: "Working long desk hours in Hinjawadi IT park leaves you exhausted. Rhythm Republic's evening hip-hop batch became my therapy. The energy, the sound system, and Rohan's attention to real street foundations are world-class.",
    rating: 5
  },
  {
    id: "t3",
    name: "Neha & Siddharth Sharma",
    batch: "Wedding Sangeet Choreography",
    duration: "Sangeet Clients · Pune",
    quote: "We had only 3 weeks before our wedding and zero dance background. Kabir created a routine that looked so regal and natural. Our friends and relatives were cheering throughout. The video practice recordings saved us!",
    rating: 5
  },
  {
    id: "t4",
    name: "Tanvi Ranade (Parent)",
    batch: "Junior Street & Kids Academy",
    duration: "Mother of 8-year-old Aarav",
    quote: "The patience with which the instructors handle young children is wonderful. My son used to be quite shy in school. Dance has made him active, disciplined, and noticeably more confident during school presentations.",
    rating: 5
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "post-1",
    title: "Chaleya Hookstep Routine with Baner Batch",
    views: "142K views",
    likes: "8.4K",
    type: "Reel",
    music: "Chaleya · Jawan (Fusion Remix)",
    aspect: "9:16"
  },
  {
    id: "post-2",
    title: "Cypher Night: Rohan vs Street Crew",
    views: "98K views",
    likes: "6.1K",
    type: "Choreography",
    music: "Kendrick Lamar · DNA (Live Edit)",
    aspect: "9:16"
  },
  {
    id: "post-3",
    title: "Sangeet Couple Entry Rehearsal Highlights",
    views: "215K views",
    likes: "14.2K",
    type: "Behind The Scenes",
    music: "Kesariya · Acoustic Mashup",
    aspect: "9:16"
  },
  {
    id: "post-4",
    title: "Contemporary Floorwork Routine: Breath & Gravity",
    views: "76K views",
    likes: "4.8K",
    type: "Reel",
    music: "Ludovico Einaudi · Experience (Beat Flip)",
    aspect: "9:16"
  },
  {
    id: "post-5",
    title: "Junior Academy Kids Owning the Studio",
    views: "180K views",
    likes: "11.9K",
    type: "Workshop",
    music: "Taal Se Taal Mila · Street Choreo",
    aspect: "9:16"
  },
  {
    id: "post-6",
    title: "Friday Freestyle Circle: Never Danced Before? No Problem",
    views: "89K views",
    likes: "5.3K",
    type: "Reel",
    music: "Desi Hip Hop Medley · Bass Boosted",
    aspect: "9:16"
  }
];

export const GALLERY_ITEMS = [
  {
    id: "gal-1",
    title: "High-Energy Evening Bollywood Class",
    category: "Batches",
    tag: "Studio A · Baner",
    caption: "Students breaking down rhythm counting and dynamic hand gestures under studio ambient lighting."
  },
  {
    id: "gal-2",
    title: "Urban Hip-Hop Crew Formation",
    category: "Street",
    tag: "Choreography Lab",
    caption: "Tight synchronicity and sharp isolations practiced on our 2,400 sq.ft. sprung wooden floors."
  },
  {
    id: "gal-3",
    title: "The Royal Sangeet Rehearsal",
    category: "Weddings",
    tag: "Couples & Families",
    caption: "Bride and groom practicing their signature entry sequence with comfortable lehenga adjustments."
  },
  {
    id: "gal-4",
    title: "Contemporary Fluid Motion & Floor Sweep",
    category: "Contemporary",
    tag: "Masterclass",
    caption: "Exploring dynamic gravity release and expressive spine articulation."
  },
  {
    id: "gal-5",
    title: "Junior Academy Weekend Showcase",
    category: "Kids",
    tag: "Ages 6-12 Batch",
    caption: "Joy, rhythm, and big smiles as our junior dancers prepare for the mid-year studio showcase."
  },
  {
    id: "gal-6",
    title: "Semi-Classical Fusion Abhinaya",
    category: "Classical",
    tag: "Indian Fusion",
    caption: "Centuries of traditional mudras fused with emotive modern storytelling."
  }
];
