"use client";  // <-- add this at the very top

import { useState } from "react";
import Aside from "@/components/Aside";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="flex">
      <Aside onNavigate={setActiveSection} active={activeSection} />
      <main className="flex-1 p-6 ml-64 space-y-20">
        {activeSection === "home" && <HeroSection />}
        {activeSection === "about" && <AboutSection />}
        {activeSection === "contact" && <ContactSection />}
        <ThemeSwitcher />
      </main>
    </div>
  );
}
