import Image from "next/image";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Info from '../components/InfoBox';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Info />
    </main>
  );
}
