import { about_translations } from "@/utils/about_translations";
import { FaPhoneVolume } from "react-icons/fa";
export default function About({ language = "id" }) {
  const t = about_translations[language];
  return (
    <section id="about" className="bg-white pt-30 px-4 md:px-34 scroll-smooth">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-[#1E1B4B] mb-2">
            {t.heading}
          </h1>
          <p className="text-sm md:text-lg text-gray-600">{t.subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold text-[#1E1B4B] mb-4">
              {t.descHeading}
            </h2>
            <p className=" text-sm md:text-lg text-gray-700 mb-8 pr-4">
              {t.desc}
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
              {t.schedule}
            </h3>
            <ul className="divide-y divide-gray-300 mb-6">
              {about_translations[language].days.map((day) => (
                <li
                  key={day}
                  className="flex justify-between text-sm xl:text-lg py-2 text-gray-700"
                >
                  <span>{day}</span>
                  <span>8:00am–5:00pm</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 mt-4">
              <FaPhoneVolume className=" text-lg xl:text-4xl" />
              <div className="pl-2">
                <span className="text-gray-700 text-sm xl:text-lg font-medium">
                  {t.callNow}:
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
