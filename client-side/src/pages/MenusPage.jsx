import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  fetchItems,
  filterItem,
} from "../store/actionCreator";
import LoadingSpinner from "../components/LoadingSpinner";
export default function MenusPage() {
  const dispatch = useDispatch();
  const { items, isLoading, categories, filteredItems } = useSelector(
    (state) => state
  );

  useEffect(() => {
    dispatch(fetchItems());
    dispatch(fetchCategories());
  }, []);

  const handleClick = (id) => {
    dispatch(filterItem(id, items));
  };

  return (
    <div
      className={`max-w-screen-xl mx-auto my-10 ${
        isLoading ? "bg-black/10 h-screen my-0 transition-colors" : ""
      }`}
    >
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="flex justify-around items-center mt-5">
            <div>
              <h1 className="text-7xl text-primary-yellow mb-5">Our menu</h1>{" "}
              <p className="tracking-wider text-lg">
                Check our menu and make a reservation
              </p>
            </div>
            <img
              src="https://cdn.upmenu.com/static/themes/ef8ba596-4579-11ed-8bca-525400080621/assets-4/generic5.jpg?v=8"
              alt=""
              style={{ width: 400, borderRadius: "80px 0px 80px 0px" }}
            />
          </div>
          <div className="flex flex-wrap justify-center mt-10">
            <button
              onClick={() => handleClick()}
              className="py-2 px-4 bg-[rgba(210,165,86,0.15)] mr-2  hover:bg-primary-yellow transition ease-in-out delay-150"
            >
              All
            </button>
            {categories &&
              categories.map((e) => (
                <button
                  key={e.id}
                  className="py-2 px-4 bg-[rgba(210,165,86,0.15)] mr-2  hover:bg-primary-yellow"
                  value={e.id}
                  onClick={() => handleClick(e.id)}
                >
                  {e.name}
                </button>
              ))}
          </div>
          <div className="flex flex-wrap justify-center mt-10">
            {filteredItems &&
              filteredItems.map((e) => {
                return <Card key={e.id} item={e} />;
              })}
          </div>
        </>
      )}
    </div>
  );
}
