import { useEffect, useState } from "react";
import axios from "axios";

export default function ModalAddItem({ open, onClose }) {
  const [input, setInput] = useState([]);
  const [item, setItem] = useState({
    name: "",
    description: "",
    price: 0,
    imgUrl: "",
    userId: 1,
    categoryId: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  const [ingredients, setIngredients] = useState({});
  const [categories, setCategories] = useState([]);

  const handleAddInput = (e) => {
    e.preventDefault();
    const newInput = [...input, []];
    setInput(newInput);
  };

  const handleValueChange = (e, i) => {
    const inputValue = [...input];
    inputValue[i] = e.target.value;
    setInput(inputValue);
  };

  const handleDeleteINput = (e, i) => {
    e.preventDefault();
    const deleteInput = [...input];
    deleteInput.splice(i, 1);
    setInput(deleteInput);
  };

  const handleOnChangeForm = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(item);
  };

  const fetchCategories = async () => {
    try {
      const { data } = await axios({
        url: "http://localhost:3000/categories",
      });
      setCategories(() => data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl shadow p-6 transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <div className="flex justify-between">
          <h1>Create new item</h1>
          <button
            onClick={onClose}
            className="text-gray-400 bg-white hover:text-gray-600"
          >
            X
          </button>
        </div>

        <form className="flex flex-col mt-5">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="border border-gray-300 rounded px-2 py-1 w-96 mb-2"
            name="name"
            onChange={handleOnChangeForm}
          />

          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            className="border border-gray-300 rounded px-2 py-1 w-96 mb-2"
            name="description"
            onChange={handleOnChangeForm}
          />

          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="border border-gray-300 rounded px-2 py-1 w-96 mb-2"
            name="price"
            onChange={handleOnChangeForm}
          />
          <label htmlFor="category">Category</label>
          {/* <input
            type="text"
            className="border border-gray-300 rounded px-2 py-1 w-96 mb-2"
            name="category"
            onChange={handleOnChangeForm}
          /> */}
          <select
            name="category"
            className="border border-gray-300 rounded px-2 py-1 w-96 mb-2"
            onChange={handleOnChangeForm}
          >
            <option selected disabled>
              -- Select Category --
            </option>
            {categories &&
              categories.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.name}
                </option>
              ))}
          </select>
          <label htmlFor="imgUrl">Image Url</label>
          <input
            type="text"
            className="border border-gray-300 rounded px-2 py-1 w-96 mb-2"
            name="imgUrl"
          />
          <label htmlFor="ingredients">Ingredients</label>
          <input
            type="text"
            className="border border-gray-300 rounded px-2 py-1 w-96 mb-2"
            name="ingredients"
          />

          {input &&
            input.map((data, i) => {
              return (
                <div className="flex" key={i}>
                  <input
                    type="text"
                    className="border border-gray-300 rounded px-2 py-1 w-full mr-4 mb-2"
                    name="ingredients"
                    onChange={(e) => handleValueChange(e, i)}
                    value={data}
                  />
                  <button
                    onClick={(e) => handleDeleteINput(e, i)}
                    className="text-red-500"
                  >
                    remove
                  </button>
                </div>
              );
            })}
          <div className="flex justify-between">
            <button
              onClick={handleAddInput}
              className="px-3 py-2 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600"
            >
              Add Ingredients
            </button>
            <button
              onClick={(e) => {
                onClose();
                handleSubmitForm(e);
              }}
              className="px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}