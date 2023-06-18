import { useEffect, useState } from "react";
import ModalAddItem from "../components/ModalAddItem";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItem,
  fetchItem,
  fetchItems,
} from "../store/actions/itemsAction";
import { RiAddLine } from "react-icons/ri";
import RowTable from "../components/RowTable";
import TableHead from "../components/TableHead";
import LoadingSpinner from "../components/LoadingSpinner";
import { Toaster } from "react-hot-toast";
export default function ItemsTable() {
  const [open, setOpen] = useState(false);
  const [itemEdit, setItemEdit] = useState();

  const dispatch = useDispatch();
  const { items, item, isLoading } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  useEffect(() => {
    if (item) {
      setItemEdit(item);
    }
  }, [item]);

  const handleDelete = async (id) => {
    dispatch(deleteItem(id));
  };

  const handleEdit = async (id) => {
    dispatch(fetchItem(id));
    setOpen(true);
  };

  return (
    <div className={`ml-64 px-10 py-6 ${isLoading ? "bg-black/20" : ""}`}>
      <div
        className={`mx-auto pb-8 w-full overflow-x-auto ${
          isLoading ? `h-screen relative` : ""
        }`}
      >
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <div>
              <div className="flex flex-row justify-between">
                <h1 className="text-xl font-semibold">Items</h1>
                <button
                  onClick={() => setOpen(true)}
                  className="mb-5 p-2 rounded-lg bg-primary-yellow text-white hover:bg-yellow-600 flex absolute right-10"
                >
                  <RiAddLine className="self-center text-xl mr-2" />
                  Add Item
                </button>
              </div>
            </div>
            <ModalAddItem
              open={open}
              onClose={() => setOpen(false)}
              itemEdit={itemEdit}
            />
            <table className="px-4 min-w-full rounded-md border border-gray-200 overflow-hidden mt-10">
              <thead className="min-w-full bg-gray-100 text-left text-gray-700">
                <tr>
                  {[
                    "No",
                    "Name",
                    "Description",
                    "Price",
                    "Image Url",
                    "Category",
                    "Ingredients",
                    "Author",
                    "Action",
                  ].map((e, i) => (
                    <TableHead title={e} key={i} />
                  ))}
                </tr>
              </thead>
              <tbody>
                {items &&
                  items.map((item, index) => (
                    <RowTable
                      key={item.id}
                      item={item}
                      index={index}
                      handleDelete={handleDelete}
                      handleEdit={handleEdit}
                    />
                  ))}
              </tbody>
            </table>
          </>
        )}
        <Toaster position="bottom-right" />
      </div>
    </div>
  );
}
