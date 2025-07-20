const galeri = [
  "/images/galeri-1.jpg",
  "/images/galeri-2.jpg",
  "/images/galeri-3.jpg",
];

export default function Galeri() {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Galeri</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4">
        {galeri.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Galeri ${idx}`}
            className="rounded-lg object-cover w-full h-48"
          />
        ))}
      </div>
    </section>
  );
}
