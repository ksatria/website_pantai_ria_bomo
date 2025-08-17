export default function CardItem({ image, title, desc }) {
  return (
    <div className="max-w-sm h-full md:min-h-[410px] bg-white border border-gray-200 rounded-lg shadow-sm ">
      <img
        className="rounded-t-lg w-full h-full object-cover"
        src={image}
        alt=""
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl md:text-lg xl:text-2xl font-bold tracking-tight text-gray-900 ">
          {title}
        </h5>
        <p className="mb-3 font-normal text-base md:text-sm text-gray-700 ">
          {desc}
        </p>
      </div>
    </div>
  );
}
