"use client";
import React from "react";
import Hero from "./components/landing/Hero";
import Nav from "./components/landing/Nav";
import What from "./components/landing/What";
import Characteristics from "./components/landing/Characteristics";
import Why from "./components/landing/Why";
import Everybody from "./components/landing/Everybody";
import Sponsors from "./components/landing/Sponsors";
import Faq from "./components/landing/Faq";
import Contact from "./components/landing/Contact";
import Footer from "./components/landing/Footer";
import { Inter } from "next/font/google";
import "leaflet/dist/leaflet.css";

import dynamic from "next/dynamic";
import { translationService } from "./utils/translations";

const MapWithNoSSR = dynamic(() => import("./components/landing/Map"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export const TranslationContext = React.createContext();

export default function Home() {
  const [language, setLanguage] = React.useState(translationService.language);

  const changeLanguage = async (language) => {
    await translationService.changeLanguage(language);
    setLanguage(translationService.language);
  };

  const loadLanguage = async () => {
    await translationService.loadLanguage();
    changeLanguage(translationService.language);
  };

  React.useEffect(() => {
    loadLanguage();
  });

  return (
    <TranslationContext.Provider value={language}>
      <style jsx global>{`
        * {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>

      <Nav
        changeLanguage={(language) => {
          changeLanguage(language);
        }}
      />
      <Hero />
      <MapWithNoSSR />
      <What />
      <Characteristics />
      <Why />
      <Everybody />
      <Sponsors />
      <Faq />
      <Contact />
      <Footer />
    </TranslationContext.Provider>
  );
}
