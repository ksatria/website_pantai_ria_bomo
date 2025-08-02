import { fasilitas_translations } from "@/utils/fasilitas_translations";

export default function Fasilitas({ language = "id" }) {
  const fasilitas = fasilitas_translations[language];

  return (
    <section id="fasilitas" className="py-10 scroll-smooth">
      <h2 className="text-3xl font-semibold ml-4 md:ml-34 py-10 mb-6">
        {language === "en" ? "Facilities" : "Fasilitas"}
      </h2>
      <div className="grid grid-cols-2 px-4 md:px-34 md:grid-cols-4 gap-8 justify-center">
        {fasilitas.map((item, index) => (
          <div key={index} className="flex flex-col">
            <img src={item.icon} alt={item.name} className="w-12 h-12" />
            <p className="mt-2">{item.name}</p>
            <p className="mt-2 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
