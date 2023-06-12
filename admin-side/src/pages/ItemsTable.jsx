import { useEffect, useState } from "react";
import axios from "axios";
import ModalAddItem from "../components/ModalAddItem";

export default function ItemsTable() {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);

  const fetchItems = async () => {
    try {
      const { data } = await axios({
        url: "http://localhost:3000/items?_embed=ingredients&_expand=category&_expand=user",
      });
      setItems(() => data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="ml-64 px-4 py-6">
      <div className="mx-auto pb-8 w-full max-w-7xl overflow-x-auto">
        <div>
          <div className="flex flex-row justify-between">
            <h1 className="text-xl font-semibold">Items</h1>
            <button
              onClick={() => setOpen(true)}
              className="mb-5 px-6 py-2 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600"
            >
              Add Item
            </button>
          </div>
        </div>
        <ModalAddItem open={open} onClose={() => setOpen(false)} />
        <table className="px-4 min-w-full rounded-md border border-gray-200 overflow-hidden">
          <thead className="min-w-full bg-gray-100 text-left text-gray-700">
            <tr>
              <th className="py-3 px-4 text-base font-medium tracking-wide">
                No
              </th>
              <th className="py-3 px-4 text-base font-medium tracking-wide">
                Name
              </th>
              <th className="py-3 px-4 text-base font-medium tracking-wide">
                Description
              </th>
              <th className="py-3 px-4 text-base font-medium tracking-wide">
                Price
              </th>
              <th className="py-3 px-4 text-base font-medium tracking-wide">
                Image Url
              </th>
              <th className="py-3 px-4 text-base font-medium tracking-wide">
                Category
              </th>
              <th className="py-3 px-4 text-base font-medium tracking-wide">
                Ingredients
              </th>
              <th className="py-3 px-4 text-base font-medium tracking-wide">
                Author
              </th>
            </tr>
          </thead>
          <tbody>
            {items &&
              items.map((item, index) => (
                <tr
                  key={item.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                  } whitespace-nowrap`}
                >
                  <td className="py-3 px-4 text-sm font-medium">{++index}</td>
                  <td className="py-3 px-4 text-sm font-medium">{item.name}</td>
                  <td className="py-3 px-4 text-sm font-medium">
                    {item.description}
                  </td>
                  <td className="py-3 px-4 text-sm font-medium">
                    {item.price}
                  </td>
                  <td>
                    <img
                      src={item.imgUrl}
                      alt="img_item"
                      width="250"
                      height="100px"
                    />
                  </td>
                  <td className="py-3 px-4 text-sm font-medium">
                    {item.category.name}
                  </td>
                  <td className="py-3 px-4 text-sm font-medium">
                    <ol>
                      {item.ingredients.map((e, i) => {
                        return (
                          <li key={e.id}>
                            {++i}. {e.name}
                          </li>
                        );
                      })}
                    </ol>
                  </td>
                  <td className="py-3 px-4 text-sm font-medium">
                    {item.user.username}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
