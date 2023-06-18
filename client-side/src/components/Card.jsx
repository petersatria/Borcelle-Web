import { Link } from "react-router-dom";

export default function Card({ item }) {
  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 h-48 mt-5 mr-5">
      <img
        className="object-cover w-full h-48 md:w-48"
        src={item.imgUrl}
        alt="img_items"
      />
      <div className="flex flex-col p-4 leading-normal h-48 w-96 md:max-w-xl justify-around">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          {item.name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {item.description}
        </p>
        <Link to={"/menus/" + item.id} className="self-end">
          <button className="py-2 px-4 bg-primary-yellow rounded-sm text-white hover:bg-yellow-600">
            Detail{" "}
          </button>
        </Link>
      </div>
    </div>
  );
}
