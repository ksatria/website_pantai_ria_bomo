import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Fasilitas from "@/components/Fasilitas";
import Galeri from "@/components/Galeri";
import Layanan from "@/components/Layanan";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <Fasilitas />
      <Galeri />
      <Layanan />
      <Footer />
    </main>
  );
}
