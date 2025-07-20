const galeri = [
  "/images/galeri-1.jpg",
  "/images/galeri-2.jpg",
  "/images/galeri-3.jpg",
];
import Image from "next/image";

export default function Galeri() {
  return (
    <section id="galeri" className="py-10 scroll-smooth">
      <h2 className="text-3xl font-semibold ml-4 md:ml-34  mb-6">Galeri</h2>
      <div className="grid md:px-34 px-4 md:grid-cols-4 gap-4">
        <div className="relative col-span-1">
          <img
            src="/images/fasilitas/mushola.HEIC"
            className="rounded-xl w-full h-full object-cover"
          />
          <p className="absolute bottom-2 left-2 text-white text-smx px-2 py-1 rounded">
            Mushola
          </p>
        </div>

        <div className="relative col-span-2 row-span-2">
          <img
            src="/images/fasilitas/pendopo.HEIC"
            className="rounded-xl w-full h-full object-cover"
          />
          <p className="absolute bottom-2 left-2 text-white text-smx px-2 py-1 rounded">
            Pendopo
          </p>
        </div>

        <div className="relative col-span-1 row-span-2">
          <img
            src="/images/fasilitas/kamar mandi.HEIC"
            className="rounded-xl w-full h-full object-cover"
          />
          <p className="absolute bottom-2 left-2 text-white text-smx px-2 py-1 rounded">
            Kamar Mandi
          </p>
        </div>

        <div className="relative col-span-1 row-span-2">
          <img
            src="/images/fasilitas/pos pantau.HEIC"
            className="rounded-xl w-full h-full object-cover"
          />
          <p className="absolute bottom-2 left-2 text-white text-smx px-2 py-1 rounded">
            Pos Pantau
          </p>
        </div>

        <div className="relative">
          <img
            src="/images/fasilitas/kantor sekretariat.HEIC"
            className="rounded-xl w-full h-full object-cover"
          />
          <p className="absolute bottom-2 left-2 text-white text-smx px-2 py-1 rounded">
            Kantor Sekretariat
          </p>
        </div>

        <div className="relative">
          <img
            src="/images/fasilitas/kantin.HEIC"
            className="rounded-xl w-full h-full object-cover"
          />
          <p className="absolute bottom-2 left-2 text-white text-smx px-2 py-1 rounded">
            Kantin
          </p>
        </div>

        <div className="relative md:col-span-1 row-start-1 ">
          <img
            src="/images/fasilitas/parkir.HEIC"
            className="rounded-xl w-full h-full object-cover"
          />
          <p className="absolute bottom-2 left-2 text-white text-smx px-2 py-1 rounded">
            Tempat Parkir
          </p>
        </div>
      </div>
    </section>
  );
}
