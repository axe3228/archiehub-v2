"use client";

import { useEffect, useState } from "react";
import Header from "@/components/header";
import ContentWrapper from "@/components/content-wrapper";

const Home = () => {
  const [activeSection, setActiveSection] = useState<number>(0);

  useEffect(() => {
    const hash = window.location.hash; // Gets the hash part of the URL

    if (hash) {
      const element = document.querySelector(hash);
      element?.scrollIntoView({ behavior: "smooth" });

      switch (hash) {
        case '#about':
          setActiveSection(0);
        break;
        case '#experience':
          setActiveSection(1);
        break;
        case '#projects':
          setActiveSection(2);
        break;
      }
    }

    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-4 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="min-h-screen lg:flex lg:justify-between lg:gap-4">
        <Header activeSection={activeSection}/>
        <ContentWrapper />
      </div>
    </div>
  );
};

export default Home;
