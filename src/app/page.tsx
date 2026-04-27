import Hero from "@/components/sections/Hero";
import Despre from "@/components/sections/Despre";
import Servicii from "@/components/sections/Servicii";
import Pregatire from "@/components/sections/Pregatire";
import Dictie from "@/components/sections/Dictie";
import Testimoniale from "@/components/sections/Testimoniale";
import Tarife from "@/components/sections/Tarife";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Despre />
      <Servicii />
      <Pregatire />
      <Dictie />
      <Testimoniale />
      <Tarife />
      <Faq />
      <Contact />
    </>
  );
}
