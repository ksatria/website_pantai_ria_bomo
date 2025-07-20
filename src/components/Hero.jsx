export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-smooth bg-center  bg-no-repeat bg-[url('/images/hero.png')] bg-cover md:h-screen"
    >
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Temukan Kembali <br /> Ketenangan Anda di Sini
        </h1>
        <p className="mb-8 text-sm font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Jauh dari hiruk pikuk kota, nikmati kesejukan di bawah pohon cemara
          dan debur ombak yang menenangkan jiwa.
        </p>
        <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#"
            className="w-fit inline-flex justify-center items-center px-3 text-xs py-3 sm:px-5 sm:text-base font-medium text-center text-white rounded-lg bg-[#D35F1C] hover:bg-[#BC4F10]focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Temukan Kedamaian Anda
          </a>
        </div>
      </div>
    </section>
  );
}
