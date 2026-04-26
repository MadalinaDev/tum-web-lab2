import Hero from "@/components/sections/Hero";
import Despre from "@/components/sections/Despre";
import Servicii from "@/components/sections/Servicii";
import Pregatire from "@/components/sections/Pregatire";
import Dictie from "@/components/sections/Dictie";
import Testimoniale from "@/components/sections/Testimoniale";
import Tarife from "@/components/sections/Tarife";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";

import hero from "@/_data/hero.json";
import despre from "@/_data/despre.json";
import servicii from "@/_data/servicii.json";
import pregatire from "@/_data/pregatire.json";
import dictie from "@/_data/dictie.json";
import testimoniale from "@/_data/testimoniale.json";
import tarife from "@/_data/tarife.json";
import faq from "@/_data/faq.json";
import contact from "@/_data/contact.json";

export default function Home() {
  return (
    <>
      <Hero data={hero} />
      <Despre data={despre} />
      <Servicii data={servicii} />
      <Pregatire data={pregatire} />
      <Dictie data={dictie} />
      <Testimoniale data={testimoniale} />
      <Tarife data={tarife} />
      <Faq data={faq} />
      <Contact data={contact} />
    </>
  );
}
