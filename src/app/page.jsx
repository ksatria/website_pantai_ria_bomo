import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Fasilitas from "@/components/Fasilitas";
import Galeri from "@/components/Galeri";
import Layanan from "@/components/Layanan";
import Footer from "@/components/Footer";
// import Contact from "@/components/Contact";
import About from "@/components/About";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Fasilitas />
      <Galeri />
      <Layanan />
      {/* <Contact /> */}
      <Footer />
    </main>
  );
}
