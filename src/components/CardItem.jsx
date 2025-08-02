export default function CardItem({ image, title, desc, tag }) {
  return (
    <div className="max-w-sm h-120 md:h-100 xl:h-120 bg-white border border-gray-200 rounded-lg shadow-sm ">
      <a href="#">
        <img
          className="rounded-t-lg w-full h-70 md:h-50 xl:h-70 object-cover"
          src={image}
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 ">{desc}</p>
      </div>
    </div>
  );
}
