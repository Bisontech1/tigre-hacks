'use client';

import Hero from './components/landing/Hero'
import Nav from './components/landing/Nav'
import { Inter } from 'next/font/google'
import 'leaflet/dist/leaflet.css';
import Head from 'next/head';


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
    </>
  )
}
