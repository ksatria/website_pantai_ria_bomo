import React from "react";

const struktur = [
  {
    jabatan: "Penasehat/Pelindung",
    nama: "Kepala Desa Bomo",
    bawahan: [
      {
        jabatan: "Ketua",
        nama: "A'an Mutowib",
        bawahan: [
          {
            jabatan: "Sekertaris 1",
            nama: "Mochamad Yusuf",
            bawahan: [
              {
                jabatan: "Sekeretaris 2",
                nama: "Miftahul Huda",
              },
            ],
          },
          {
            jabatan: "Bendahara 1",
            nama: "Nuryanto",
            bawahan: [
              {
                jabatan: "Bendahara 2",
                nama: "Maseno",
              },
            ],
          },
        ],
      },
    ],
  },
];

function Card({ jabatan, nama }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 text-center w-60 mx-auto">
      <h3 className="text-xl font-bold">{jabatan}</h3>
      <p className="text-gray-600">{nama}</p>
    </div>
  );
}

function renderStruktur(data) {
  return (
    <div className="flex flex-col items-center space-y-6">
      <Card jabatan={data.jabatan} nama={data.nama} />
      {data.bawahan && (
        <div className="flex flex-wrap justify-center gap-10">
          {data.bawahan.map((b, i) => (
            <div key={`${b.jabatan}-${i}`}>{renderStruktur(b)}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function StrukturOrganisasi() {
  return (
    <section className="min-h-screen bg-gradient-to-b mt-10 from-[#ff9c63] to-white p-10">
      <h1 className="text-4xl text-white font-bold text-center mb-10">
        Susunan Pengurus POKMASWAS
      </h1>
      {renderStruktur(struktur[0])}
    </section>
  );
}
