'use client';

import Hero from './components/landing/Hero'
import Nav from './components/landing/Nav'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import 'leaflet/dist/leaflet.css';
import { useClient } from 'next/client';

const inter = Inter({ subsets: ['latin'] })
import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(() => import('./components/landing/Map'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Nav/>
      <Hero/>
      <MapWithNoSSR/>
    </>
  )
}
