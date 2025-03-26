import Image from "next/image";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Info from '../components/InfoBox';
import Trust from '../components/TrustBox';
import FastBox from '../components/FastBox';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Info />
      <Trust />
      <FastBox />

    </main>
  );
}
