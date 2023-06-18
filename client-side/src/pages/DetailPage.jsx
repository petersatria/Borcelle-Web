import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchItem } from "../store/actionCreator";
import LoadingSpinner from "../components/LoadingSpinner";

export default function DetailPage() {
  const dispatch = useDispatch();
  const { item, isLoading } = useSelector((state) => {
    return state;
  });
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchItem(id));
  }, []);
  return (
    <div
      className={`max-w-screen-xl mx-auto my-10 ${
        isLoading ? "bg-black/10 h-screen my-0" : ""
      }`}
    >
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <h1 className="text-center text-2xl font-medium underline underline-offset-1 decoration-primary-yellow">
            {item?.name}
          </h1>
          <div className="flex flex-row mt-5">
            <img
              src={item?.imgUrl}
              alt=""
              className="w-3/6 object-cover max-h-96"
            />
            <div className="px-4">
              <h2 className="text-xl font-semibold text-primary-yellow">
                {item?.Category.name}
              </h2>
              <p className="tracking-wider mt-5">IDR {item?.price}</p>
              <p className="tracking-wider mt-2">{item?.description}</p>
              <p className="tracking-wider mt-5">Ingredients</p>
              <ol className="mt-2">
                {item &&
                  item?.Ingredients.map((e, i) => (
                    <li key={e.id}>
                      {++i}. {e.name}
                    </li>
                  ))}
              </ol>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
