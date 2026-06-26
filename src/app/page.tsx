import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Tarifs from "@/components/Tarifs";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Tarifs />
      </main>
      <Footer />
    </>
  );
}
