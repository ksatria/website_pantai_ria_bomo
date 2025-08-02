import { FaPhoneVolume } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="bg-white pt-30 px-4 md:px-34 scroll-smooth">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-[#1E1B4B] mb-2">
            Temukan Ketenangan di Pantai Ria Bomo
          </h1>
          <p className="text-sm md:text-lg text-gray-600">
            Surga Tersembunyi untuk Liburan Istimewa Anda – Ciptakan Kenangan
            Tak Terlupakan di Tepi Pantai.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold text-[#1E1B4B] mb-4">
              Pantai Ria Bomo: Surga Tersembunyi di Pesisir Banyuwangi
            </h2>
            <p className=" text-sm md:text-lg text-gray-700 mb-8 pr-4">
              Pantai Ria Bomo, sebuah permata tersembunyi di ujung timur Jawa,
              menghadirkan keindahan alam yang masih asri dan ketenangan yang
              memikat. Berlokasi di Desa Bomo, Kecamatan Blimbingsari, Kabupaten
              Banyuwangi, pantai ini menawarkan pengalaman liburan yang berbeda
              dari biasanya. Menjadi destinasi yang ideal untuk menyambut momen
              spesial, Pantai Ria Bomo adalah tempat yang sempurna untuk
              menikmati waktu bersama keluarga dan orang terdekat. Rasakan
              sensasi ngabuburit dengan pemandangan matahari terbenam yang
              memukau, atau nikmati kebersamaan saat halal bihalal di bawah
              langit senja. Berbagai kuliner khas lokal juga siap memanjakan
              lidah Anda.
            </p>
            {/* <div className="flex items-center gap-4 mt-6">
              <img
                src="/images/pokdarwis.png"
                alt="pokdarwis pantai kelapa"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <div className="font-bold text-[#FBBF24] text-lg">
                  pokdarwis pantai bomo
                </div>
                <div className="text-gray-600 text-sm">Contact person</div>
              </div>
            </div> */}
          </div>
          <div className="bg-[#F9FAFB] border border-[#FBBF24] rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#FBBF24] mb-4">
              Jadwal Mingguan
            </h3>
            <ul className="divide-y divide-gray-300 mb-6">
              {[
                "Senin",
                "Selasa",
                "Rabu",
                "Kamis",
                "Jumat",
                "Sabtu",
                "Minggu",
              ].map((hari) => (
                <li
                  key={hari}
                  className="flex justify-between text-sm xl:text-lg py-2 text-gray-700"
                >
                  <span>{hari}</span>
                  <span>8:00am–5:00pm</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 mt-4">
              <FaPhoneVolume className=" text-lg xl:text-4xl" />
              <div className="pl-2">
                <span className="text-gray-700 text-sm xl:text-lg font-medium">
                  Telepon Sekarang
                </span>
                <div className="text-[#FBBF24] font-bold text-sm xl:text-lg">
                  (+62) 812-1635-7836
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
