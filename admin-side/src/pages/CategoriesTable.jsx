import { useEffect, useState } from "react";
import ModalAddCategory from "../components/ModalAddCategory";
import useFetch from "../hooks/useFetch";

export default function ItemsTable() {
  const [open, setOpen] = useState(false);

  const categories = useFetch("categories");

  return (
    <div className="ml-64 px-4 py-6">
      <div className="mx-auto pb-8 w-full max-w-7xl overflow-x-auto">
        <div>
          <div className="flex flex-row justify-between">
            <h1 className="text-xl font-semibold">Categories</h1>
            <button
              onClick={() => setOpen(true)}
              className="mb-5 px-6 py-2 rounded-lg bg-primary-yellow text-white hover:bg-yellow-600"
            >
              Add Category
            </button>
          </div>
        </div>
        <ModalAddCategory open={open} onClose={() => setOpen(false)} />
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
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {categories &&
              categories.map((e, i) => {
                return (
                  <tr key={e.id}>
                    <td className="py-3 px-4 text-sm font-medium">{++i}</td>
                    <td className="py-3 px-4 text-sm font-medium">{e.name}</td>
                    <td className="py-3 px-4 text-sm font-medium">
                      <a className="cursor-pointer text-red-500">Delete</a>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
