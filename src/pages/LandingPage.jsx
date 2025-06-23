// src/pages/LandingPage.jsx
import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ChatWidget from "../components/chat/ChatWidget";

import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import HowItWorks from "../components/landing/HowItWorks";
import AssistantPreview from "../components/landing/AssistantPreview"; // optional

import "../styles/LandingPage.css"; // optional scoped styles

export default function LandingPage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <HeroSection />
        <FeaturesSection />
        <HowItWorks />
        <AssistantPreview /> {/* optional */}
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
