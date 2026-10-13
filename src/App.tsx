/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { DanceStyles } from './components/DanceStyles';
import { WeddingChoreography } from './components/WeddingChoreography';
import { Timetable } from './components/Timetable';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { Instructors } from './components/Instructors';
import { Pricing } from './components/Pricing';
import { InstagramFeed } from './components/InstagramFeed';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { TrialModal } from './components/TrialModal';

export default function App() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f7] selection:bg-pink-500/30 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenTrialModal={() => setIsTrialModalOpen(true)} />

      <main>
        {/* Hero Section */}
        <Hero onOpenTrialModal={() => setIsTrialModalOpen(true)} />

        {/* About Section */}
        <About />

        {/* Dance Styles Showcase */}
        <DanceStyles />

        {/* Dedicated Indian Wedding & Sangeet Section */}
        <WeddingChoreography />

        {/* Classes & Timetable */}
        <Timetable />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Media Showcase & Gallery with Lightbox */}
        <Gallery />

        {/* Instructors & Mentors */}
        <Instructors />

        {/* Transparent Pricing & Memberships */}
        <Pricing onOpenTrialModal={() => setIsTrialModalOpen(true)} />

        {/* Social Media & Instagram Experience */}
        <InstagramFeed />

        {/* Student Testimonials Carousel */}
        <Testimonials />

        {/* Lead Capture & Baner Studio Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Interactive Trial Class Booking Modal */}
      <TrialModal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
      />
    </div>
  );
}
