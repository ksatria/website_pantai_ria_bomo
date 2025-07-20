const layanan = [
  {
    title: "Paket Morning Regular",
    price: "Rp100.000",
    desc: "Paket wisata pagi hari.",
  },
  {
    title: "Paket Private Family Trip",
    price: "Rp350.000",
    desc: "Cocok untuk keluarga.",
  },
  { title: "Paket Culinary", price: "Rp80.000", desc: "Wisata kuliner lokal." },
];

export default function Layanan() {
  return (
    <section className="py-10 bg-gray-50">
      <h2 className="text-2xl font-semibold text-center mb-6">Layanan</h2>
      <div className="grid md:grid-cols-3 gap-6 px-4">
        {layanan.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <img
              src="/images/layanan-1.jpg"
              alt=""
              className="rounded mb-4 h-32 object-cover mx-auto"
            />
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-orange-600 font-semibold">{item.price}</p>
            <p className="text-sm mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
