import { galeri_translations } from "@/utils/galeri_translations";

const galeriImages = [
  "/images/fasilitas/mushola.jpg",
  "/images/fasilitas/pendopo.jpg",
  "/images/fasilitas/kamar mandi.jpg",
  "/images/fasilitas/pos pantau.jpg",
  "/images/fasilitas/kantor sekretariat.jpg",
  "/images/fasilitas/kantin.jpg",
  "/images/fasilitas/parkir.jpg",
];

export default function Galeri({ language = "id" }) {
  const t = galeri_translations[language];

  return (
    <section id="galeri" className="py-10 scroll-smooth">
      <h2 className="text-3xl font-semibold ml-4 md:ml-34 mb-6">{t.title}</h2>
      <div className="grid md:px-34 px-4 md:grid-cols-4 gap-4">
        {galeriImages.map((img, idx) => (
          <div
            key={img}
            className={`relative ${
              idx === 1
                ? "col-span-2 row-span-2"
                : idx === 2 || idx === 3
                ? "col-span-1 row-span-2"
                : idx === 6
                ? "md:col-span-1 row-start-1"
                : ""
            }`}
          >
            <img
              src={img}
              className="rounded-xl w-full h-full object-cover"
              alt={t.items[idx].label}
            />
            <p className="absolute bottom-2 left-2 text-white text-smx px-2 py-1 rounded">
              {t.items[idx].label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
