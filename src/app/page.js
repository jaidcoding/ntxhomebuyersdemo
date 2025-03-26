import Image from "next/image";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Info from '../components/InfoBox';
import Trust from '../components/TrustBox';
import FastBox from '../components/FastBox';
import Troubles from '../components/Troubles';
import Reviews from '../components/Reviews';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Info />
      <Trust />
      <FastBox />
      <Troubles />
      <Reviews />
    </main>
  );
}
