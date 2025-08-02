const fasilitas = [
  {
    name: "MUSHOLA",
    icon: "/icons/mushola icon.png",
    description:
      "Tempat Ibadah yang nyaman dan bersih, dilengkapi sajadah, mukenah dan tempat wudhu.",
  },
  {
    name: "TOILET",
    icon: "/icons/toilet icon.png",
    description:
      "Nikmati kamar mandi yang bersih dan segar, cocok untuk membilas diri setelah bermain di pantai. ",
  },
  {
    name: "TEMPAT MAKAN",
    icon: "/icons/tempat makan icon.png",
    description:
      "Berbagai pilihan kuliner lezat untuk pengalaman bersantap yang menyenangkan ",
  },
  {
    name: "TEMPAT PARKIR",
    icon: "/icons/tempat parkir icon.png",
    description:
      "Area parkir yang luas dan aman untuk kendaraan roda dua maupun roda 4.",
  },
];

export default function Fasilitas() {
  return (
    <section id="fasilitas" className="py-10 scroll-smooth">
      <h2 className="text-3xl font-semibold ml-4 md:ml-34 py-10 mb-6">
        Fasilitas
      </h2>
      <div className="grid grid-cols-2 px-4 md:px-34 md:grid-cols-4 gap-8 justify-center">
        {fasilitas.map((item, index) => (
          <div key={index} className="flex flex-col  ">
            <img src={item.icon} alt={item.name} className="w-12 h-12" />
            <p className="mt-2">{item.name}</p>
            <p className="mt-2 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
