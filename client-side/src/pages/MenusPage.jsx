import { useEffect } from "react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../store/actionCreator";
import LoadingSpinner from "../components/LoadingSpinner";
export default function MenusPage() {
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

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
            {items &&
              items.map((e) => {
                return <Card key={e.id} item={e} />;
              })}
          </div>
        </>
      )}
    </div>
  );
}
