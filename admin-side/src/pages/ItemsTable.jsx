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
export default function ItemsTable() {
  const [open, setOpen] = useState(false);
  const [itemEdit, setItemEdit] = useState();

  const dispatch = useDispatch();
  const { items, item } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  useEffect(() => {
    if (item) {
      setItemEdit(item);
    }
  }, [item]);

  const handleDelete = async (id) => {
    try {
      dispatch(deleteItem(id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = async (id) => {
    try {
      dispatch(fetchItem(id));
      setOpen(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="ml-64 px-10 py-6">
      <div className="mx-auto pb-8 w-full overflow-x-auto">
        <div>
          <div className="flex flex-row justify-between">
            <h1 className="text-xl font-semibold">Items</h1>
            <button
              onClick={() => setOpen(true)}
              className="mb-5 p-2 rounded-lg bg-primary-yellow text-white hover:bg-yellow-600 flex"
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
              <th className="py-3 px-4 text-base font-medium tracking-wide">
                Action
              </th>
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
      </div>
    </div>
  );
}
