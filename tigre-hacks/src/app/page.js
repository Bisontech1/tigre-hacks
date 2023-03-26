'use client';

import Hero from './components/landing/Hero'
import Nav from './components/landing/Nav'
import What from './components/landing/What'
import Characteristics from './components/landing/Characteristics';
import Why from './components/landing/Why';
import Everybody from './components/landing/Everybody';
import Sponsors from './components/landing/Sponsors';
import Faq from './components/landing/Faq';
import Contact from './components/landing/Contact';
import Footer from './components/landing/Footer';

import 'leaflet/dist/leaflet.css';

import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(() => import('./components/landing/Map'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <MapWithNoSSR />
      <What />
      <Characteristics />
      <Why />
      <Everybody />
      <Sponsors />
      <Faq />
      <Contact/>
      <Footer/>
    </>
  )
}
